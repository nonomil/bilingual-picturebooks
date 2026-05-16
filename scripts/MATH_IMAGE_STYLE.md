# Math Image Style Guide — Minecraft Math Visualization

> v1.0 | 2026-05-16
> Based on: math-kindergarten/IMAGE_GUIDE.md, math-kindergarten/DESIGN.md, docs/QA_FRAMEWORK.md
> For: Math Kindergarten series — Minecraft pixel art math visualization

---

## 1. Core Principles

### Minecraft Math Visualization
- **CPA Progression** — Every math concept follows Concrete → Pictorial → Abstract
  - Concrete: real Minecraft items (apples, diamonds, blocks, animals)
  - Pictorial: Minecraft-style block diagrams, number bonds, ten-frames
  - Abstract: numerals, equations with Minecraft block borders
- **Countability** — Every countable object in an image must be clearly distinguishable
- **No decoration** — Every visual element must serve the mathematical concept

### Prohibited Patterns
- ❌ Dark backgrounds (cave, night, deep, shadow, underground, spooky)
- ❌ Cluttered scenes (max 5 non-essential objects)
- ❌ Items that overlap and cannot be counted
- ❌ Perspective distortion that hides quantity

### Required Patterns
- ✅ White or light background (30-50% negative space minimum)
- ✅ Bright, cheerful, kid-friendly palette
- ✅ Objects clearly separated and countable
- ✅ Mathematical element as visual focal point

---

## 2. Number & Basic Arithmetic Visualization

### Counting (K.CC)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Rote counting (1-10) | Minecraft block towers of increasing height, each with number label | `Minecraft pixel art block tower [N], number [N] on side, white background, bright` |
| One-to-one correspondence | Items in a row or grid, each with a finger/pointer | `Minecraft pixel art [N] [items] in a row, clearly separated, white background` |
| Cardinality (last number = total) | Group of items circled/boxed with total number | `Minecraft pixel art group of [N] [items] circled, total number shown, white background` |
| Counting on from a number | Number line with jumping Steve character | `Minecraft pixel art number line 1-10, Steve jumping from [X] to [Y], white background` |

### Number Recognition & Formation
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Number symbols 1-10 | Large Minecraft-style number with matching item count | `Minecraft pixel art giant number [N], surrounded by [N] small [items], white background` |
| Number words (one-ten) | Banner with number word + numeral + items | `Minecraft pixel art banner showing "[N]" and "[word]", [N] [items] below, white background` |
| Ordinal numbers (1st-10th) | Race with Minecraft mobs in lanes, labeled positions | `Minecraft pixel art race, [N] animals in lanes, 1st to [N]th labeled, white background` |

### Addition & Subtraction (K.OA)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Adding (combining groups) | Two groups merging, with total shown | `Minecraft pixel art [X] [items] plus [Y] [items] merging into [Z], white background, clean` |
| Subtracting (taking away) | Group with items crossed out / removed | `Minecraft pixel art [Z] [items], [Y] crossed out, [X] remaining, white background, clean` |
| Number bonds to 5/10 | Minecraft-style branch diagram with blocks | `Minecraft pixel art number bond [N], branches showing [X] and [Y], block diagram, white background` |
| Decomposing numbers | Items split into two groups visually | `Minecraft pixel art [Z] [items] split into two groups of [X] and [Y], white background` |
| Fluency within 5/10 | Horizontal equation with block counters | `Minecraft pixel art [X] plus [Y] equals [Z], block counters below, white background, simple` |

### Place Value (K.NBT)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Tens and ones | Bundles of 10 items + singles | `Minecraft pixel art [N] bundles of 10 [items] plus [M] singles, clear grouping, white background` |
| Teen numbers | Ten-frame with filled + empty cells | `Minecraft pixel art ten-frame, [N] filled cells with [items], [M] empty, showing [NN], white background` |
| Compare numbers | Two groups side by side, > < = symbol between | `Minecraft pixel art comparing [X] [items] and [Y] [items], greater/less symbol, white background` |

---

## 3. Geometry & Measurement Visualization

### Geometry (K.G)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| 2D shapes | Minecraft pixel art shapes (square, circle, triangle, rectangle) built from blocks | `Minecraft pixel art [shape] built from colored blocks, outline visible, white background, clean` |
| 3D shapes | Minecraft blocks as 3D shapes (cube, sphere, cylinder) | `Minecraft pixel art [3D shape], isometric view, [block type], white background, simple` |
| Shape attributes | Side-by-side comparison with labels (sides, corners) | `Minecraft pixel art [shape] with sides labeled, corner dots, attribute labels, white background` |
| Composite shapes | Shapes combined from smaller blocks | `Minecraft pixel art [composite shape] built from [N] unit squares, white background` |
| Positional words | Steve/Alex relative to object (on, under, behind, next to) | `Minecraft pixel art Steve [positional word] [object], white background, bright, clear` |

### Measurement (K.MD)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Length comparison | Two items side by side, longer/shorter labeled | `Minecraft pixel art [item A] next to [item B], longer and shorter labeled, white background` |
| Non-standard measurement | Items measured in block units | `Minecraft pixel art [item] is [N] blocks long, block ruler below, white background` |
| Weight comparison | Minecraft scale/balance with items | `Minecraft pixel art balance scale, [item A] heavier than [item B], white background` |
| Capacity | Containers filled to different levels | `Minecraft pixel art [N] buckets filled to different levels, comparing capacity, white background` |
| Time (daily routines) | Minecraft clock / sun position scenes | `Minecraft pixel art Steve [activity] at [time], sun/moon position, white background` |

### Classification & Patterns (K.MD / K.OA)
| Concept | Visual Approach | Prompt Keywords |
|---------|----------------|-----------------|
| Sorting/classifying | Items grouped by attribute (color, size, shape) | `Minecraft pixel art [items] sorted by [attribute], labeled groups, white background` |
| AB/ABC/AAB patterns | Repeating colored block sequences | `Minecraft pixel art pattern [pattern], colored blocks repeating, white background` |
| Pattern extension | Pattern with blank showing next item | `Minecraft pixel art pattern [pattern] with blank at end, what comes next, white background` |

---

## 4. Image Type Reference (from DESIGN.md)

| Type | Section | Dimensions | BG | Characters | Prompt Template |
|------|---------|------------|----|------------|-----------------|
| **A — Scene** | Scenario, Boss Challenge, Final Challenge | 800×800 (1:1) | White/light sky | Steve & Alex | `Minecraft style, [math content] visible, wide angle, character Steve/Alex, storytelling scene` |
| **B — Concept** | Knowledge (CPA step 1-2) | 800×800 (1:1) | Clean, plain | Optional (hands only) | `Close-up, Minecraft items, [math relation e.g. grouping/counting], clean background, high focus on [objects], no clutter` |
| **C — Model** | Knowledge (CPA step 3) | 800×800 (1:1) | Pure white | None | `Minecraft pixel art style, [number bond/number line/grid], clean, mathematical model, simplified` |
| **D — Activity** | Hands-On, Practice, More Practice | 800×800 (1:1) | White | Line-art | `Black and white line art, coloring book style, thick outlines, Minecraft theme, high contrast, white background` |
| **E — Review** | Review (2nd session) | 800×800 (1:1) | White/bright | Steve & Alex | `Minecraft pixel art, Steve and Alex [location], [familiar scene variant], white background, bright` |
| **F — Extended** | Expand (2nd session) | 800×800 (1:1) | White/clean | Optional | `Minecraft pixel art, [concept + extension], white background, clean, educational` |
| **G — Practice** | More Practice (2nd session) | 800×800 (1:1) | White | Line-art | `Black and white line art, coloring book style, thick outlines, Minecraft theme, white background` |
| **H — Final Challenge** | Final Challenge (2nd session) | 800×800 (1:1) | White/bright | Steve & Alex | `Minecraft pixel art, Steve and Alex, [puzzle scene], fun, bright, white background` |

---

## 5. Prompt Validation Rules

From IMAGE_GUIDE.md testing:

| Result | Rule |
|--------|------|
| ✅ Pass | `Steve and Alex in village trading emeralds, Minecraft pixel art, white background` — white bg, bright characters |
| ✅ Pass | `Minecraft 10 diamonds bundled as one ten group, pixel art, white background` — clear, concise |
| ❌ Fail | `Steve mining in deep cave, torches` — full black background, not suitable |
| ✅ Fixed | `Steve mining diamonds in bright cave, white sky, Minecraft pixel art` — added brightness, kept cave feel |

### Always include:
- `bright Minecraft pixel art`
- `white background`
- `cheerful colors` / `bright colors`

### Never include:
- `dark`, `cave`, `night`, `deep`, `shadow`, `underground`, `spooky`

---

## 6. Directory & Output

- **Format**: PNG, 800×800px (1:1) or 1070×800px (4:3)
- **DPI**: ≥ 300 for print quality
- **Path**: `math-kindergarten/en/img/chapter-NN/`
- **Naming**: `page-NN.png`
- **Minimum size**: ≥ 1KB (reject placeholder/empty files)
