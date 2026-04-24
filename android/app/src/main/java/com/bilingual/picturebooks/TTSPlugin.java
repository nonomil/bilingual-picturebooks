package com.bilingual.picturebooks;

import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;
import java.util.UUID;

@CapacitorPlugin(name = "TTS")
public class TTSPlugin extends Plugin implements TextToSpeech.OnInitListener {
    private static final String TAG = "TTSPlugin";
    private TextToSpeech tts = null;
    private boolean isInitialized = false;
    private String currentLang = "en-US";
    private float currentRate = 1.0f;
    private String lastUtteranceId = null;
    private PluginCall pendingCall = null;

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
                    // 通知前端
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

    private int setLanguage(String lang) {
        Locale locale;
        String[] parts = lang.split("-");
        
        if (parts.length >= 2) {
            locale = new Locale(parts[0], parts[1]);
        } else {
            locale = new Locale(lang);
        }
        
        int result = tts.setLanguage(locale);
        if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            Log.w(TAG, "Language not supported: " + lang);
            // 回退到英语
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

        // 保存 pending call 用于回调
        pendingCall = call;
        
        currentLang = lang;
        currentRate = rate;

        // 设置语言和语速
        setLanguage(lang);
        tts.setSpeechRate(rate);

        // 生成唯一的 utterance ID
        lastUtteranceId = UUID.randomUUID().toString();

        // 朗读 - 使用QUEUE_FLUSH立即中断之前的内容
        Bundle params = new Bundle();
        params.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, lastUtteranceId);
        
        int result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, lastUtteranceId);

        if (result == TextToSpeech.SUCCESS) {
            // 不立即 resolve，等待 onDone 回调
            // call.resolve() 会在 onDone 中调用
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