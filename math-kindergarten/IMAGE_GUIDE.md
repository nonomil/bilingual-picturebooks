# 🎨 图片生成风格指南 — IMAGE_GUIDE.md
## Math Kindergarten · Minecraft 像素风统一规范

### 一、核心风格要求

| 要求 | 标准 | 说明 |
|------|------|------|
| **背景** | 白色/浅色留白 | 至少 30-50% 白色区域，场景图要有充裕留白 |
| **风格** | Minecraft 像素风 | 方块式像素块，大颗粒，边缘清晰 |
| **尺寸** | 800×800 | 正方形，最终统一缩放 |
| **色彩** | 明亮、饱和 | 多用暖色和亮色，避开黑暗/阴森色调 |
| **构图** | 居中、大主体 | 主体占画面 40-60%，留出充裕的边距 |

### 二、图片类型表（对应 DESIGN.md）

| 类型 | 用途 | 特征 | 适合 prompt 关键词 |
|------|------|------|-------------------|
| **A类** | 故事场景图 | 有背景的完整场景，白色/浅天空背景 | `white background` `bright scene` |
| **B类** | 演示/概念图 | 物品/数字/算式演示，纯白背景 | `white background` `simple` `clean` |
| **C类** | 模型图 | 单独物品/图标，纯白背景 | `white background` `isolated` |
| **D类** | 活动线稿 | 互动练习，涂色/连线/找不同 | `coloring page` `white background` `no colors` |

### 三、Prompt 模板（已验证）

#### A类 — 故事场景
```
[角色] [动作] [环境], bright Minecraft pixel art, white background, cheerful colors
```
✅ 测试通过：`Steve and Alex mining carrots in farm, bright Minecraft pixel art, white background`
→ 结果：ch01/page-01（白色背景，明亮色调）

#### B类 — 概念/数字演示
```
Minecraft pixel art [物品] [数量/概念], white background, simple, clean, bright
```
✅ 测试通过：`Minecraft pixel art 5 diamonds on white background, simple, clean, bright`
→ 结果：ch01/page-05（清晰展示5颗钻石）

#### C类 — 模型/图标
```
Minecraft pixel art [物品] isolated, white background, large, clear
```

#### D类 — 涂色线稿
```
Blank Minecraft pixel art outline [形状], white background, no colors, thick lines, for kids coloring
```

### 四、Style Prompt 验证记录

| 测试 | Prompt | 结果 |
|------|--------|------|
| ✅ A类场景 | `Steve and Alex in village trading emeralds, Minecraft pixel art, white background` | **通过** — 白色背景，角色明亮 |
| ✅ B类演示 | `Minecraft 10 diamonds bundled as one ten group, pixel art, white background` | **通过** — 清晰，简洁 |
| ❌ 暗场景 | `Steve mining in deep cave, torches` | **失败** — 背景全黑，大量留白不足 |
| ✅ 暗场景修正 | `Steve mining diamonds in bright cave, white sky, Minecraft pixel art` | **通过** — 增加亮度，保留洞穴感 |

### 五、Chapters 2-12 图片生成要求

所有章节图片生成时必须使用以下结构化 prompt：

```
[场景描述] + "bright Minecraft pixel art, white background, cheerful colors"
```

❌ **禁止**的关键词：dark, cave, night, deep, shadow, underground, spooky
✅ **要求**的关键词：white background, bright, cheerful, clean, simple

### 六、示例对照

```
❌ "Steve running from zombie in dark cave" 
   → 背景全黑，不留白，不适合教材
✅ "Steve defending village from zombie, bright daytime, white sky, Minecraft pixel art"
   → 明亮，留白多，适合教材
```

### 七、批量生成流程

1. 登录 AI Studio (Gemini 2.5 Flash Image)
2. 每次一个新对话（单对话限 ~3 张）
3. Prompt 限制 ≤100 个字符
4. 生图后检查：是否有大量留白？主体是否清晰？
5. 缩放到 800×800

---

*本文件由实际测试结果总结而成，作为后续章节图片生成的硬性标准。*
