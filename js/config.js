export const CONFIG = {
    // 语音识别设置
    speech: {
        language: 'en-US',
        minConfidence: 0.8,
        continuousMode: false
    },
    
    // 评分设置
    scoring: {
        excellent: 90, // 优秀分数线
        good: 75,      // 良好分数线
        pass: 60       // 及格分数线
    },
    
    // 存储设置
    storage: {
        maxHistoryItems: 100,
        maxProgressDays: 30
    }
}; 