"use client";
import { useEffect, useRef } from "react";
import type { Competence, RoundResult } from "./types";
import { normalize, pickRandom } from "./utils";

interface Props {
  competences: Competence[];
  onRoundComplete?: (res: RoundResult) => void;
  onGameOver?: () => void;
}

export default function GameCanvas({ competences, onRoundComplete, onGameOver }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: any;
    (async () => {
      const Phaser = (await import("phaser")).default;

      const GAME_W = Math.min(
        960,
        Math.max(720, Math.floor((typeof window !== "undefined" ? window.innerWidth : 960) * 0.95))
      );
      const GAME_H = Math.min(
        640,
        Math.max(540, Math.floor((typeof window !== "undefined" ? window.innerHeight : 640) * 0.85))
      );

      // Neon palette
      const NEON = {
        cyan: 0x00fff0,
        magenta: 0xff0080,
        lime: 0x9cff57,
        yellow: 0xffef5a,
        bgText: "#0b0f12",
        text: "#e9f5ff",
      } as const;

      // Fabrique une manche
      const makeRound = () => {
        const competence = pickRandom(competences);
        const pool = Array.from(new Set(competences.flat()));
        return { competence, pool };
      };

      type EmitterManager = Phaser.GameObjects.GameObject & {
        createEmitter: (
          config?: Phaser.Types.GameObjects.Particles.ParticleEmitterConfig
        ) => Phaser.GameObjects.Particles.ParticleEmitter;
      };

      // --- Scene ---
      class MainScene extends Phaser.Scene {
        // objets
        player!: Phaser.GameObjects.Triangle;
        bullets!: Phaser.Physics.Arcade.Group;
        targets!: Phaser.Physics.Arcade.Group;
        grid!: Phaser.GameObjects.Graphics;

        // état logique
        competence!: string[];
        pool!: string[];
        nextIndex = 0;
        typed = "";

        // HUD
        hudNext!: Phaser.GameObjects.Text;
        hudScore!: Phaser.GameObjects.Text;
        hudLives!: Phaser.GameObjects.Text;
        hudTyped!: Phaser.GameObjects.Text;

        // gameplay
        lives = 3;
        speed = 90;
        spawnTimer?: Phaser.Time.TimerEvent;
        score = 0; // total cumulé

        // stats de manche
        roundHits = 0;
        roundWrong = 0;
        roundStart = 0;
        roundScoreDelta = 0;

        particleMgr!: EmitterManager;
        trail!: Phaser.GameObjects.Particles.ParticleEmitter;

        create() {
          this.cameras.main.setBackgroundColor(0x000000);

          // Subtle neon grid background
          this.grid = this.add.graphics();
          this.drawNeonGrid();

          // particle texture
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

          // trail
          // cast due to missing Phaser ParticleEmitterManager typings in our env
          this.particleMgr = this.add.particles(0, 0, "dot") as unknown as EmitterManager;
          this.trail = this.particleMgr.createEmitter({
            follow: this.player,
            quantity: 1,
            frequency: 18,
            lifespan: 260,
            speed: { min: 10, max: 60 },
            scale: { start: 0.8, end: 0 },
            alpha: { start: 0.7, end: 0 },
            tint: [NEON.cyan, NEON.magenta],
            blendMode: "ADD",
          });

          // groups
          this.bullets = this.physics.add.group({ runChildUpdate: false });
          this.targets = this.physics.add.group({ runChildUpdate: false });

          // controls
          this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
            this.player.x = Phaser.Math.Clamp(p.x, 20, GAME_W - 20);
          });
          this.input.on("pointerdown", () => this.shootStraight());
          this.input.keyboard!.on("keydown", (ev: KeyboardEvent) => this.handleTyping(ev));

          // collisions
          this.physics.add.overlap(this.bullets, this.targets, (b: any, t: any) =>
            this.handleHit(b, t)
          );

          // HUD
          const style = {
            fontFamily:
              "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "18px",
            color: NEON.text,
          } as const;
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
          this.updateHUD();

          // spawns
          this.spawnTimer = this.time.addEvent({
            delay: 1100,
            loop: true,
            callback: () => this.spawnTargetRandom(),
          });
        }

        drawNeonGrid() {
          this.grid.clear();
          // faint cyan grid
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
          // accent magenta lines
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

        update() {
          // sortie d'écran
          this.targets.getChildren().forEach((obj: any) => {
            if (obj.y > GAME_H + 30) {
              const idx = obj.getData("chunkIndex");
              obj.destroy();
              if (idx === this.nextIndex) this.missRequired();
            }
          });

          // purge balles
          this.bullets.getChildren().forEach((b: any) => {
            if (b.y < -20 || b.x < -20 || b.x > GAME_W + 20) b.destroy();
          });

          // feedback visuel
          this.highlightTargets();
        }

        // --- input ---
        handleTyping(ev: KeyboardEvent) {
          const key = ev.key;
          if (key === "Backspace") {
            this.typed = this.typed.slice(0, -1);
            this.updateHUD();
            return;
          }
          if (key === "Escape") {
            this.typed = "";
            this.updateHUD();
            return;
          }
          if (key.length === 1 || key === " " || key === "Spacebar") {
            const ch = key === "Spacebar" ? " " : key;
            this.typed += ch;
          }

          const next = this.competence[this.nextIndex] ?? "";
          const typedN = normalize(this.typed);
          const nextN = normalize(next);
          if (typedN && !nextN.startsWith(typedN))
            this.cameras.main.shake(90, 0.002);
          if (typedN && typedN === nextN) {
            this.fireAtRequired();
            this.typed = "";
          }
          this.updateHUD();
        }

        // --- tirs ---
        shootStraight() {
          const r = this.add
            .rectangle(this.player.x, this.player.y - 22, 4, 14, NEON.magenta)
            .setOrigin(0.5);
          this.physics.add.existing(r);
          (r.body as Phaser.Physics.Arcade.Body).setVelocityY(-540);
          this.bullets.add(r);
        }

        fireAtRequired() {
          const target =
            this.findTargetForIndex(this.nextIndex) ??
            this.spawnTargetForIndex(this.nextIndex);
          const bullet = this.add
            .rectangle(this.player.x, this.player.y - 22, 5, 16, NEON.cyan)
            .setOrigin(0.5);
          this.physics.add.existing(bullet);
          const body = bullet.body as Phaser.Physics.Arcade.Body;
          const dx = target.x - this.player.x;
          const dy = target.y - (this.player.y - 22);
          const len = Math.max(1, Math.hypot(dx, dy));
          const speed = 600;
          body.setVelocity((dx / len) * speed, (dy / len) * speed);
          this.bullets.add(bullet);
          this.tweens.add({ targets: this.player, x: target.x, duration: 160, ease: "Sine.easeOut" });

          // burst particles
          const burst = this.particleMgr.createEmitter({
            x: this.player.x,
            y: this.player.y - 22,
            quantity: 8,
            lifespan: 250,
            speed: { min: 80, max: 160 },
            angle: { min: -100, max: -80 },
            scale: { start: 0.7, end: 0 },
            alpha: { start: 0.8, end: 0 },
            tint: [NEON.cyan, NEON.magenta],
            blendMode: "ADD",
          });
          this.time.delayedCall(280, () => burst.stop());
        }

        // --- cibles ---
        spawnTargetRandom() {
          if (this.lives <= 0 || this.nextIndex >= this.competence.length) return;
          const useRequired = Math.random() < 0.35;
          const chunk = useRequired
            ? this.competence[this.nextIndex]
            : pickRandom(this.pool);
          const idx = this.competence.indexOf(chunk);
          this.spawnTarget(chunk, idx);
        }

        spawnTargetForIndex(idx: number) {
          const chunk = this.competence[idx];
          return this.spawnTarget(chunk, idx);
        }

        spawnTarget(chunk: string, chunkIndex: number) {
          const x = Phaser.Math.Between(120, GAME_W - 120);
          const y = -24;
          const txt = this.add
            .text(x, y, chunk, {
              fontFamily:
                "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "24px",
              color: NEON.text,
              backgroundColor: NEON.bgText,
              padding: { x: 12, y: 6 } as any,
            })
            .setOrigin(0.5)
            .setStroke("#000000", 4)
            .setShadow(0, 0, "#00fff0", 12, true, true);
          this.physics.add.existing(txt);
          const body = txt.body as Phaser.Physics.Arcade.Body;
          body.setVelocityY(this.speed + Phaser.Math.Between(0, 30));
          body.setImmovable(true);
          (txt as any).setData?.("chunkIndex", chunkIndex);
          (txt as any).setData?.("textObj", txt);
          this.tweens.add({
            targets: txt,
            x: x + Phaser.Math.Between(-90, 90),
            duration: 1400,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut",
          });
          this.targets.add(txt);
          return txt;
        }

        findTargetForIndex(idx: number): any | null {
          const kids = this.targets.getChildren() as any[];
          for (const t of kids) if (t.getData("chunkIndex") === idx) return t;
          return null;
        }

        highlightTargets() {
          const typedN = normalize(this.typed);
          const next = this.competence[this.nextIndex] ?? "";
          const nextN = normalize(next);
          (this.targets.getChildren() as any[]).forEach((t) => {
            const textObj = t.getData("textObj") as Phaser.GameObjects.Text | undefined;
            if (!textObj) return;
            if (normalize(textObj.text) === nextN) {
              const isPrefix = typedN && nextN.startsWith(typedN);
              textObj.setStyle({
                backgroundColor: isPrefix ? "#123a2a" : NEON.bgText,
                color: isPrefix ? "#d6ffd6" : NEON.text,
              });
              textObj.setShadow(0, 0, isPrefix ? "#9cff57" : "#00fff0", 14, true, true);
            } else {
              textObj.setStyle({ backgroundColor: NEON.bgText, color: NEON.text });
              textObj.setShadow(0, 0, "#00fff0", 12, true, true);
            }
          });
        }

        // --- collisions / états ---
        handleHit(bullet: any, target: any) {
          bullet.destroy();
          const idx = target.getData("chunkIndex");
          const isCorrect = idx === this.nextIndex;
          if (isCorrect) {
            // hit burst
            const burst = this.particleMgr.createEmitter({
              x: target.x,
              y: target.y,
              quantity: 16,
              lifespan: 300,
              speed: { min: 60, max: 180 },
              angle: { min: 0, max: 360 },
              scale: { start: 0.8, end: 0 },
              alpha: { start: 0.9, end: 0 },
              tint: [NEON.lime, NEON.cyan],
              blendMode: "ADD",
            });
            this.time.delayedCall(300, () => burst.stop());

            target.destroy();
            this.nextIndex++;
            this.roundHits++;
            this.roundScoreDelta += 120;
            this.speed += 6;
            this.cameras.main.flash(120, 40, 140, 40);
            if (this.nextIndex >= this.competence.length) this.winRound();
          } else {
            this.cameras.main.shake(160, 0.008);
            this.roundWrong++;
            this.roundScoreDelta = Math.max(0, this.roundScoreDelta - 60);
          }
          this.updateHUD();
        }

        missRequired() {
          this.lives--;
          this.cameras.main.shake(250, 0.012);
          if (this.lives <= 0) {
            this.gameOver();
          } else {
            this.time.delayedCall(500, () => this.spawnTargetForIndex(this.nextIndex));
          }
          this.updateHUD();
        }

        winRound() {
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
              fontFamily: "Orbitron, system-ui, sans-serif",
              fontSize: "44px",
              color: "#66ff99",
            })
            .setOrigin(0.5)
            .setDepth(10)
            .setShadow(0, 0, "#9cff57", 24, true, true);

          if (onRoundComplete) onRoundComplete(res);
          this.time.delayedCall(400, () => this.nextRound());
        }
        nextRound() {
          const { competence, pool } = makeRound();
          this.targets.clear(true, true);
          this.bullets.clear(true, true);
          this.competence = competence;
          this.pool = pool;
          this.nextIndex = 0;
          this.speed = 90;
          this.typed = "";
          this.roundHits = 0;
          this.roundWrong = 0;
          this.roundScoreDelta = 0;
          this.roundStart = this.time.now;
          if (this.spawnTimer) this.spawnTimer.remove(false);
          this.spawnTimer = this.time.addEvent({
            delay: 1100,
            loop: true,
            callback: () => this.spawnTargetRandom(),
          });
          this.updateHUD();
        }

        gameOver() {
          this.add
            .text(GAME_W / 2, GAME_H / 2, "Game Over", {
              fontFamily: "Orbitron, system-ui, sans-serif",
              fontSize: "56px",
              color: "#ff6666",
            })
            .setOrigin(0.5)
            .setDepth(10)
            .setShadow(0, 0, "#ff0080", 24, true, true);
          this.time.removeAllEvents();
          if (onGameOver) onGameOver();
          this.input.keyboard!.once("keydown", () => this.scene.restart());
        }

        updateHUD() {
          const nextText =
            this.nextIndex < this.competence.length
              ? this.competence[this.nextIndex]
              : "—";
          this.hudNext.setText(`Prochain: ${nextText}`);
          this.hudScore.setText(`Score: ${this.score}`);
          this.hudLives.setText(`Vies: ${this.lives}`);
          const typedShow = this.typed || "";
          const ghost =
            this.nextIndex < this.competence.length
              ? this.competence[this.nextIndex]
              : "";
          const ghostSuffix = ghost.slice(typedShow.length);
          this.hudTyped.setText(
            typedShow ? `${typedShow}${ghostSuffix}` : `Tape: ${ghost}`
          );
        }
      }

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: GAME_W,
        height: GAME_H,
        parent: (containerRef.current as unknown as string | HTMLElement)!,
        physics: { default: "arcade", arcade: { debug: false } },
        scene: [MainScene],
        transparent: true,
      };

      game = new Phaser.Game(config);
    })();

    return () => {
      if (game) game.destroy(true);
    };
  }, [competences, onGameOver, onRoundComplete]);

  return <div ref={containerRef} className="w-full h-full" />;
}

