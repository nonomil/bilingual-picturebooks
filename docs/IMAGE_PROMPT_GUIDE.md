# Image Prompt Style Guide — Unified Illustration Standards

> v1.0 | 2026-05-16
> Source: QA_FRAMEWORK.md §5 Image Guide + §6 Chinese Poetry + subject DESIGN docs
> Applies to: Chinese (语文), Math (数学), English (英语)

---

## 1. Nine Illustration Styles (from QA_FRAMEWORK §5.2)

| # | Style | Prompt Keywords | Best For |
|---|-------|-----------------|----------|
| 1 | **Cartoon** | `cartoon style, exaggerated features, bright colors, cute characters` | Low-age general |
| 2 | **Realistic** | `semi-realistic illustration, natural proportions, educational` | Science/nature |
| 3 | **Wimmelbuch** | `dense detailed scene, many characters, seek and find, busy composition` | Exploration/search |
| 4 | **Whimsical** | `whimsical style, dreamy, magical atmosphere, soft colors` | Fairy tales/fantasy |
| 5 | **Watercolor** | `watercolor illustration, soft edges, gentle washes, artistic` | Warm stories |
| 6 | **Paper Collage** | `paper collage style, Eric Carle inspired, textured, cut paper` | Creative art |
| 7 | **Line Art** | `line art, black and white outlines, coloring book style` | Interactive activities |
| 8 | **Digital Flat** | `flat vector illustration, clean lines, modern, minimalist` | Modern education |
| 9 | **Mixed Media** | `mixed media, combining techniques, textured layers` | Art picture books |

---

## 2. Chinese (语文) — 国风水墨 + Minecraft

### Color Palette
| Element | Colors |
|---------|--------|
| **Primary** | 浅绛 light red, 花青 indigo blue, 藤黄 gamboge yellow, 墨黑 ink black |
| **Atmosphere** | Warm muted, poetic, misty, serene |
| **Paper tone** | Warm off-white / rice paper texture |
| **Accents** | Vermilion (朱砂红), mineral green (松石绿) |

### Composition Style
- **留白 (negative space)** ≥ 30% of frame
- **散点透视 (scattered perspective)** — traditional Chinese scroll layout
- Subject centered and slightly enlarged for character focus
- Text areas pre-reserved for pinyin and hanzi annotations

### Character Placement Rules
- Steve and Alex in traditional Chinese-inspired attire when in poem/ancient scenes
- In standard lessons: standard Minecraft outfits in Chinese-themed settings (pagodas, bamboo forests, villages)
- NPCs include Chinese village村民, scholars, animals (cranes, pandas)

### Resolution
- Standard: 640×480
- Poem illustrations: 640×480, portrait orientation preferred for scroll feel
- Song/chant illustrations: 640×480, landscape

### Prompt Templates (from QA_FRAMEWORK §6)

**Template A — 国风水墨淡彩 (recommended for poems):**
```
children's book illustration of [scene],
traditional Chinese ink wash painting style with soft watercolor,
[specific imagery], poetic atmosphere, misty and serene,
warm muted colors, generous negative space for text,
kid-friendly, simple composition, 640×480
```

**Template B — 齐白石 style (animals):**
```
style of Qi Baishi, [animal], ink wash painting,
traditional Chinese painting aesthetic, expressive brushwork,
simple composition, white space, child-friendly, 640×480
```

**Template C — 工笔细描 (flowers/birds details):**
```
gongbi style Chinese painting, [flower/bird], fine brushwork,
delicate details, soft colors on silk texture,
elegant composition, white background, 640×480
```

### Style Constants (from gen_chinese.py)
- `STYLE_MAIN`: `Minecraft pixel art style, bright and warm colors, clean composition, Chinese language learning, 640x480`
- `STYLE_POEM`: `Traditional Chinese ink wash painting (水墨画) style, gongbi technique (工笔), classical Chinese art, warm muted colors (vermilion 朱砂红, mineral green 松石绿, gamboge 藤黄, ink black 墨色), calligraphic text aesthetic, Minecraft characters (Steve/Alex) depicted in traditional Chinese painting style, polished refined brushwork, serene and poetic atmosphere, elegant composition, 640x480`
- `STYLE_ANCIENT`: `Traditional Chinese classical painting style, rich storytelling colors, warm vibrant palette, gongbi technique (工笔), ink wash with color accents, Minecraft characters (Steve/Alex) in ancient Chinese setting, narrative scene with depth, polished detailed brushwork, Chinese mythology aesthetic, 640x480`

---

## 3. Math (数学) — Minecraft Pixel Art + Mathematical Clarity

### Color Palette
| Element | Colors |
|---------|--------|
| **Background** | White or light, 30-50% negative space |
| **Primary** | Bright saturated: grass green, sky blue, diamond cyan, gold yellow |
| **Accents** | Redstone red, emerald green, lapis blue |
| **Avoid** | Dark, shadowy, underground, spooky tones |

### Composition Style
- **Centered, large subject** — subject occupies 40-60% of frame
- **Clean, uncluttered** — no unnecessary background decoration
- **Math-first** — mathematical elements must be clearly visible and countable
- Scene images: bright daytime with white/light sky
- Concept images: pure white background, high focus on objects

### Image Types (from Math DESIGN.md)
| Type | Use | Composition |
|------|-----|-------------|
| **A — Scene** | Story introduction, Boss challenge | Wide angle, mathematical elements visible, white sky |
| **B — Concept** | CPA Concrete/Pictorial demonstration | Close-up, high focus, clean background, objects clearly countable |
| **C — Model** | Number bonds, number lines, grids | Simplified, mathematical model, pure white background |
| **D — Activity** | Coloring, tracing, mazes | Black & white line art, thick outlines, high contrast |
| **E — Review** | Recall/review in 2nd session | Same location different angle/time, white bg, bright |
| **F — Extended** | Extension concept in 2nd session | Clean, shows logical relationship (e.g., 9 vs 10 side by side) |
| **G — Practice** | Reinforcement exercise | Same as D (black & white line art) |
| **H — Final Challenge** | Challenge in 2nd session | Fun, bright, puzzle scene, relaxed atmosphere |

### Character Placement Rules
- Steve and Alex in problem-solving poses
- Characters should point to or interact with math elements
- NPC villagers and Minecraft mobs as counting objects (sheep, chickens, pigs)
- Consistent outfits: Steve (blue shirt, dark pants), Alex (orange shirt, jeans)

### Resolution
- AI output: 800×800 (1:1) or 1070×800 (4:3), DPI ≥ 300
- Display: small ≤100mm wide (concept/models), medium ≤135mm wide (scenes/activities)

### Prompt Structure (from IMAGE_GUIDE.md)
**Scene:** `[character] [action] [environment], bright Minecraft pixel art, white background, cheerful colors`
**Concept:** `Minecraft pixel art [item] [quantity/concept], white background, simple, clean, bright`
**Model:** `Minecraft pixel art [item] isolated, white background, large, clear`
**Activity:** `Blank Minecraft pixel art outline [shape], white background, no colors, thick lines, for kids coloring`

---

## 4. English (英语) — Minecraft Pixel Art + Storytelling

### Color Palette
| Element | Colors |
|---------|--------|
| **Background** | White or light pastel, bright as default |
| **Primary** | High saturation primary: red, blue, yellow, green |
| **Warmth** | Warm sunny tones for story scenes |
| **Accents** | Orange (Alex), cyan/blue (Steve), emerald, gold |
| **Avoid** | Dark, desaturated, overly muted palettes |

### Composition Style
- **Rule of thirds** for story/cinematic scenes — character offset to left or right (60/40 split)
- **Eye-level perspective** for approachable teaching moments — warm, friendly angle
- **High-angle** for layout/scene-setting shots — showing full environment
- **Centered** for vocabulary/activity pages — subject 40-60% of frame, clean background
- **Full-bleed** for cover illustrations — cinematic, welcoming, title space reserved

### Character Expression Standards
| Character | Default | Happy | Thinking | Adventurous |
|-----------|---------|-------|----------|-------------|
| **Steve** | Curious expression, blue shirt, dark pants, brown hair | Excited, grinning | Thoughtful, head scratch, puzzled | Brave, determined, exploring pose |
| **Alex** | Warm friendly expression, orange shirt, jeans, red hair | Warm smiling, encouraging | Teaching patiently, pointing | Helpful guiding hand, supportive |

### Scene Composition Rules (Page-Specific)
| Page Type | Composition | Lighting | Notes |
|-----------|-------------|----------|-------|
| **Cover** | Full-bleed, cinematic, welcoming | Warm golden-hour feel | Reserve space for title text |
| **Story** | Rule of thirds, characters in action | Warm, dynamic but clear | Narrative moment, 60/40 split |
| **Activity** | Clean centered, simple layout | Bright flat lighting | Minimal background distraction |
| **Vocabulary** | Centered, isolated subject | Bright, white bg | Clean educational layout |
| **Phonics/Sound Block** | Centered playfully | Bright, cheerful | Show sound block + letter |

### Resolution
- Standard: 640×480 (4:3 landscape)
- Cover: 640×480 or larger, full-bleed
- Activity: 640×480, clean centered

### Prompt Structure (from gen_english.py)
**Standard:** `{alt text}, Minecraft pixel art, white background, bright colors, 640x480, kid-friendly illustration`
**Story scene:** `{alt text}, Minecraft pixel art, cinematic composition, warm bright colors, Steve and Alex, narrative scene, 640x480`
**Activity:** `{alt text}, Minecraft pixel art, centered composition, white background, clean simple layout, bright colors, 640x480`

---

## 5. Cross-Subject Universal Rules

### Role Consistency (from QA_FRAMEWORK §5.3)
1. Generate reference character sheet first
2. Lock seed/reference image for consistency
3. Change only ONE variable per image (action OR scene, never both)
4. Batch-filter: pick 3-5 most consistent images

### Prohibited Patterns (All Subjects)
- ❌ Dark backgrounds (cave, night, deep, shadow, underground, spooky)
- ❌ Cluttered compositions with >5 non-essential objects
- ❌ Images without clear educational purpose
- ❌ Off-model characters (different Steve/Alex proportions)

### Required Patterns (All Subjects)
- ✅ White or light background (30-50% negative space minimum)
- ✅ Bright, cheerful, kid-friendly palette
- ✅ Clear simple shapes
- ✅ Math elements visible and countable (in math images)
- ✅ File size ≥ 1KB (reject placeholder/empty files)

---

## 6. Directory & Naming Convention

```
chapters/img/chapter-XX/
  ├── page-01.png    (scene/cover image)
  ├── page-02.png    (concept/demonstration)
  ├── page-03.png    (activity/practice)
  ├── ...
  └── poem-line-N.png (Chinese poetry only)
```

Image naming: `page-NN.png` where NN is the 0-padded page number.
Poetry images: `poem-line-N.png` for Chinese lesson poem illustrations.
