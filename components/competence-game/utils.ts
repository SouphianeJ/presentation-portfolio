// text normalization for matching
export const normalize = (s: string) =>
  s.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const pickDifferent = (arr: string[], notThis: string) => {
  const pool = arr.filter((x) => normalize(x) !== normalize(notThis));
  return pool.length ? pickRandom(pool) : notThis;
};

export const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export const id = () => Math.random().toString(36).slice(2, 9);

// IMPORTANT: Arcade physics body does not automatically match Text bounds.
// Resize it and align it with origin = 0.5 so overlaps are reliable.
export const resizeArcadeBodyToText = (txt: Phaser.GameObjects.Text, body: Phaser.Physics.Arcade.Body) => {
  const w = Math.ceil(txt.width);
  const h = Math.ceil(txt.height);
  body.setSize(w, h, false);
  // origin is centered → offset half size
  body.setOffset(-w / 2, -h / 2);
};

