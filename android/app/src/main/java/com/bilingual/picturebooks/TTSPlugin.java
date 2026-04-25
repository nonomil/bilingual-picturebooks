package com.bilingual.picturebooks;

import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;
import java.util.Set;
import java.util.UUID;

@CapacitorPlugin(name = "TTS")
public class TTSPlugin extends Plugin implements TextToSpeech.OnInitListener {
    private static final String TAG = "TTSPlugin";
    private static final String MS_TTS_PACKAGE = "com.microsoft.tts";

    private TextToSpeech tts = null;
    private boolean isInitialized = false;
    private String currentLang = "en-US";
    private float currentRate = 1.0f;
    private String lastUtteranceId = null;
    private PluginCall pendingCall = null;
    private boolean hasMicrosoftTTS = false;

    @Override
    public void load() {
        Log.d(TAG, "TTS Plugin loading...");
        initializeTTS();
    }

    private void initializeTTS() {
        if (tts == null) {
            tts = new TextToSpeech(getContext(), this);
        }
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            isInitialized = true;
            Log.d(TAG, "TTS initialized successfully");

            // 检测微软语音引擎
            checkMicrosoftTTS();

            // 设置默认语言
            setLanguage(currentLang);

            // 设置进度监听器
            tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                @Override
                public void onStart(String utteranceId) {
                    Log.d(TAG, "TTS started: " + utteranceId);
                }

                @Override
                public void onDone(String utteranceId) {
                    Log.d(TAG, "TTS done: " + utteranceId);
                    if (pendingCall != null) {
                        pendingCall.resolve();
                        pendingCall = null;
                    }
                    JSObject result = new JSObject();
                    result.put("success", true);
                    notifyListeners("ttsFinish", result);
                }

                @Override
                public void onError(String utteranceId) {
                    Log.e(TAG, "TTS error: " + utteranceId);
                    if (pendingCall != null) {
                        pendingCall.reject("TTS error");
                        pendingCall = null;
                    }
                    JSObject result = new JSObject();
                    result.put("error", "TTS error");
                    notifyListeners("ttsError", result);
                }
            });
        } else {
            Log.e(TAG, "TTS initialization failed");
            isInitialized = false;
        }
    }

    /**
     * 检测是否安装了微软语音引擎
     */
    private void checkMicrosoftTTS() {
        if (tts == null) return;

        hasMicrosoftTTS = false;

        // Android 21+ 使用 getVoices()
        try {
            Set<Voice> voices = tts.getVoices();
            if (voices != null) {
                for (Voice voice : voices) {
                    String voiceName = voice.getName().toLowerCase();
                    // 微软语音引擎特征名称
                    if (voiceName.contains("microsoft") ||
                        voiceName.contains("xiaoxiao") ||
                        voiceName.contains("yunxi") ||
                        voiceName.contains("yunyang") ||
                        voiceName.contains("xiaoyi") ||
                        voiceName.contains("ms-")) {
                        hasMicrosoftTTS = true;
                        Log.d(TAG, "Found Microsoft TTS voice: " + voice.getName());
                    }
                }
            }
        } catch (Exception e) {
            Log.w(TAG, "Error checking voices: " + e.getMessage());
        }

        Log.d(TAG, "Microsoft TTS installed: " + hasMicrosoftTTS);
    }

    /**
     * 获取 TTS 状态信息（引擎列表、是否安装微软引擎）
     */
    @PluginMethod
    public void getTTSInfo(PluginCall call) {
        JSObject result = new JSObject();
        result.put("isInitialized", isInitialized);
        result.put("hasMicrosoftTTS", hasMicrosoftTTS);

        // 列出可用引擎
        JSObject engines = new JSObject();
        try {
            Set<Voice> voices = tts.getVoices();
            if (voices != null) {
                int i = 0;
                for (Voice voice : voices) {
                    // 只列出中文和英文语音
                    Locale loc = voice.getLocale();
                    if (loc.getLanguage().equals("zh") || loc.getLanguage().equals("en")) {
                        JSObject voiceInfo = new JSObject();
                        voiceInfo.put("name", voice.getName());
                        voiceInfo.put("locale", loc.toString());
                        voiceInfo.put("lang", loc.getLanguage());
                        engines.put(String.valueOf(i++), voiceInfo);
                    }
                }
            }
        } catch (Exception e) {
            Log.w(TAG, "Error listing voices: " + e.getMessage());
        }

        result.put("voices", engines);
        call.resolve(result);
    }

    private int setLanguage(String lang) {
        Locale locale;
        String[] parts = lang.split("-");

        if (parts.length >= 2) {
            locale = new Locale(parts[0], parts[1]);
        } else {
            locale = new Locale(lang);
        }

        // 优先使用微软语音引擎
        if (hasMicrosoftTTS) {
            try {
                Set<Voice> voices = tts.getVoices();
                for (Voice voice : voices) {
                    String voiceName = voice.getName().toLowerCase();
                    if (voiceName.contains("microsoft") || voiceName.contains("ms-")) {
                        Locale voiceLocale = voice.getLocale();
                        if (voiceLocale.getLanguage().equals(locale.getLanguage())) {
                            tts.setVoice(voice);
                            Log.d(TAG, "Using Microsoft voice: " + voice.getName() + " for " + lang);
                            return TextToSpeech.SUCCESS;
                        }
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "Error setting Microsoft voice: " + e.getMessage());
            }
        }

        int result = tts.setLanguage(locale);
        if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            Log.w(TAG, "Language not supported: " + lang);
            result = tts.setLanguage(Locale.US);
        }
        return result;
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "");
        String lang = call.getString("lang", "en-US");
        double rateVal = call.getDouble("rate", 1.0);
        float rate = (float) rateVal;

        if (!isInitialized) {
            call.reject("TTS not initialized");
            return;
        }

        if (text.isEmpty()) {
            call.reject("Text is empty");
            return;
        }

        pendingCall = call;
        currentLang = lang;
        currentRate = rate;

        setLanguage(lang);
        tts.setSpeechRate(rate);

        lastUtteranceId = UUID.randomUUID().toString();

        Bundle params = new Bundle();
        params.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, lastUtteranceId);

        int result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, lastUtteranceId);

        if (result == TextToSpeech.SUCCESS) {
            // 等待 onDone 回调
        } else {
            call.reject("Failed to speak");
            pendingCall = null;
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (tts != null) {
            tts.stop();
        }
        if (pendingCall != null) {
            pendingCall.resolve();
            pendingCall = null;
        }
        call.resolve();
    }

    @PluginMethod
    public void isSpeaking(PluginCall call) {
        boolean speaking = tts != null && tts.isSpeaking();
        JSObject result = new JSObject();
        result.put("isSpeaking", speaking);
        call.resolve(result);
    }

    @Override
    protected void handleOnDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
            tts = null;
        }
        super.handleOnDestroy();
    }
}
