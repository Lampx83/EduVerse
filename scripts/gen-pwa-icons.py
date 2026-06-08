#!/usr/bin/env python3
"""Sinh PNG icons cho PWA EduVerse từ logo mortarboard (giống favicon.svg).

Output:
  public/icons/icon-192.png       — purpose: any
  public/icons/icon-512.png       — purpose: any
  public/icons/icon-maskable-512.png — purpose: maskable (safe zone)
  public/icons/apple-touch-icon.png  — 180x180 cho iOS home screen
"""
from PIL import Image, ImageDraw
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
OUT.mkdir(parents=True, exist_ok=True)

# Brand colors (khớp favicon.svg)
GRAD_TOP = (253, 224, 71)     # #fde047
GRAD_BOT = (245, 158, 11)     # #f59e0b
DARK = (15, 23, 42)           # #0f172a
DARKER = (30, 41, 59)         # #1e293b
WHITE = (255, 255, 255)


def vgrad(size, top, bot):
    img = Image.new("RGB", (size, size), bot)
    px = img.load()
    for y in range(size):
        t = y / max(1, size - 1)
        r = int(top[0] * (1 - t) + bot[0] * t)
        g = int(top[1] * (1 - t) + bot[1] * t)
        b = int(top[2] * (1 - t) + bot[2] * t)
        for x in range(size):
            px[x, y] = (r, g, b)
    return img


def rounded_mask(size, radius):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    return m


def draw_logo(canvas, scale_safe=1.0):
    """Vẽ logo mortarboard vào canvas RGBA size×size. scale_safe < 1 cho maskable."""
    S = canvas.size[0]
    s = S * scale_safe
    cx, cy = S / 2, S / 2
    d = ImageDraw.Draw(canvas)
    # Mũ cử nhân (iso diamond) tương ứng path "M32 14 L56 26 L32 38 L8 26 Z" trên 64x64
    top = (cx, cy - 18 / 64 * s)
    right = (cx + 24 / 64 * s, cy - 6 / 64 * s)
    bot = (cx, cy + 6 / 64 * s)
    left = (cx - 24 / 64 * s, cy - 6 / 64 * s)
    d.polygon([top, right, bot, left], fill=DARK)
    # Cap band
    band_l = cx - 12 / 64 * s
    band_r = cx + 12 / 64 * s
    band_t = cy - 1 / 64 * s
    band_b = cy + 12 / 64 * s
    d.rounded_rectangle((band_l, band_t, band_r, band_b),
                        radius=int(6 / 64 * s), fill=DARKER)
    d.polygon([(band_l, band_t), (band_r, band_t), (cx, cy + 5 / 64 * s)], fill=DARK)
    # Tassel
    tx = cx + 16 / 64 * s
    d.line([(tx, cy - 5 / 64 * s), (tx, cy + 10 / 64 * s)],
           fill=DARK, width=max(2, int(2 / 64 * s)))
    r = max(3, int(3 / 64 * s))
    d.ellipse((tx - r, cy + 12 / 64 * s - r, tx + r, cy + 12 / 64 * s + r), fill=DARK)
    # Spark trên góc trái
    sx, sy = cx - 18 / 64 * s, cy - 18 / 64 * s
    pts = [(sx, sy - 4 / 64 * s), (sx + 1 / 64 * s, sy - 1 / 64 * s),
           (sx + 4 / 64 * s, sy), (sx + 1 / 64 * s, sy + 1 / 64 * s),
           (sx, sy + 4 / 64 * s), (sx - 1 / 64 * s, sy + 1 / 64 * s),
           (sx - 4 / 64 * s, sy), (sx - 1 / 64 * s, sy - 1 / 64 * s)]
    d.polygon(pts, fill=WHITE)


def make_icon(size, rounded=True, scale_safe=1.0):
    bg = vgrad(size, GRAD_TOP, GRAD_BOT).convert("RGBA")
    draw_logo(bg, scale_safe=scale_safe)
    if rounded:
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        out.paste(bg, (0, 0), rounded_mask(size, int(size * 0.22)))
        return out
    return bg


def make_maskable(size):
    """Maskable: nền tràn viền (no rounded), logo trong safe zone 80%."""
    bg = vgrad(size, GRAD_TOP, GRAD_BOT).convert("RGBA")
    draw_logo(bg, scale_safe=0.78)  # safe zone ~80%
    return bg


def main():
    sizes = [(192, "icon-192.png"), (512, "icon-512.png"), (180, "apple-touch-icon.png")]
    for size, name in sizes:
        img = make_icon(size, rounded=(name == "apple-touch-icon.png" and False) or True)
        img.save(OUT / name, "PNG", optimize=True)
        print(f"  → {name} ({size}×{size})")
    mk = make_maskable(512)
    mk.save(OUT / "icon-maskable-512.png", "PNG", optimize=True)
    print("  → icon-maskable-512.png (512×512, maskable)")


if __name__ == "__main__":
    main()
