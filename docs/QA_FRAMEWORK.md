# 儿童教材质量审查框架（QA Framework）

> v1.0 | 2026-05-16  
> 来源: bilingual-picturebooks 项目实战 + 联网调研  
> 用途: 后续教材编写、审查、AI配图的标准化参考

---

## 目录

1. [审查总纲](#一审查总纲)
2. [ESL 常见错误分级指南](#二esl-常见错误分级指南)
3. [跨学科连接设计方法](#三跨学科连接设计方法)
4. [数学复习深度评估标准](#四数学复习深度评估标准)
5. [绘本插图风格与 AI 配图指南](#五绘本插图风格与-ai-配图指南)
6. [语文插图与古诗意境配图](#六语文插图与古诗意境配图)
7. [逐项审查清单（Checklist）](#七逐项审查清单)
8. [经验教训](#八经验教训)

---

## 一、审查总纲

### 1.1 审查维度（四大支柱）

| 维度 | 权重 | 审查要点 |
|------|:----:|----------|
| 结构完整性 | 30% | 模板要素是否齐全、页数是否合规、基础/拓展配比 |
| 内容准确性 | 30% | 知识点是否正确、课标对齐、语言规范 |
| 教育有效性 | 25% | 常见误解是否针对性、练习是否多样、跨科连接是否真实 |
| 视觉一致性 | 15% | 风格是否统一、配图是否完整、Prompt 是否标准 |

### 1.2 审查流程

```
第一轮：结构扫描（所有章节 → 模板要素检查）
第二轮：内容采样（L1/L6/L12/L18/L24 抽样深读）
第三轮：专项审查（ESL错误分级、跨科连接、复习深度）
第四轮：视觉审查（配图覆盖率、风格一致性、缺失统计）
```

### 1.3 三次审查规律

经过此项目 144 章的审查，发现：

- **结构问题最容易发现**（模板缺要素 → 正则秒查）
- **内容复制最隐蔽**（Common Mistakes 和 Cross-Curricular 是重灾区，因为它们在文件末尾，容易被忽略）
- **复习深度最主观**（需要对照课标判断"够不够"）
- **视觉问题最耗时**（需要逐图确认存在性和质量）

---

## 二、ESL 常见错误分级指南

### 2.1 错误分级总表

| Level | 年龄段 | CEFR | 核心错误类型 | 典型错误示例 |
|-------|--------|------|-------------|-------------|
| L1 | 3-4岁 | Pre-A1 | 名词复数 -s 遗忘、be 动词缺失、冠词缺失 | "I happy" / "Three apple" |
| L2 | 3-4岁 | Pre-A1 | 疑问句词序、代词混淆 | "You are happy?" / "Me go" |
| L3 | 4-5岁 | Pre-A1 | 第三人称单数 -s、可数/不可数 | "He go school" / "some waters" |
| L4 | 5-6岁 | A1 | 不规则复数、介词搭配、物主代词 | "two foots" / "good in" / "him book" |
| L5 | 6-7岁 | A1 | 过去时不规则变化、情态动词后 +to | "I goed" / "can to swim" |
| L6 | 7-8岁 | A1+ | Present Perfect vs Past Simple、双否定、连词 | "I have seen him yesterday" / "don't know nothing" |

### 2.2 Top 10 通用 ESL 错误（适用所有级别）

引用自 [TextInspector](https://textinspector.com/common-esl-mistakes/) 并适配低龄儿童：

| # | 错误类型 | ❌ Wrong | ✅ Right | 低龄适配说明 |
|---|---------|----------|----------|-------------|
| 1 | say vs tell | "She said me" | "She told me" | L3+：规则简化为 tell + person, say + words |
| 2 | 疑问句词序 | "You are happy?" | "Are you happy?" | L2+：用 chant 节奏感辅助（♪ Are-you...?） |
| 3 | 时态混合 | "I have seen it yesterday" | "I saw it yesterday" | L5+：用时间词做视觉锚点 |
| 4 | 冠词 a/an/the | "I went to store" | "I went to the store" | L1+：用颜色/大小强调（THE store → 那个特定的店） |
| 5 | 介词搭配 | "good in cooking" | "good at cooking" | L4+：固定搭配死记，用 chant 辅助 |
| 6 | 可数/不可数 | "some advices" | "some advice" | L3+：不可数名词 = 不能数出来的东西 |
| 7 | 双重否定 | "don't know nothing" | "don't know anything" | L5+：一条句子只用一个 No |
| 8 | 母语直译 | "I have 7 years" | "I am 7 years old" | 全级别：中文母语者重灾区 |
| 9 | 过度使用 will | "I will visit grandma" | "I'm visiting grandma" | L6+：plan用 going to，arrangement用 -ing |
| 10 | 情态动词 + to | "can to swim" | "can swim" | L5+：超级英雄规则——情态动词后直接跟动词 |

### 2.3 中文母语者特有问题（额外）

| 错误 | 原因 | 纠正策略 |
|------|------|----------|
| he/she 不分 | 中文口语他/她同音 | 用颜色标记：he=蓝, she=粉 |
| 第三人称 -s 遗忘 | 中文无动词变位 | 用"尾巴规则"——he/she/it 的动词要加尾巴 |
| 名词复数遗忘 | 中文无数形态 | "一只猫→两只猫" vs "one cat→two cats"，强调变化 |
| 时间词位置错误 | 中文"我昨天去了"前置 | 规则：时间放句首或句尾，不放动词前 |
| wh- 问句不倒装 | 中文"你为什么去？"不倒装 | 用公式：WH + 助动词 + 主语 + 动词？ |

### 2.4 编写原则

每课的 Common Mistakes 必须：
1. **匹配当课主题**（食物课 → 可数/不可数；动作课 → 时态/介词）
2. **匹配当级水平**（L1不出现过去时错误）
3. **提供纠错逻辑**（不只给正确答案，要解释为什么错）
4. **每课最多 4 条**，儿童注意力有限
5. **禁止跨课复制**，每条错误必须与当课词汇/句型直接相关

---

## 三、跨学科连接设计方法

### 3.1 四科连接矩阵

```
        数学 ←→ 语文
         ↕      ↕
        英语 ←→ 科学/社会
```

### 3.2 连接模板（按课型）

#### 词汇连接（最常见）
```
当课英语单词 [apple, banana] →
  数学：数水果做加减
  语文：汉字"果""蕉"的演变
```

#### 技能连接
```
当课技能 [比大小] →
  英语：big/small/long/short 同步
  语文：大/小/长/短 汉字学习
```

#### 主题连接
```
当课主题 [天气] →
  语文：描述天气的成语/古诗
  数学：天气统计图表
  科学：为什么下雨？
```

### 3.3 连接深度分级

| 级别 | 标准 | 示例 |
|------|------|------|
| **浅层**（不合格） | 只写"数学第X课教数字" | "数学第1课教数字 → 英语同步counting" |
| **中层**（合格） | 说明具体如何联动 | "数学L4数水果 → 英语L9学食物词，双语做水果分类" |
| **深层**（优秀） | 提供具体活动/项目 | "STEAM项目：用Minecraft方块搭一个农场，数动物（数），写标签（英），描文字（语）" |

### 3.4 编写原则

每课 Cross-Curricular Links 必须：
1. **至少连接 2 科**（语文+数学 或 数学+科学）
2. **达到中层以上**（不能说"数学第X课教XX"完事）
3. **方向正确**：英语L5教农场动物 → 链接数学L3分类（are correct），不能连数学L18比较（那是后期内容）
4. **有具体活动建议**（1-2 句即可）
5. **禁止跨课复制**，每课的连接基于当课具体内容

---

## 四、数学复习深度评估标准

### 4.1 参考课标

以 California PTKLF（Preschool/Transitional Kindergarten Learning Foundations）为主要参考：

| 领域 | 子领域 | 期望水平 |
|------|--------|----------|
| Number Sense | 计数、基数、比较 | 数到30，理解"第X个"，比多少 |
| Algebra | 分类、模式、排序 | AB/ABC/AAB 模式识别和延续 |
| Measurement | 长度、重量、容量、时间 | 非标准单位比较，认识整点 |
| Geometry | 形状识别、空间方位 | 基本形状，方位词（上下左右前后） |
| Reasoning | 问题解决、推理、数学交流 | 用数学语言解释想法 |

### 4.2 复习深度四层模型

```
Level 1: 机械回忆（记）  → "3 + 2 = ?"
Level 2: 应用理解（用）  → "你有3块饼干，妈妈给2块，一共？"
Level 3: 推理分析（想）  → "5 + ? = 8，?是多少？怎么想的？"
Level 4: 探究创造（造）  → "用5以内的数字，出3道你最喜欢的加法题"
```

### 4.3 判断标准

| 评价 | 标准 |
|------|------|
| ✅ 达标 | 每个领域至少 1 道 Level 3 题 + 1 道应用题 |
| ⚠️ 偏浅 | 所有题在 Level 1-2，缺乏多步推理 |
| ❌ 不合格 | 只有 Level 1 机械题，或完全缺失某领域 |

### 4.4 每种题型的示例

```
Level 1 — 数数站: "这里有__个苹果？" （直接数）
Level 2 — 加减站: "Steve有4个金块，挖到2个，现在有几个？" （应用题）
Level 3 — 图形站: "🔴🔵🔴🔵🔴 下一个是什么？如果是 🔴🔵🟡🔴🔵🟡呢？" （模式推理）
Level 4 — 挑战站: "用下面这些数字，编一个小故事：3, 5, 8" （开放性创造）
```

### 4.5 总复习课审查要点

- [ ] 覆盖所有学习领域（数、算、形、量、规律、分类）
- [ ] 每个领域至少 5 道题
- [ ] 包含至少 2 道 Level 3+ 推理题
- [ ] 包含至少 1 道开放性探究题
- [ ] 有 STEAM 连接（如测量→手工、图形→美术）
- [ ] 故事线完整（开场 → 游戏关卡 → 通关庆祝）

---

## 五、绘本插图风格与 AI 配图指南

### 5.1 分龄插图风格选择

| 年龄段 | 类型 | 推荐风格 | 配色 | 构图要求 |
|--------|------|----------|------|----------|
| 0-3 | Board Book | **卡通粗轮廓**，原色为主 | 红蓝黄绿，高对比 | 单主体，≤3个物体/页 |
| 3-6 | Picture Book | **卡通+Minecraft像素风** 或 **水彩柔和** | 明亮暖色调 | 满幅场景，主体占40-60% |
| 5-8 | Early Reader | **卡通简化**，辅助识字 | 略降饱和度 | 插图辅助文字，不主导 |
| 8-12 | Middle Grade | **仅封面**，风格偏成熟 | 多样化 | 封面设计优先 |

### 5.2 9 大主流风格关键词（AI Prompt 用）

引用自 [GraphicMama](https://graphicmama.com/blog/children-book-illustration-styles/)：

| # | 风格 | Prompt 关键词 | 适用场景 |
|---|------|--------------|----------|
| 1 | Cartoon 卡通 | `cartoon style, exaggerated features, bright colors, cute characters` | 低龄通用 |
| 2 | Realistic 写实 | `semi-realistic illustration, natural proportions, educational` | 科普读物 |
| 3 | Wimmelbuch 细节 | `dense detailed scene, many characters, seek and find, busy composition` | 探索类绘本 |
| 4 | Whimsical 奇幻 | `whimsical style, dreamy, magical atmosphere, soft colors` | 童话/幻想 |
| 5 | Watercolor 水彩 | `watercolor illustration, soft edges, gentle washes, artistic` | 温馨故事 |
| 6 | Paper Collage 拼贴 | `paper collage style, Eric Carle inspired, textured, cut paper` | 创意美术 |
| 7 | Line Art 线稿 | `line art, black and white outlines, coloring book style` | 互动练习 |
| 8 | Digital Flat 扁平 | `flat vector illustration, clean lines, modern, minimalist` | 现代教育 |
| 9 | Mixed Media 混合 | `mixed media, combining techniques, textured layers` | 艺术绘本 |

### 5.3 AI 配图一致性技术

引用自 [Neolemon](https://www.neolemon.com/blog/how-to-illustrate-a-childrens-book-with-ai/)：

#### 角色一致性四步法

```
Step 1: 生成基准角色图
  Prompt: "[角色] standing, full body, [风格], white background, character design sheet"

Step 2: 锁定基准图 → 以此为 seed
  Prompt: "[角色] [动作], same character as reference, [风格], [场景]"

Step 3: 每张图只改一个变量
  ✅ 改动作："running" → "jumping"
  ✅ 改场景："in a forest" → "in a village"
  ❌ 同时改角色+动作+场景（一致率暴跌）

Step 4: 批量后过滤
  人工挑选最一致的 3-5 张，其余丢弃重来
```

#### Prompt 模板

```
[角色描述] + [动作/表情] + [场景/背景] + [风格关键词] + [构图要求] + [技术参数]

示例：
"Steve, a Minecraft pixel character with blue shirt, jumping happily, 
in a sunny village with colorful blocks, 
Minecraft pixel art style, bright warm colors, white background, 
centered composition, 640x480, kid-friendly illustration"
```

### 5.4 配图管线标准操作

```
生成流程:
  1. 解析 .md 文件 → 提取所有 <img> 引用
  2. 检查本地文件 → 按文件大小过滤（<1KB = 缺失）
  3. 组装 prompt → 从 alt 文本 + 风格模板拼接
  4. 调用 AI → Google AI Studio / Nano Banana
  5. 保存 → 按章节/页号组织目录
  6. 更新状态 → gen_state.json 记录成功/失败

重试策略:
  - 单图最多重试 3 次
  - 连续失败 3 张 → 切换账号 / 等待冷却
  - 账号轮换（≥3 个账号，每个日限额用完自动切）

目录规范:
  chapters/img/chapter-XX/
    ├── page-01.png  （故事场景）
    ├── page-02.png  （概念讲解）
    ├── page-03.png  （动手实践）
    ├── ...           （按页面编号）
    └── poem-line-N.png（古诗配图，仅语文）
```

---

## 六、语文插图与古诗意境配图

### 6.1 小学语文教材插图风格特征

基于部编版/人教版教材分析：

| 要素 | 标准 |
|------|------|
| **画法** | 水彩淡彩为主，写实与写意结合，人物适度 Q 化 |
| **色彩** | 柔和暖调，浅绛、花青、藤黄等国画色系 |
| **构图** | 留白 ≥30%，主体居中偏大 |
| **人物** | 学生形象，圆润亲和，避免过度夸张 |
| **场景** | 校园/家庭/自然为主，贴近儿童生活 |
| **文字空间** | 预留拼音和汉字标注位置 |

### 6.2 古诗意境配图指南

#### 意境四层模型

```
表层（场景还原）: 诗中直接描写的景物 → "鹅鹅鹅" → 大白鹅在水中
中层（情感传递）: 诗人透过景物的心情 → "举头望明月" → 孤独思乡的静夜
深层（文化符号）: 中国诗画共通的意象 → 明月=思乡、柳=送别、松=气节
补充层（留白空间）: 画面中不画的部分 → 远山含黛、云雾朦胧
```

#### 古诗配图 Prompt 模板

```
模板 A — 国风水墨淡彩（推荐主风格）:
  "children's book illustration of [古诗场景],
  traditional Chinese ink wash painting style with soft watercolor,
  [具体意象描述], poetic atmosphere, misty and serene,
  warm muted colors, generous negative space for text,
  kid-friendly, simple composition, 640x480"

模板 B — 齐白石风格（动物主题）:
  "style of Qi Baishi, [动物], ink wash painting,
  traditional Chinese painting aesthetic, expressive brushwork,
  simple composition, white space, child-friendly, 640x480"

模板 C — 工笔细描（花鸟细节）:
  "gongbi style Chinese painting, [花卉/鸟类], fine brushwork,
  delicate details, soft colors on silk texture,
  elegant composition, white background, 640x480"
```

### 6.3 AI 中国风关键词库

| 类别 | 关键词（中英对照） |
|------|-------------------|
| **画种** | 水墨画 ink wash / 工笔 gongbi / 写意 xieyi / 白描 line drawing |
| **大师** | 齐白石 Qi Baishi / 吴冠中 Wu Guanzhong / 丰子恺 Feng Zikai |
| **色调** | 浅绛 light red / 花青 indigo blue / 藤黄 gamboge yellow / 墨黑 ink black |
| **意象** | 远山 distant mountains / 小桥流水 bridge and stream / 竹林 bamboo grove / 柳树 willow / 松树 pine / 荷花 lotus |
| **氛围** | 朦胧 misty / 空灵 ethereal / 静谧 serene / 诗意 poetic |
| **构图** | 留白 negative space / 散点透视 scattered perspective / 卷轴 scroll |

### 6.4 当前管线 vs 古诗需求

| | 当前（Minecraft 通用风） | 古诗需要 |
|------|----------|----------|
| Prompt | `Minecraft pixel art, bright colors` | `Chinese ink wash watercolor, poetic` |
| 风格 | 像素方块 | 水墨淡彩 |
| 留白 | 少 | 多（≥30%） |
| 色彩 | 明亮饱和 | 柔和国画色系 |

**建议：** 在 `gen_chinese.py` 中增加 `STYLE_POEM` 变量，古诗图走专用国风 prompt，不与普通课文图混用。

---

## 七、逐项审查清单

### 7.1 结构审查（自动化）

```bash
# 检查每章是否包含所有必需 section
required_sections=(
  "学习目标" "故事场景" "核心概念" "动手试试"
  "练一练" "常见误解" "想一想" "跨科连接"
  "闯关挑战" "庆祝"
)

# 检查 Common Mistakes 是否有重复
# 提取所有文件的 Common Mistakes 段落 → 去重比对
```

### 7.2 内容审查（人工采样）

```
□ L1 开头课：命名规范、引入是否正确
□ L6 里程碑课：覆盖前6课内容
□ L12 期中复习：覆盖所有主题、深度达标
□ L18 冲刺课：难度渐进明显
□ L24 期末复习：全册覆盖、深度 ≥L3
```

### 7.3 ESL 专项

```
□ 每课 Common Mistakes 数量 3-4 条
□ 错误类型匹配当课主题
□ 错误难度匹配当课级别（L1 不出现过去时）
□ 提供中文母语者专属提示（如 he/she 不分）
□ 无跨课复制（md5sum 检查）
```

### 7.4 跨科连接专项

```
□ 连接 ≥2 科
□ 连接深度 ≥中层（有具体说明，不空泛）
□ 方向正确（链接的课 ≤ 当前进度）
□ 有具体活动建议（如"用橡皮泥捏数字+英语标签"）
□ 无跨课复制
```

### 7.5 数学复习专项

```
□ 覆盖6大领域（数、算、形、量、规律、分类）
□ 每领域 ≥5 题
□ 包含 ≥2 道 Level 3 推理题
□ 包含 ≥1 道 Level 4 开放探究题
□ 有 STEAM 连接
□ 故事线完整
```

### 7.6 配图专项

```
□ 配图覆盖率 ≥95%（语文/英语）或 100%（数学）
□ 风格统一（同科目内 prompt 一致）
□ 古诗图走专用国风 prompt
□ 每张图有 alt 文本（用于 prompt 生成）
□ 图片命名规范（page-NN.png, poem-line-N.png）
□ 大小 ≥1KB（过滤空文件/占位符）
```

---

## 八、经验教训

### 8.1 已踩坑

| # | 问题 | 根因 | 对策 |
|---|------|------|------|
| L001 | 大量 Common Mistakes 跨课复制 | 批量生成时模板复制，末段被人忽略 | **必须做 md5sum 去重扫描** |
| L002 | 跨科连接引用了后面课的内容 | 编写时按编号匹配，没核对逻辑 | **连接方向检查：链接的课号 ≤ 当前课号** |
| L003 | 复习深度偏浅 | 以"回忆"为主要目标，缺少推理题 | **每个领域强制 ≥1 道 Level 3 题** |
| L004 | 语文配图 prompt 用了通用 Minecraft 风 | gen_chinese.py 统一风格变量 | **按类型分 prompt 模板（场景/概念/古诗）** |
| L005 | 配图空文件/占位符被当作"已有图" | 只检查文件存在不检查大小 | **检查文件大小 ≥1KB** |
| L006 | cron 环境无 camoufox → 配图全挂 | crontab 不走 bashrc/conda | **cron 脚本开头显式 source 环境** |

### 8.2 操作原则

1. **末端审查必做**: Common Mistakes / Cross-Curricular 在文件末尾，最容易被跳过
2. **md5 去重优于目视**: 60+ 个文件肉眼找不出复制，用脚本秒查
3. **采样覆盖首尾**: L1 + L24 必须查，中间抽 L6/L12/L18
4. **配图先管线后人工**: 先把脚本跑起来批量出图，人工只做质量抽查
5. **风格变量分离**: 不要用同一个 style 变量给所有配图，按类型（场景/概念/古诗）分变量

---

> **维护**: 此文档随项目迭代更新。遇到新问题 → 新增经验条目 → git push。
> **作者**: Claw 🐾 | **仓库**: [nonomil/bilingual-picturebooks](https://github.com/nonomil/bilingual-picturebooks)
