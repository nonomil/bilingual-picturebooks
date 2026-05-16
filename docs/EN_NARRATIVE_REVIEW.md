# English Narrative Quality Review

## Summary

Systematic narrative quality review across all 48 English chapter files (24 base lessons + 24 extensions). Fixed three systematic issues: copied Common Mistakes, generic Think About It questions, and shallow Cross-Curricular Links.

## Changes Made

### Common Mistakes (7 base files fixed)
Identified 3 copy batches in base lessons:
- **Batch B** (L17-L18): Generic "She go to school", "I'm go" prepositions → Replaced with lesson-specific ESL errors (e.g., L17 transport: "I by bus go to school" word order, "I drive a bike" wrong verb)
- **Batch C** (L19-L24): "He don't like it", "There is many blocks" → Replaced with story-specific errors (e.g., L20 storm: double comparatives, scare vs scared; L23 treasure: find→found irregular past)

Extensions already had unique Common Mistakes — no changes needed.

### Think About It (24 files fixed)
- **Base lessons L17-L18**: Generic "past tense irregulars" / "10 survival words" → topic-specific questions (L17: "get ON bus vs get IN car?"; L18: "why start story on Monday?")
- **Base lessons L20-L24**: Copied "Lost Cat Alex sad" / "treasure map language" → lesson-specific (L20: "storm being brave"; L21: "surprise parties"; L22: "animal sounds across languages"; L23: "why stories are treasure"; L24: "journey from hello to full story")
- **Extension files L03-L06 (Set C)**: Generic greeting/alphabet questions → lesson-specific (L03: backward alphabet; L04: color word order; L05: number names; L06: family titles)
- **Extension files L07-L12 (Set D)**: Generic plurals/Minecraft weather → topic-specific (L07: animal sounds across languages; L08: body parts why two; L09: countable vs uncountable; L10: toy design; L11: 5th season; L12: weather dressing)
- **Extension files L13-L18 (Set E)**: Generic irregular past/10 words → topic-specific (L13: winning vs trying; L14: neighborhood design; L15: feelings colors; L16: 8th day of week; L17: teleportation; L18: most useful word)
- **Extension files L19-L24 (Set F)**: Generic Lost Cat/treasure map → topic-specific (L19: question words; L20: emergency kit; L21: party planning; L22: farm animal voting; L23: story openings; L24: reflection on 24 lessons)

### Cross-Curricular Links (7 base files fixed)
Upgraded from generic "语文+数学" pairs to 3-subject concrete activities:
- L17 Transport: 数学速度 + 科学机械 + 美术设计
- L18 Review: 语文记叙文 + 数学日历 + 体育运动会
- L20 Storm: 科学天气 + 道德安全 + 美术色彩
- L21 Birthday: 数学计数 + 美术手工 + 音乐歌曲
- L22 Farm: 科学动物 + 数学数数 + 劳动农业
- L23 Treasure: 语文古诗 + 地理方向 + 道德分享
- L24 Review: 语文毕业 + 数学统计 + 道德反思

Extensions already had middle-depth CC links — no changes needed.

### Image Alt Text & Illustration Standards (v2 enhancement)
Alt text was already descriptive with Steve/Alex placement, emotions, and setting.

**Added illustration style constants to gen_english.py** (per IMAGE_PROMPT_GUIDE.md):
- `STYLE_MAIN` — base Minecraft pixel art style for all English images
- `CHAR_STEVE` / `CHAR_ALEX` — character expression dictionaries (curious/adventurous Steve, warm/helpful Alex)
- Composition constants: `COMPOSITION_CENTERED`, `COMPOSITION_RULE_OF_THIRDS`, `COMPOSITION_EYE_LEVEL`, `COMPOSITION_HIGH_ANGLE`
- Page-specific guidance: `PAGE_COVER` (full-bleed cinematic), `PAGE_STORY` (rule-of-thirds narrative), `PAGE_ACTIVITY` (clean centered), `PAGE_VOCABULARY` (isolated subject)
- `build_prompt()` function with `detect_page_type()` — auto-selects style by alt text keywords (activity/practice/vocabulary vs. story/cover)
- Prompt now includes character expression + composition + page-type rules dynamically

### Story Arcs
Base lessons contain complete narrative arcs (beginning → middle → end). Extensions are supplementary activities. No structural changes needed.

## Files Modified
- 7 base lessons (L17, L18, L20, L21, L22, L23, L24)
- All 24 extension files (L01-L24 extension)
- Total: 31 files edited
