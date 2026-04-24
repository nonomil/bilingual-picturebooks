package com.bilingual.picturebooks;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    // 注册 TTS 插件
    registerPlugin(TTSPlugin.class);
}