#!/usr/bin/env python3
"""Compress all images in images/ directory. Resize + PNG optimize."""

import os, sys
from pathlib import Path
from PIL import Image

BASE = Path(__file__).resolve().parent / "images"

TARGET_MAX = 800  # max dimension
QUALITY = 85      # for PNG quantization

def compress_png(filepath: Path):
    """Resize and optimize a PNG file in-place."""
    img = Image.open(filepath)
    w, h = img.size
    
    # Skip if already <= TARGET_MAX
    if w <= TARGET_MAX and h <= TARGET_MAX:
        # Still try to optimize with minimal loss
        if _should_optimize(filepath):
            _save_optimized(img, filepath)
        return
    
    # Resize proportionally
    if w > h:
        new_w = TARGET_MAX
        new_h = int(h * TARGET_MAX / w)
    else:
        new_h = TARGET_MAX
        new_w = int(w * TARGET_MAX / h)
    
    img_resized = img.resize((new_w, new_h), Image.LANCZOS)
    _save_optimized(img_resized, filepath)

def _should_optimize(filepath: Path) -> bool:
    """Check if file is large enough to bother optimizing."""
    size_kb = filepath.stat().st_size / 1024
    return size_kb > 100  # Only compress files > 100KB

def _save_optimized(img: Image.Image, filepath: Path):
    """Save with optimization."""
    # Convert RGBA to RGB if no transparency used
    if img.mode == 'RGBA':
        # Check if actually has transparency
        has_alpha = img.getchannel('A').getextrema() != (255, 255)
        if not has_alpha:
            img = img.convert('RGB')
    
    # For RGB, save as optimized PNG
    img.save(filepath, optimize=True)
    
    # For RGBA with transparency, also optimize
    if img.mode == 'RGBA':
        img.save(filepath, optimize=True)

def main():
    stats = {"resized": 0, "optimized": 0, "skipped": 0, "bytes_saved": 0}
    
    for ch_dir in sorted(BASE.iterdir()):
        if not ch_dir.is_dir():
            continue
        for img_file in sorted(ch_dir.iterdir()):
            if not img_file.name.lower().endswith('.png'):
                continue
            
            before = img_file.stat().st_size
            compress_png(img_file)
            after = img_file.stat().st_size
            saved = before - after
            
            if saved > 0:
                if before != after:
                    stats["bytes_saved"] += saved
                    pct = saved / before * 100
                    if before != after:
                        kind = "resized" if "resize" in str(before - after) or True else "optimized"
                        print(f"  {img_file.parent.name}/{img_file.name}: {before/1024:.0f}K → {after/1024:.0f}K (-{pct:.0f}%)")
                        stats["resized" if before != after else "optimized"] += 1
                else:
                    stats["skipped"] += 1
            else:
                stats["skipped"] += 1
    
    print(f"\n=== 结果 ===")
    print(f"处理: {stats['resized']} 张 | 优化: {stats['optimized']} 张 | 跳过: {stats['skipped']} 张")
    print(f"共节省: {stats['bytes_saved'] / 1024 / 1024:.1f}MB")

if __name__ == '__main__':
    main()
