export function initSpeechRecognition() {
    let recognition = null;
    let isRecording = false;
    let currentSentenceIndex = 0;

    // 检查浏览器支持
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        recognition = new SpeechRecognition();
    } else {
        alert('您的浏览器不支持语音识别功能');
        return;
    }

    // 配置语音识别
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    const startBtn = document.getElementById('startRecord');
    const stopBtn = document.getElementById('stopRecord');
    const feedbackDiv = document.getElementById('feedback');
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '下一句';
    nextBtn.id = 'nextSentence';
    document.getElementById('practiceSection').appendChild(nextBtn);

    startBtn.addEventListener('click', startRecording);
    stopBtn.addEventListener('click', stopRecording);
    nextBtn.addEventListener('click', () => {
        const sentenceDisplay = document.getElementById('sentenceDisplay');
        const sentences = JSON.parse(sentenceDisplay.dataset.sentences || '[]');
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        sentenceDisplay.textContent = sentences[currentSentenceIndex];
    });

    function startRecording() {
        if (!isRecording) {
            recognition.start();
            isRecording = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
            feedbackDiv.textContent = '正在录音...';
        }
    }

    function stopRecording() {
        if (isRecording) {
            recognition.stop();
            isRecording = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
    }

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        compareSpeechWithTarget(result);
    };

    recognition.onerror = (event) => {
        console.error('语音识别错误:', event.error);
        feedbackDiv.textContent = '发生错误，请重试';
        stopRecording();
    };
}

function compareSpeechWithTarget(spokenText) {
    const targetText = document.getElementById('sentenceDisplay').textContent;
    const similarity = calculateSimilarity(spokenText.toLowerCase(), targetText.toLowerCase());
    const feedback = document.getElementById('feedback');
    
    const score = Math.round(similarity * 100);
    
    feedback.innerHTML = `
        <h3>朗读结果</h3>
        <p>相似度: ${score}%</p>
        <p>您说的是: ${spokenText}</p>
        <p>目标句子: ${targetText}</p>
        <button id="retryBtn">重试</button>
    `;

    // 保存进度
    window.updateProgress(score);
    
    // 保存历史记录
    saveHistory({
        date: new Date().toISOString(),
        targetText,
        spokenText,
        score
    });
}

function calculateSimilarity(str1, str2) {
    // 使用 Levenshtein 距离计算相似度
    const matrix = Array(str2.length + 1).fill().map(() => Array(str1.length + 1).fill(0));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            if (str1[i-1] === str2[j-1]) {
                matrix[j][i] = matrix[j-1][i-1];
            } else {
                matrix[j][i] = Math.min(
                    matrix[j-1][i-1] + 1,
                    matrix[j][i-1] + 1,
                    matrix[j-1][i] + 1
                );
            }
        }
    }
    
    return 1 - (matrix[str2.length][str1.length] / Math.max(str1.length, str2.length));
}

function saveHistory(record) {
    const history = JSON.parse(localStorage.getItem('readingHistory') || '[]');
    history.push(record);
    // 只保留最近100条记录
    if (history.length > 100) {
        history.shift();
    }
    localStorage.setItem('readingHistory', JSON.stringify(history));
} 