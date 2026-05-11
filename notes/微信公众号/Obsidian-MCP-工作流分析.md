# 🔍 Obsidian + MCP + Skill 工作流分析

> 对「整完啦整完啦」文章所述流程的复现方案和与 Hermes 的整合分析

---

## 架构核心逻辑

```
用户（大白话指令）
    │
    ▼
AI Agent (Hermes / Claude Code / OpenCode)
    │
    ├──► MCP Server ◄──► Obsidian (读写笔记)
    ├──► MCP Server ◄──► GitHub/Gitee (同步)
    └──► Skills (方法论指导AI怎么做)
```

本质是：**用 MCP 作为统一协议层，打通 AI ↔ 笔记工具 ↔ 云存储**。

---

## 复现步骤

### Step 1: Obsidian 安装（本地）

```bash
# Linux
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.8.9/obsidian_1.8.9_amd64.deb
sudo dpkg -i obsidian_1.8.9_amd64.deb

# 或者用 AppImage
```

然后手动打开 Obsidian，创建一个本地库（Vault）。

### Step 2: 安装 Obsidian MCP 插件

有两种方式：

**方式A — Obsidian 插件（推荐）**
1. Obsidian 设置 → 第三方插件 → 社区插件市场
2. 搜索 "MCP" 或 "Obsidian MCP Server"
3. 安装并启用

**方式B — 独立 MCP Server**
```bash
# 用 npm 安装 obsidian-mcp
npx @northword/obsidian-mcp
```

配置到 Hermes 的 `config.yaml`：

```yaml
mcp_servers:
  obsidian:
    command: "npx"
    args: ["-y", "@northword/obsidian-mcp"]
    env:
      OBSIDIAN_VAULT_PATH: "/path/to/your/vault"
```

### Step 3: 配置 GitHub 同步

文章说 GitHub 同步最简单，不需要 MCP，直接 git 就行：

```bash
cd /path/to/obsidian/vault
git init
git remote add origin https://github.com/yourname/your-notes.git
git add .
git commit -m "init obsidian vault"
git push -u origin main
```

### Step 4: AI 技能对接

AI (Hermes/Claude Code/OpenCode) 通过 MCP 读写 Obsidian：
- MCP tool: `read_note` / `write_note` / `search_notes`
- Skill: 告诉 AI "怎么写一篇结构化的笔记" / "怎么分析一篇文章并画流程图"

---

## 与 Hermes 的整合

### 我们已经有的

| 组件 | Hermes 现状 |
|------|------------|
| ✅ **MCP 客户端** | native-mcp 已支持 stdio/HTTP/SSE 传输 |
| ✅ **Skills 系统** | 已有完整的 skill 管理 |
| ✅ **GitHub 推送** | 已验证可正常推送 |
| ✅ **文件读写** | read_file/write_file/patch 工具 |
| ⚠️ **Obsidian MCP** | 未配置，需安装插件后加 config |

### 需要补充的

1. **安装 Obsidian**（如果需要在本地用）
2. **配置 `obsidian-mcp`** 到 `config.yaml`
3. **创建一个 Skills** 让 AI 知道怎么操作 Obsidian 笔记

### 一个对比：我们现在的方案 vs 文章方案

| 维度 | 文章方案 | 我们现在的方案 |
|------|---------|-------------|
| 笔记工具 | Obsidian (本地客户端) | Markdown 文件 |
| 同步方式 | MCP + GitHub | Git 直接推送 |
| AI 读写 | 通过 MCP Server | 直接文件读写 |
| 优点 | 可视化编辑、插件生态 | 简单直接、无额外依赖 |
| 缺点 | 需要安装桌面端 | 无富文本编辑 |

---

## 我的判断

**如果 VPS 是纯命令行环境（没有桌面），Obsidian 桌面端装不了。** 这时候更实用的方案是：

1. 继续用现在的 Markdown 文件 + Git 推送
2. 如果一定要 Obsidian，可以在**本地电脑**上装 Obsidian，然后 git pull 同步 VPS 上的笔记
3. 或者用 Obsidian 的 **Obsidian Sync** 付费服务

**文章的核心价值不在于 Obsidian，而在于 MCP 作为统一协议层的思路**——这个对我们已经很重要了，我们已经在用 MCP 服务器扩展 Hermes 的能力。

你要把你的 Obsidian 账户信息给我，我帮你看看怎么配置吗？
