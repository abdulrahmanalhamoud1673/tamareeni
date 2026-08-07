// مولّد أيقونات PNG بدون أي مكتبات خارجية (يُشغّل مرة واحدة: node make-icons.js)
const fs = require('fs');
const zlib = require('zlib');

function crc32(buf) {
  let c, table = [];
  for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; table[n] = c >>> 0; }
  let crc = 0xFFFFFFFF;
  for (const b of buf) crc = table[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(size, pixels) { // pixels: Uint8Array RGBA
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    pixels.copy ? pixels.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4)
                : Buffer.from(pixels.buffer, y * size * 4, size * 4).copy(raw, y * (size * 4 + 1) + 1);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0)),
  ]);
}

function draw(size, pad) {
  const px = Buffer.alloc(size * size * 4);
  const set = (x, y, r, g, b) => {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const i = (y * size + x) * 4; px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255;
  };
  // خلفية داكنة
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const t = y / size;
    set(x, y, Math.round(11 + t * 8), Math.round(16 + t * 10), Math.round(22 + t * 14));
  }
  // دمبل أخضر في المنتصف
  const S = size, u = S / 100, cx = S / 2, cy = S / 2;
  const G = [34, 197, 94], G2 = [22, 163, 74];
  const rect = (x0, y0, w, h, c, rad = 0) => {
    for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) {
      if (rad) {
        const dx = Math.max(x0 + rad - x, 0, x - (x0 + w - rad - 1));
        const dy = Math.max(y0 + rad - y, 0, y - (y0 + h - rad - 1));
        if (dx * dx + dy * dy > rad * rad) continue;
      }
      set(x, y, c[0], c[1], c[2]);
    }
  };
  const barH = 9 * u, barW = 46 * u;
  rect(cx - barW / 2, cy - barH / 2, barW, barH, G, 3 * u);              // البار
  rect(cx - 33 * u, cy - 20 * u, 10 * u, 40 * u, G2, 4 * u);            // وزن يسار كبير
  rect(cx + 23 * u, cy - 20 * u, 10 * u, 40 * u, G2, 4 * u);            // وزن يمين كبير
  rect(cx - 44 * u, cy - 13 * u, 9 * u, 26 * u, G, 4 * u);              // وزن يسار صغير
  rect(cx + 35 * u, cy - 13 * u, 9 * u, 26 * u, G, 4 * u);              // وزن يمين صغير
  return px;
}

for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['icon-maskable.png', 512]]) {
  fs.writeFileSync(name, png(size, draw(size)));
  console.log('✓', name);
}
