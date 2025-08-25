"use client";
import { useEffect, useRef } from "react";
import type Phaser from "phaser";
import type { Competence, RoundResult } from "./types";
import {
  normalize,
  pickRandom,
  pickDifferent,
  clamp,
  id,
  resizeArcadeBodyToText,
} from "./utils";
import { NEON, FONT_MONO, FONT_TITLE } from "./palette";

interface Props {
  competences: Competence[];
  onRoundComplete?: (res: RoundResult) => void;
  onGameOver?: () => void;
}

export default function GameCanvas({
  competences,
  onRoundComplete,
  onGameOver,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: Phaser.Game | undefined;
    (async () => {
      const PhaserLib = (await import("phaser")).default as typeof Phaser;

      const GAME_W = Math.min(
        960,
        Math.max(
          720,
          Math.floor(
            (typeof window !== "undefined" ? window.innerWidth : 960) * 0.95,
          ),
        ),
      );
      const GAME_H = Math.min(
        640,
        Math.max(
          540,
          Math.floor(
            (typeof window !== "undefined" ? window.innerHeight : 640) * 0.85,
          ),
        ),
      );

      // Helper: build a round from competences
      const makeRound = () => {
        const competence = pickRandom(competences);
        const pool = Array.from(new Set(competences.flat()));
        return { competence, pool };
      };

      class MainScene extends PhaserLib.Scene {
        constructor() {
          super("main");
        }
        // world & objs
        player!: Phaser.GameObjects.Triangle;
        bullets!: Phaser.Physics.Arcade.Group;
        targets!: Phaser.Physics.Arcade.Group;
        grid!: Phaser.GameObjects.Graphics;

        // game state
        competence!: string[];
        pool!: string[];
        nextIndex = 0;
        requiredTarget: Phaser.GameObjects.Text | null = null;

        typed = "";
        lives = 3;
        score = 0;
        speed = 95;
        spawnTimer?: Phaser.Time.TimerEvent;

        // per-round stats
        roundHits = 0;
        roundWrong = 0;
        roundStart = 0;
        roundScoreDelta = 0;

        // HUD
        hudNext!: Phaser.GameObjects.Text;
        hudScore!: Phaser.GameObjects.Text;
        hudLives!: Phaser.GameObjects.Text;
        hudTyped!: Phaser.GameObjects.Text;

        create() {
          this.cameras.main.setBackgroundColor(0x000000);
          this.physics.world.setBounds(0, 0, GAME_W, GAME_H);

          // Neon grid background
          this.grid = this.add.graphics();
          this.drawNeonGrid(PhaserLib);

          // particle texture
          const g = this.add.graphics();
          g.fillStyle(NEON.cyan, 1);
          g.fillCircle(4, 4, 4);
          g.generateTexture("dot", 8, 8);
          g.destroy();

          // Player
          this.player = this.add
            .triangle(GAME_W / 2, GAME_H - 42, 0, 24, 12, 0, 24, 24, 0xffffff)
            .setOrigin(0.5);
          this.physics.add.existing(this.player);
          (this.player.body as Phaser.Physics.Arcade.Body).setImmovable(true);

          // Groups
          this.bullets = this.physics.add.group();
          this.targets = this.physics.add.group();

          // Controls
          this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
            this.player.x = clamp(p.x, 20, GAME_W - 20);
          });
          this.input.on("pointerdown", () => this.shootStraight());
          this.input.keyboard!.on("keydown", (ev: KeyboardEvent) =>
            this.handleTyping(ev),
          );

          // Bullet ↔ target collisions
          this.physics.add.overlap(
            this.bullets,
            this.targets,
            (b: any, t: any) => this.onBulletHitTarget(b, t),
          );

          // HUD
          const style = {
            fontFamily: FONT_MONO,
            fontSize: "18px",
            color: "#e9f5ff",
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
            .text(GAME_W / 2, GAME_H - 16, "", {
              ...style,
              fontSize: "20px",
            })
            .setOrigin(0.5, 1);
          this.updateHUD();

          // Start a round immediately with the first required chunk present
          this.startRound();
        }

        // ---------- Round lifecycle ----------
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

          // Force-spawn the first required chunk
          this.spawnRequired();

          // Begin stream of decoys (and sometimes the next required when none exists)
          if (this.spawnTimer) this.spawnTimer.remove(false);
          this.spawnTimer = this.time.addEvent({
            delay: 1050,
            loop: true,
            callback: () => this.spawnStreamTick(),
          });

          this.updateHUD();
        }

        spawnStreamTick() {
          // If there is no required target on screen, make sure one is present
          if (!this.requiredTarget && this.nextIndex < this.competence.length) {
            this.spawnRequired();
            return;
          }
          // Otherwise, spawn mostly decoys
          this.spawnDecoy();
        }

        // ---------- Spawning ----------
        spawnRequired() {
          if (this.nextIndex >= this.competence.length) return;
          const chunk = this.competence[this.nextIndex];
          const txt = this.spawnText(chunk, {
            isRequired: true,
            reqIndex: this.nextIndex,
          });
          this.requiredTarget = txt;
        }

        spawnDecoy() {
          const current = this.competence[this.nextIndex] ?? "";
          const pool = this.pool.filter(
            (c) => normalize(c) !== normalize(current),
          );
          const decoy = pool.length ? pickDifferent(pool, current) : current;
          this.spawnText(decoy, { isRequired: false, reqIndex: -1 });
        }

        spawnText(label: string, opts: { isRequired: boolean; reqIndex: number }) {
          const x = PhaserLib.Math.Between(120, GAME_W - 120);
          const y = -24;
          const txt = this.add
            .text(x, y, label, {
              fontFamily: FONT_MONO,
              fontSize: "24px",
              color: "#ffffff",
              backgroundColor: "#0b0f12",
              padding: { x: 12, y: 6 } as any,
            })
            .setOrigin(0.5)
            .setStroke("#000000", 4)
            .setShadow(0, 0, "#00fff0", 12, true, true);

          this.physics.add.existing(txt);
          const body = txt.body as Phaser.Physics.Arcade.Body;
          resizeArcadeBodyToText(txt, body);

          body.setVelocityY(this.speed + PhaserLib.Math.Between(0, 30));
          body.setImmovable(true);

          txt.setData("isRequired", opts.isRequired);
          txt.setData("reqIndex", opts.reqIndex);
          txt.setData("id", id());

          // Zig-zag
          this.tweens.add({
            targets: txt,
            x: x + PhaserLib.Math.Between(-90, 90),
            duration: 1400,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut",
          });

          // CLICK to select
          txt.setInteractive({ useHandCursor: true });
          txt.on("pointerdown", () => this.selectTarget(txt));

          this.targets.add(txt);
          return txt;
        }

        // ---------- Input ----------
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
          if (key.length === 1 || key === " ") {
            this.typed += key === " " ? " " : key;
          }

          const nextChunk = this.competence[this.nextIndex] ?? "";
          const typedN = normalize(this.typed);
          const nextN = normalize(nextChunk);

          if (typedN && !nextN.startsWith(typedN)) {
            // feedback but no life loss
            this.cameras.main.shake(90, 0.002);
          }

          // If exact match → auto-select the on-screen required word
          if (typedN && typedN === nextN && this.requiredTarget) {
            this.shootAndSelect(this.requiredTarget); // visual + logical selection
            this.typed = "";
          }
          this.updateHUD();
        }

        // ---------- Selection (click or keyboard) ----------
        selectTarget(target: Phaser.GameObjects.Text) {
          const isRequired = !!target.getData("isRequired");
          const reqIndex = Number(target.getData("reqIndex"));

          if (isRequired && reqIndex === this.nextIndex) {
            // Correct
            this.onCorrect(target);
          } else {
            // Wrong order/word
            this.onWrong(target);
          }
        }

        onCorrect(target: Phaser.GameObjects.Text) {
          // burst
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
          if (
            this.requiredTarget &&
            this.requiredTarget.getData("id") === target.getData("id")
          ) {
            this.requiredTarget = null;
          }

          this.nextIndex++;
          this.roundHits++;
          this.roundScoreDelta += 120;
          this.speed += 6;
          this.updateHUD();

          if (this.nextIndex >= this.competence.length) {
            this.winSentence();
          } else {
            // ensure next required appears quickly
            this.time.delayedCall(300, () => this.spawnRequired());
          }
        }

        onWrong(target: Phaser.GameObjects.Text) {
          this.cameras.main.shake(180, 0.01);
          this.roundWrong++;
          this.roundScoreDelta = Math.max(0, this.roundScoreDelta - 60);
          this.loseLife();
        }

        // ---------- Bullets (visual) ----------
        shootStraight() {
          const r = this.add
            .rectangle(this.player.x, this.player.y - 22, 4, 14, NEON.magenta)
            .setOrigin(0.5);
          this.physics.add.existing(r);
          (r.body as Phaser.Physics.Arcade.Body).setVelocityY(-540);
          this.bullets.add(r);
        }

        shootAndSelect(target: Phaser.GameObjects.Text) {
          // Visual bullet that guarantees a hit on the target, then selectTarget on overlap
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

          // subtle player tween
          this.tweens.add({
            targets: this.player,
            x: target.x,
            duration: 160,
            ease: "Sine.easeOut",
          });
        }

        onBulletHitTarget(bullet: any, t: any) {
          bullet.destroy();
          const textObj = t as Phaser.GameObjects.Text;
          this.selectTarget(textObj);
        }

        // ---------- Update loop ----------
        update() {
          // Kill texts that fall below
          this.targets.getChildren().forEach((obj: any) => {
            const txt = obj as Phaser.GameObjects.Text;
            if (txt.y > GAME_H + 30) {
              const isRequired = !!txt.getData("isRequired");
              const reqIndex = Number(txt.getData("reqIndex"));
              txt.destroy();

              if (isRequired && reqIndex === this.nextIndex) {
                // Missed the required one
                this.requiredTarget = null;
                this.loseLife();
                // spawn a fresh required to keep the flow
                this.time.delayedCall(400, () => this.spawnRequired());
              }
            }
          });

          // Purge bullets offscreen
          this.bullets.getChildren().forEach((b: any) => {
            if (b.y < -20 || b.x < -20 || b.x > GAME_W + 20) b.destroy();
          });

          // Visual hint: highlight the required tile, and prefix match
          this.highlightTargets();
        }

        highlightTargets() {
          const typedN = normalize(this.typed);
          const next = this.competence[this.nextIndex] ?? "";
          const nextN = normalize(next);

          (this.targets.getChildren() as any[]).forEach((t) => {
            const textObj = t as Phaser.GameObjects.Text;
            const isRequired = !!textObj.getData("isRequired");
            const reqIndex = Number(textObj.getData("reqIndex"));

            if (isRequired && reqIndex === this.nextIndex) {
              const isPrefix = typedN && nextN.startsWith(typedN);
              textObj.setStyle({
                backgroundColor: isPrefix ? "#123a2a" : "#0b0f12",
                color: isPrefix ? "#d6ffd6" : "#ffffff",
              });
              textObj.setShadow(
                0,
                0,
                isPrefix ? "#9cff57" : "#00fff0",
                14,
                true,
                true,
              );
            } else {
              textObj.setStyle({ backgroundColor: "#0b0f12", color: "#ffffff" });
              textObj.setShadow(0, 0, "#00fff0", 12, true, true);
            }
          });
        }

        // ---------- Life/score/sentence ----------
        loseLife() {
          this.lives--;
          this.updateHUD();
          if (this.lives <= 0) {
            this.gameOver();
          } else {
            // Encourage success by ensuring a required piece is visible soon
            this.time.delayedCall(500, () => {
              if (!this.requiredTarget) this.spawnRequired();
            });
          }
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

          if (onRoundComplete) onRoundComplete(res);

          // Start a new sentence a bit later (game keeps flowing like Tetris)
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
            typedShow ? `${typedShow}${ghostSuffix}` : `Tape: ${ghost}`,
          );
        }

        drawNeonGrid(P: typeof Phaser) {
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
        type: PhaserLib.AUTO,
        width: GAME_W,
        height: GAME_H,
        parent: (containerRef.current as unknown as string | HTMLElement)!,
        physics: { default: "arcade", arcade: { debug: false } },
        scene: [MainScene],
        transparent: true,
      };

      game = new PhaserLib.Game(config);
    })();

    return () => {
      if (game) game.destroy(true);
    };
  }, [competences, onGameOver, onRoundComplete]);

  return <div ref={containerRef} className="w-full h-full" />;
}

