# 双语绘本 (Bilingual Picture Books) - Android 构建指南

## 功能特点
- 📚 双语绘本阅读（中英文对照）
- 🔊 _native TTS 朗读_（Android 系统原生语音）
- ✨ 词级高亮同步显示
- 📖 自动翻页

## 项目状态

本项目已配置 Capacitor Android 支持，但**无法在此服务器上构建 APK**（缺少 Android SDK 和 Java）。

### 构建步骤

在你本地有 Android 开发环境的电脑上执行：

```bash
# 1. 克隆项目
git clone https://github.com/nonomil/bilingual-picturebooks.git
cd bilingual-picturebooks

# 2. 切换到 Android 分支
git checkout release/android

# 3. 安装依赖
npm install

# 4. 同步 Capacitor
npx cap sync android

# 5. 在 Android Studio 中打开
# 或者使用命令行构建
cd android
./gradlew assembleDebug
```

### APK 输出位置
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## 技术栈

- **前端**: Vanilla JS + Capacitor
- **Android**: 原生 TTS 插件 (TextToSpeech API)
- **构建**: Capacitor + Gradle

## 文件结构

```
bilingual-picturebooks/
├── data/
│   ├── app.js          # 主应用逻辑
│   ├── stories.js      # 绘本数据
│   └── tts.js          # TTS 语音模块（支持 Android 原生）
├── public/             # Web 资源（Capacitor 构建用）
├── android/            # Android 原生项目
├── capacitor.config.json
└── package.json
```

## TTS 模块说明

`tts.js` 实现了三层 TTS 回退机制：

1. **Capacitor TTS 插件** - Android 原生 TTS（优先）
2. **Android Bridge (旧版)** - `window.AndroidTTS`
3. **Web Speech API** - 浏览器 TTS（桌面端回退）

在 Android 上运行时会自动使用系统语音，朗读效果更好。

## 注意事项

- Android 项目中的 `TTSPlugin.java` 必须在 `MainActivity` 中注册
- 构建前确保 Android SDK 配置正确
- 首次构建可能需要下载 Gradle 依赖（约 200MB）

---

**项目仓库**: https://github.com/nonomil/bilingual-picturebooks
**Android 分支**: `release/android`