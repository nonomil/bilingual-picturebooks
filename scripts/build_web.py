#!/usr/bin/env python3
"""
build_web.py - 读取 stories.js，批量生成阅读页和游戏页
用法:
  python scripts/build_web.py
  python scripts/build_web.py minecraft
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
DATA_FILE = REPO_ROOT / "data" / "stories.js"
TEMPLATE_READER = REPO_ROOT / "scripts" / "templates" / "reader.html"
TEMPLATE_GAME = REPO_ROOT / "scripts" / "templates" / "game.html"

OUTPUT_ROOTS = [
    REPO_ROOT,
    REPO_ROOT / "public",
]


def load_stories() -> list[dict[str, Any]]:
    raw_text = DATA_FILE.read_text(encoding="utf-8")
    raw_text = re.sub(r"^\s*const\s+STORIES\s*=\s*", "", raw_text, count=1).strip()
    if raw_text.endswith(";"):
        raw_text = raw_text[:-1]
    depth = 0
    end_index = -1
    for idx, char in enumerate(raw_text):
        if char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                end_index = idx
                break
    if end_index < 0:
        raise ValueError("stories.js 解析失败：未找到数组闭合位置")
    return json.loads(raw_text[: end_index + 1])


def normalize_image_path(path_text: str) -> str:
    value = (path_text or "").strip().replace("\\", "/")
    if not value:
        return value
    if value.startswith(("http://", "https://", "images/")):
        return value
    return f"images/{value.lstrip('/')}"


def normalize_story(story: dict[str, Any]) -> dict[str, Any]:
    copied = json.loads(json.dumps(story, ensure_ascii=False))
    copied["cover"] = normalize_image_path(copied.get("cover", ""))
    pages = copied.get("pages", [])
    for page in pages:
        page["img"] = normalize_image_path(page.get("img", ""))
        page.setdefault("keys", [])
        page.setdefault("phrases", [])
    return copied


def get_story_bucket(story: dict[str, Any]) -> str:
    return "storyfun" if str(story.get("category", "")).lower() == "storyfun" else "classic"


def render_reader_html(template_text: str, story: dict[str, Any], bucket: str) -> str:
    story_id = story["id"]
    title = story.get("title", story_id)
    title_zh = story.get("titleZh", "")
    unit = story.get("unit")
    unit_tag = f"Unit {unit}" if unit else f"分类：{story.get('category', 'classic')}"
    game_url = f"../../game/{bucket}/{story_id}.html"
    return (
        template_text
        .replace("{{STORY_TITLE}}", str(title))
        .replace("{{STORY_TITLE_ZH}}", str(title_zh))
        .replace("{{UNIT_TAG}}", unit_tag)
        .replace("{{PAGES_JSON}}", json.dumps(story.get("pages", []), ensure_ascii=False))
        .replace("{{GAME_URL}}", game_url)
    )


def render_game_html(template_text: str, story: dict[str, Any], bucket: str) -> str:
    story_id = story["id"]
    title = story.get("title", story_id)
    title_zh = story.get("titleZh", "")
    reader_url = f"../../reader/{bucket}/{story_id}.html"
    intro_text = f"读完《{title_zh or title}》后，通过小游戏巩固单词和词组吧！"
    return (
        template_text
        .replace("{{STORY_TITLE}}", str(title))
        .replace("{{STORY_JSON}}", json.dumps(story, ensure_ascii=False))
        .replace("{{STORY_INTRO}}", intro_text)
        .replace("{{READER_URL}}", reader_url)
    )


def write_target_file(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def build(story_id: str | None = None) -> None:
    reader_template = TEMPLATE_READER.read_text(encoding="utf-8")
    game_template = TEMPLATE_GAME.read_text(encoding="utf-8")
    stories = load_stories()
    if story_id:
        stories = [story for story in stories if story.get("id") == story_id]
    print(f"共找到 {len(stories)} 个故事")

    for story_raw in stories:
        story = normalize_story(story_raw)
        story_id_value = story["id"]
        bucket = get_story_bucket(story)
        reader_html = render_reader_html(reader_template, story, bucket)
        game_html = render_game_html(game_template, story, bucket)

        for base_root in OUTPUT_ROOTS:
            reader_file = base_root / "reader" / bucket / f"{story_id_value}.html"
            game_file = base_root / "game" / bucket / f"{story_id_value}.html"
            write_target_file(reader_file, reader_html)
            write_target_file(game_file, game_html)
        print(f"✅ {story_id_value}: reader/{bucket}/{story_id_value}.html + game/{bucket}/{story_id_value}.html")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
    target_story_id = sys.argv[1] if len(sys.argv) > 1 else None
    build(target_story_id)
