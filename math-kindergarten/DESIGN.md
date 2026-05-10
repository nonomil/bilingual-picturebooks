# 方块数学 V2 — 设计规范

## 基本信息
- **目标读者**: 5-7岁，幼小衔接
- **主题**: Minecraft 方块世界冒险
- **教学方法**: 新加坡 CPA（Concrete→Pictorial→Abstract）+ 苏格拉底提问 + 冒险关卡制

---

## 核心设计理念（融合参考书优势）

### 来自「我的世界·数学思维游戏」（Mojang 官方授权，6册）
- **冒险关卡制**：每章 = 一个冒险任务，帮 Steve/Alex 解决问题
- **游戏类型多样化**：连线、涂画、找茬、排序、迷宫、贴纸、情景模拟
- **7大数学思维种子**：归纳整理、顺序概念、等价转换、抽象化、具体化、逆向思维、对称性

### 来自「All the Maths You Need to Know by Age 7」（Usborne）
- **生活化场景**：每个概念从日常生活引入
- **角色贯穿**：固定角色串起故事
- **互动感**：一问一答、猜猜看、找一找

### 来自「新加坡数学」
- **CPA三步法**：Concrete(实物) → Pictorial(图象) → Abstract(符号)
- **Number Bonds(数的朋友)**：5=2+3=1+4
- **模型画法(Model Drawing)**：用方块图表示数量关系

---

## 核心原则

1. **文字驱动，图片辅助** — **这是教材，不是绘本。** 文字必须承载逻辑，图片必须服务于知识点。图片不应占据整页，应采用“图随文走”的紧凑排版。
2. **逻辑密度** — 每页应包含 1-2 个知识点或 1 个完整的逻辑链，避免过度碎片化。
3. **CPA 节奏** — 严格遵守：先展示实物(C) → 再展示抽象模型(P) → 最后给出符号公式(A)。
4. **活动页占比** — 保持 30-40% 的活动页，用于知识内化。

---

## 每章结构（教材逻辑）

每章一个独立 MD 文件，结构如下：

```
# 第X课 课题名称

## 📋 学习目标
- 目标1
- 目标2

---

## 一、情景引入 (Scenario)
【文字 + 小尺寸插图】
通过 Steve/Alex 的故事引出本课要解决的问题。

## 二、知识讲解 (Knowledge)
【文字驱动 + 关联插图】
按 CPA 逻辑推进：
1. Concrete (实物展示): 文字描述实物，配图展示具体的方块/物品。
2. Pictorial (模型演示): 文字讲解抽象模型，配图展示数轴/方块图/点阵。
3. Abstract (符号抽象): 文字给出公式，配图展示符号与结果。

## 三、课堂练习 (Exercises)
【任务指令 + 练习图】
多样化的活动：涂色、连线、填空、找茬等。

## 四、Boss挑战 (Challenge)
【综合应用】
将本章知识融入一个复杂的冒险场景。

## 五、本课小结
✅ 知识点回顾
> 下一课预告
```

---

## 图片与排版规范（重构）

### 1. 比例与布局
- **图文比例**：文字占据页面 50%-60%，图片占据 40%-50%。
- **布局模式**：
  - **上下结构**：文字在上方，图片紧随其后作为例证。
  - **图文嵌套**：在一小段文字后紧跟一个小插图。
- **禁止行为**：禁止出现“一张图占满一整页且无文字”的情况（除非是章节封面或活动页起始）。

### 2. 角色与物品规范
- **角色**: Steve, Alex
- **物品**: 钻石, 绿宝石, 金锭, 各种方块 (草, 木, 石)
- **风格**: Minecraft 像素风格，色彩鲜艳但逻辑清晰。

### 3. 图片类型与 Prompt 指令

#### A. 场景/情景图 (Scenario/Scene)
- **用途**: 故事引入、Boss 挑战。
- **特点**: 宏观、有氛围感，但**必须**包含相关的数学元素（如：地上有 3 颗钻石）。
- **Prompt 关键词**: `Minecraft style, [Math Content] visible, wide angle, character Steve/Alex, storytelling scene`

#### B. 知识演示图 (Concept/Demonstration)
- **用途**: 讲解 Concrete/Pictorial 阶段。
- **特点**: **微观、高聚焦、去背景化**。强调数学关系。
- **Prompt 关键词**: `Close-up, Minecraft items, [Math relation e.g. grouping/counting], clean background, high focus on [Objects], no clutter`
- **要求**: 图中物体必须能清晰地数出来。

#### C. 逻辑模型图 (Model/Abstract)
- **用途**: 讲解 Pictorial/Abstract 阶段。
- **特点**: 类似于数学教材中的“点阵图”或“数轴图”。
- **Prompt 关键词**: `Minecraft pixel art style, [Number bond/Number line/Grid], clean, mathematical model, simplified`

#### D. 活动页线稿 (Activity/Line-art)
- **用途**: 涂色、连线、描红、找茬。
- **特点**: **黑白线稿，高对比度，轮廓粗**。
- **Prompt 关键词**: `Black and white line art, coloring book style, thick outlines, Minecraft theme, high contrast, white background`

### 4. 图片尺寸建议
- **场景图**: 较宽或较大的展示。
- **演示图/例题图**: 紧凑的方块或小比例图，嵌入在文字段落之间。

---

## 知识图谱 (略)
... (保持原有的 12 章结构)
