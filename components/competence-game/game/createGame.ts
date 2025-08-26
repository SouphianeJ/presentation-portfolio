// client-only game factory: no top-level Phaser import here
import { normalize, pickRandom, pickDifferent, clamp, id, resizeArcadeBodyToText } from "../utils";
import { NEON, FONT_MONO, FONT_TITLE } from "../palette";
import type { Competence, RoundResult } from "../types";

export async function createGame(
  container: HTMLElement,
  opts: {
    competences: Competence[];
    onRoundComplete?: (r: RoundResult) => void;
    onGameOver?: () => void;
  }
) {
  const { default: Phaser } = await import("phaser");

  const GAME_W = Math.min(960, Math.max(720, Math.floor(window.innerWidth * 0.95)));
  const GAME_H = Math.min(640, Math.max(540, Math.floor(window.innerHeight * 0.85)));

  const makeRound = () => {
    const competence = pickRandom(opts.competences);
    const pool = Array.from(new Set(opts.competences.flat()));
    return { competence, pool };
  };

  class MainScene extends Phaser.Scene {
    player!: Phaser.GameObjects.Triangle;
    bullets!: Phaser.Physics.Arcade.Group;
    targets!: Phaser.Physics.Arcade.Group;
    grid!: Phaser.GameObjects.Graphics;

    competence!: string[];
    pool!: string[];
    nextIndex = 0;
    requiredTarget: Phaser.GameObjects.Text | null = null;

    typed = "";
    lives = 3;
    score = 0;
    speed = 95;
    spawnTimer?: Phaser.Time.TimerEvent;

    roundHits = 0;
    roundWrong = 0;
    roundStart = 0;
    roundScoreDelta = 0;

    hudNext!: Phaser.GameObjects.Text;
    hudScore!: Phaser.GameObjects.Text;
    hudLives!: Phaser.GameObjects.Text;
    hudTyped!: Phaser.GameObjects.Text;

    create() {
      this.cameras.main.setBackgroundColor(0x000000);
      this.physics.world.setBounds(0, 0, GAME_W, GAME_H);

      this.grid = this.add.graphics();
      this.drawGrid();

      // small particle texture
      const g = this.add.graphics();
      g.fillStyle(NEON.cyan, 1);
      g.fillCircle(4, 4, 4);
      g.generateTexture("dot", 8, 8);
      g.destroy();

      // player
      this.player = this.add
        .triangle(GAME_W / 2, GAME_H - 42, 0, 24, 12, 0, 24, 24, 0xffffff)
        .setOrigin(0.5);
      this.physics.add.existing(this.player);
      (this.player.body as Phaser.Physics.Arcade.Body).setImmovable(true);

      this.bullets = this.physics.add.group();
      this.targets = this.physics.add.group();

      this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
        this.player.x = clamp(p.x, 20, GAME_W - 20);
      });
      this.input.on("pointerdown", () => this.shootStraight());
      this.input.keyboard!.on("keydown", (ev: KeyboardEvent) => this.onType(ev));

      this.physics.add.overlap(
        this.bullets,
        this.targets,
        (b: any, t: any) => {
          b.destroy();
          this.selectTarget(t as Phaser.GameObjects.Text);
        },
      );

      const style = { fontFamily: FONT_MONO, fontSize: "18px", color: "#e9f5ff" } as const;
      this.hudNext = this.add
        .text(12, 12, "", style)
        .setShadow(0, 0, "#00fff0", 12, true, true);
      this.hudScore = this.add
        .text(12, 36, "", style)
        .setShadow(0, 0, "#ff0080", 10, true, true);
      this.hudLives = this.add
        .text(12, 60, "", style)
        .setShadow(0, 0, "#9cff57", 10, true, true);
      this.hudTyped = this.add
        .text(GAME_W / 2, GAME_H - 16, "", { ...style, fontSize: "20px" })
        .setOrigin(0.5, 1);

      this.startRound();
    }

    // round
    startRound() {
      const { competence, pool } = makeRound();
      this.competence = competence;
      this.pool = pool;
      this.nextIndex = 0;
      this.typed = "";
      this.speed = 95;
      this.roundHits = 0;
      this.roundWrong = 0;
      this.roundScoreDelta = 0;
      this.roundStart = this.time.now;

      this.targets.clear(true, true);
      this.bullets.clear(true, true);
      this.requiredTarget = null;

      this.spawnRequired();
      this.spawnTimer?.remove(false);
      this.spawnTimer = this.time.addEvent({
        delay: 1050,
        loop: true,
        callback: () => this.tickSpawn(),
      });
      this.updateHUD();
    }

    tickSpawn() {
      if (!this.requiredTarget && this.nextIndex < this.competence.length)
        this.spawnRequired();
      else this.spawnDecoy();
    }

    spawnRequired() {
      if (this.nextIndex >= this.competence.length) return;
      const chunk = this.competence[this.nextIndex];
      const txt = this.spawnText(chunk, true, this.nextIndex);
      this.requiredTarget = txt;
    }

    spawnDecoy() {
      const current = this.competence[this.nextIndex] ?? "";
      const pool = this.pool.filter((c) => normalize(c) !== normalize(current));
      const decoy = pool.length ? pickDifferent(pool, current) : current;
      this.spawnText(decoy, false, -1);
    }

    spawnText(label: string, isRequired: boolean, reqIndex: number) {
      const x = Phaser.Math.Between(120, GAME_W - 120),
        y = -24;
      const txt = this.add
        .text(x, y, label, {
          fontFamily: FONT_MONO,
          fontSize: "24px",
          color: "#ffffff",
          backgroundColor: "#0b0f12",
          padding: { x: 12, y: 6 } as any,
        })
        .setOrigin(0.5)
        .setStroke("#000", 4)
        .setShadow(0, 0, "#00fff0", 12, true, true);

      this.physics.add.existing(txt);
      const body = txt.body as Phaser.Physics.Arcade.Body;
      resizeArcadeBodyToText(txt, body);
      body.setVelocityY(this.speed + Phaser.Math.Between(0, 30));
      body.setImmovable(true);

      txt.setData("isRequired", isRequired);
      txt.setData("reqIndex", reqIndex);
      txt.setData("id", id());

      this.tweens.add({
        targets: txt,
        x: x + Phaser.Math.Between(-90, 90),
        duration: 1400,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });

      txt.setInteractive({ useHandCursor: true });
      txt.on("pointerdown", () => this.selectTarget(txt));

      this.targets.add(txt);
      return txt;
    }

    onType(ev: KeyboardEvent) {
      const k = ev.key;
      if (k === "Backspace") {
        this.typed = this.typed.slice(0, -1);
        this.updateHUD();
        return;
      }
      if (k === "Escape") {
        this.typed = "";
        this.updateHUD();
        return;
      }
      if (k.length === 1 || k === " ") this.typed += k === " " ? " " : k;

      const next = this.competence[this.nextIndex] ?? "";
      const typedN = normalize(this.typed),
        nextN = normalize(next);
      if (typedN && !nextN.startsWith(typedN)) this.cameras.main.shake(90, 0.002);
      if (typedN && typedN === nextN && this.requiredTarget) {
        this.shootTo(this.requiredTarget);
        this.typed = "";
      }
      this.updateHUD();
    }

    selectTarget(target: Phaser.GameObjects.Text) {
      const isRequired = !!target.getData("isRequired");
      const reqIndex = Number(target.getData("reqIndex"));
      if (isRequired && reqIndex === this.nextIndex) this.onCorrect(target);
      else this.onWrong(target);
    }

    onCorrect(target: Phaser.GameObjects.Text) {
      const burst = this.add.particles(target.x, target.y, "dot", {
        lifespan: 300,
        speed: { min: 60, max: 180 },
        angle: { min: 0, max: 360 },
        scale: { start: 0.8, end: 0 },
        alpha: { start: 0.9, end: 0 },
        tint: [NEON.lime, NEON.cyan],
        blendMode: "ADD",
        emitting: false,
      });
      burst.explode(16);
      this.time.delayedCall(300, () => burst.destroy());

      target.destroy();
      if (this.requiredTarget && this.requiredTarget.getData("id") === target.getData("id"))
        this.requiredTarget = null;

      this.nextIndex++;
      this.roundHits++;
      this.roundScoreDelta += 120;
      this.speed += 6;
      if (this.nextIndex >= this.competence.length) this.winSentence();
      else this.time.delayedCall(300, () => this.spawnRequired());
      this.updateHUD();
    }

    onWrong(_t: Phaser.GameObjects.Text) {
      this.cameras.main.shake(180, 0.01);
      this.roundWrong++;
      this.roundScoreDelta = Math.max(0, this.roundScoreDelta - 60);
      this.loseLife();
    }

    shootStraight() {
      const r = this.add.rectangle(this.player.x, this.player.y - 22, 4, 14, NEON.magenta).setOrigin(0.5);
      this.physics.add.existing(r);
      (r.body as Phaser.Physics.Arcade.Body).setVelocityY(-540);
      this.bullets.add(r);
    }

    shootTo(target: Phaser.GameObjects.Text) {
      const b = this.add.rectangle(this.player.x, this.player.y - 22, 5, 16, NEON.cyan).setOrigin(0.5);
      this.physics.add.existing(b);
      const body = b.body as Phaser.Physics.Arcade.Body,
        dx = target.x - this.player.x,
        dy = target.y - (this.player.y - 22);
      const len = Math.max(1, Math.hypot(dx, dy)),
        speed = 600;
      body.setVelocity((dx / len) * speed, (dy / len) * speed);
      this.bullets.add(b);
      this.tweens.add({ targets: this.player, x: target.x, duration: 160, ease: "Sine.easeOut" });
    }

    update() {
      this.targets.getChildren().forEach((o: any) => {
        const t = o as Phaser.GameObjects.Text;
        if (t.y > GAME_H + 30) {
          const isRequired = !!t.getData("isRequired"),
            reqIndex = Number(t.getData("reqIndex"));
          t.destroy();
          if (isRequired && reqIndex === this.nextIndex) {
            this.requiredTarget = null;
            this.loseLife();
            this.time.delayedCall(400, () => this.spawnRequired());
          }
        }
      });
      this.bullets.getChildren().forEach((b: any) => {
        if (b.y < -20 || b.x < -20 || b.x > GAME_W + 20) b.destroy();
      });
      this.highlight();
    }

    highlight() {
      const typedN = normalize(this.typed),
        next = this.competence[this.nextIndex] ?? "",
        nextN = normalize(next);
      (this.targets.getChildren() as any[]).forEach((o) => {
        const t = o as Phaser.GameObjects.Text,
          isRequired = !!t.getData("isRequired"),
          reqIndex = Number(t.getData("reqIndex"));
        if (isRequired && reqIndex === this.nextIndex) {
          const isPrefix = typedN && nextN.startsWith(typedN);
          t.setStyle({
            backgroundColor: isPrefix ? "#123a2a" : "#0b0f12",
            color: isPrefix ? "#d6ffd6" : "#ffffff",
          });
          t.setShadow(0, 0, isPrefix ? "#9cff57" : "#00fff0", 14, true, true);
        } else {
          t.setStyle({ backgroundColor: "#0b0f12", color: "#ffffff" });
          t.setShadow(0, 0, "#00fff0", 12, true, true);
        }
      });
    }

    loseLife() {
      this.lives--;
      this.updateHUD();
      if (this.lives <= 0) this.gameOver();
      else
        this.time.delayedCall(500, () => {
          if (!this.requiredTarget) this.spawnRequired();
        });
    }

    winSentence() {
      const res: RoundResult = {
        competence: this.competence,
        builtSentence: this.competence.join(" "),
        hits: this.roundHits,
        wrongHits: this.roundWrong,
        timeMs: this.time.now - this.roundStart,
        scoreDelta: this.roundScoreDelta,
      };
      this.score += this.roundScoreDelta;
      this.add
        .text(GAME_W / 2, GAME_H / 2, "Bravo !", {
          fontFamily: FONT_TITLE,
          fontSize: "44px",
          color: "#66ff99",
        })
        .setOrigin(0.5)
        .setDepth(10)
        .setShadow(0, 0, "#9cff57", 24, true, true);
      opts.onRoundComplete?.(res);
      this.time.delayedCall(900, () => this.startRound());
    }

    gameOver() {
      this.add
        .text(GAME_W / 2, GAME_H / 2, "Game Over", {
          fontFamily: FONT_TITLE,
          fontSize: "56px",
          color: "#ff6666",
        })
        .setOrigin(0.5)
        .setDepth(10)
        .setShadow(0, 0, "#ff0080", 24, true, true);
      this.time.removeAllEvents();
      opts.onGameOver?.();
      this.input.keyboard!.once("keydown", () => this.scene.restart());
    }

    updateHUD() {
      const next = this.nextIndex < this.competence.length ? this.competence[this.nextIndex] : "—";
      this.hudNext.setText(`Prochain: ${next}`);
      this.hudScore.setText(`Score: ${this.score}`);
      this.hudLives.setText(`Vies: ${this.lives}`);
      const ghost = this.nextIndex < this.competence.length ? this.competence[this.nextIndex] : "";
      const typedShow = this.typed || "";
      const ghostSuffix = ghost.slice(typedShow.length);
      this.hudTyped.setText(typedShow ? `${typedShow}${ghostSuffix}` : `Tape: ${ghost}`);
    }

    drawGrid() {
      this.grid.clear();
      this.grid.lineStyle(1, NEON.cyan, 0.06);
      for (let x = 0; x <= GAME_W; x += 40) {
        this.grid.beginPath();
        this.grid.moveTo(x, 0);
        this.grid.lineTo(x, GAME_H);
        this.grid.strokePath();
      }
      for (let y = 0; y <= GAME_H; y += 40) {
        this.grid.beginPath();
        this.grid.moveTo(0, y);
        this.grid.lineTo(GAME_W, y);
        this.grid.strokePath();
      }
      this.grid.lineStyle(2, NEON.magenta, 0.08);
      for (let x = 0; x <= GAME_W; x += 200) {
        this.grid.beginPath();
        this.grid.moveTo(x, 0);
        this.grid.lineTo(x, GAME_H);
        this.grid.strokePath();
      }
      for (let y = 0; y <= GAME_H; y += 200) {
        this.grid.beginPath();
        this.grid.moveTo(0, y);
        this.grid.lineTo(GAME_W, y);
        this.grid.strokePath();
      }
    }
  }

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GAME_W,
    height: GAME_H,
    parent: container,
    physics: { default: "arcade", arcade: { debug: false } },
    scene: [MainScene],
    transparent: true,
  };

  const game = new Phaser.Game(config);
  return { game, destroy: () => game.destroy(true) };
}

