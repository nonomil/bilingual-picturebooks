# 🎧 小宇宙播客笔记：实证研究的印刷机来了

- **播客/来源**：微信公众号「星空的后花园」
- **文章标题**：实证研究的印刷机来了，23000+Agent Skills直接把门槛踩平
- **阅读日期**：2026-05-11
- **原文链接**：https://mp.weixin.qq.com/s/VXFfjVAx4l5XFM0RenwpXQ

---

## 📌 核心观点摘录

> 古腾堡发明活字印刷之前，知识靠师徒制传承。印刷机把「制书」门槛踩平了。
> Skills 干的就是印刷机的活——把「怎么做研究」这个手艺标准化、结构化。
> 但和印刷机一样，Skills 也没法替你决定研究什么、怎么设计因果识别。

**一句话总结**：Stanford REAP 团队的 Awesome-Agent-Skills 项目 + StatsPAI + CoPaper.AI，正在把实证研究的门槛从「会不会写代码」切换到「懂不懂研究设计」。

---

## 🏛️ 项目全景

### 三大产品矩阵

| 项目 | 类型 | 核心数据 | 链接 |
|------|------|---------|------|
| **Awesome-Agent-Skills-for-Empirical-Research** | Skills 精选集 | 119 个仓库 / 23,000+ Skills / 8 学科 | [GitHub](https://github.com/brycewang-stanford/Awesome-Agent-Skills-for-Empirical-Research) |
| **StatsPAI** | Python 因果推断引擎 | 900+ 函数 / MIT 开源 / JOSS 审稿中 | [GitHub](https://github.com/brycewang-stanford/StatsPAI) / [PyPI](https://pypi.org/project/StatsPAI/) |
| **CoPaper.AI** | 在线实证论文 AI 助手 | 20 分钟完成一篇实证论文 | [copaper.ai](https://copaper.ai) |

### 团队背景
- **Stanford REAP / SCCEI**（中国经济与制度研究中心）
- 团队成员在 AER、QJE、JPE 等顶刊有持续发表
- 不是纯工程师团队，是真做研究的学术团队
- 代码由 Claude Code / Codex 等 AI 编程助手辅助编写（commit 记录显示）

---

## 📚 Skills 分类体系

### 按研究流程（10 个阶段）
1. **选题与研究设计** → `docs/01-选题与研究设计.md`
2. **文献检索与综述** → `docs/02-文献检索与综述.md`
3. **论文阅读与拆解** → `docs/03-论文阅读与拆解.md`
4. **数据获取与清洗** → `docs/04-数据获取与清洗.md`
5. **统计分析与因果推断** → `docs/05-统计分析与因果推断.md`
6. **论文写作** → `docs/06-论文写作.md`
7. **论文修改与润色** → `docs/07-论文修改与润色.md`
8. **引用管理与排版** → `docs/08-引用管理与排版.md`
9. **论文复现与可复现研究** → `docs/09-论文复现与可复现研究.md`
10. **审稿回复与学术答辩** → `docs/10-审稿回复与学术答辩.md`

### 一站式实证分析方案（四联）

| 方案 | 适用人群 | 特点 |
|------|---------|------|
| **StatsPAI Skill** (00) | 想一键跑完全流程的人 | Agent-native DSL，6 步闭环 |
| **Full Empirical Analysis - Python** (00.1) | 需要逐行审计的研究者 | pandas+statsmodels+linearmodels，8 步闭环 |
| **Full Empirical Analysis - Stata** (00.2) | Stata 用户 / 审稿人要求 | reghdfe+ivreg2+csdid，.do 流水线 |
| **Full Empirical Analysis - R** (00.3) | R + Quarto 用户 | tidyverse+fixest+Quarto，一体化报告 |

### 覆盖学科（8 个）
经济学、政治学、社会学、心理学、公共卫生、教育学、管理学、金融学

---

## 🛡️ 安全扫描

- **52 个 Skill / 2,940+ 文件** 完成六阶段系统审查
- **52/52 全部 CLEAN，零威胁**
- 六阶段：自动化模式扫描 → Hook 审查 → 三 Agent 并行审查 → 补充完整性检查
- 13 类风险维度（pipe-to-shell / 反向 shell / 凭据外泄 / 解码执行 / 挖矿签名 / Prompt 注入等）

---

## 🔥 亮点项目

### 降 AIGC 检测率（学术去 AI 味）
| 项目 | 语言 | 特点 |
|------|------|------|
| **chinese-de-aigc** (skills/48) | 🇨🇳 中文 | 17 类中文 AI 痕迹模式，五步闭环，分章节差异化 |
| **humanize-chinese** (skills/49) | 🇨🇳 中文 | Python CLI 可独立运行，17 类检测+7 风格改写 |
| **humanizer_academic** (skills/44) | 🇬🇧 英文 | 23 种 AI 写作模式检测 |
| **skill-deslop** (skills/45) | 🇬🇧 英文 | 科学写作去 AI 化，区分学科惯例 |
| **stop-slop** (skills/46) | 🌐 通用 | 三层检测+五维评分 |
| **avoid-ai-writing** (skills/47) | 🌐 通用 | 结构化审计+重写+二次审计 |

### 金融/投资
- Anthropic 官方金融服务插件
- OctagonAI 机构级金融研究 Skills
- Claude Trading Skills（量化交易研究）

### 教育与公共健康
- OpenClaw-Medical-Skills（869 个医学 AI Skills）
- 循证教育 Skills

---

## 🤖 多代理协作系统

| 系统 | 架构 | 特点 |
|------|------|------|
| **CoPaper.AI PaperAgent** | Supervisor + 4 子代理 | 路由分发，子代理各司其职 |
| **copy-edit-master** | 3 子代理 | structure + line + quality 审阅 |
| **AgentLaboratory** | ICLR 论文 | 文献综述 → 实验 → 报告，成本降 84% |
| **AI-Scientist-v2** | Sakana AI | 全自动科学发现，首篇 AI 论文通过同行评审 |

---

## 🔗 相关链接

- GitHub: https://github.com/brycewang-stanford/Awesome-Agent-Skills-for-Empirical-Research
- StatsPAI: https://github.com/brycewang-stanford/StatsPAI
- CoPaper.AI: https://copaper.ai
- ClawHub (13,729 Skills): https://clawhub.com
- Skills 市场: https://skills.sh
- Agent Skills 标准: https://agentskills.io/
