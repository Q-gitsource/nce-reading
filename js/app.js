document.addEventListener('DOMContentLoaded', function() {
    const bookSelect = document.getElementById('bookSelect');
    const lessonSelect = document.getElementById('lessonSelect');
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // 更新课程选项
    function updateLessonOptions(bookNumber) {
        lessonSelect.innerHTML = '';
        const totalLessons = lessonData[bookNumber].totalLessons;
        
        for (let i = 1; i <= totalLessons; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `第${i}课 ${lessonData[bookNumber].lessons[i].title}`;
            lessonSelect.appendChild(option);
        }
    }

    // 加载音频
    function loadAudio() {
        const bookNumber = bookSelect.value;
        const lessonNumber = lessonSelect.value;
        const lesson = lessonData[bookNumber].lessons[lessonNumber];
        const errorMessage = document.getElementById('errorMessage');
        
        if (lesson && lesson.audioUrl) {
            console.log('尝试加载音频:', lesson.audioUrl);
            
            // 先检查文件是否存在
            fetch(lesson.audioUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP错误: ${response.status}`);
                    }
                    return response.blob();
                })
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    audioPlayer.src = url;
                    errorMessage.textContent = '';
                    console.log('音频加载成功');
                })
                .catch(error => {
                    console.error('音频加载失败:', error);
                    errorMessage.textContent = `无法加载音频文件: ${error.message}`;
                });
        }
    }

    // 音频错误处理
    audioPlayer.addEventListener('error', (e) => {
        console.error('音频播放器错误:', e.target.error);
    });

    // 事件监听器
    bookSelect.addEventListener('change', function() {
        console.log('选择册数:', this.value); // 调试日志
        updateLessonOptions(this.value);
        loadAudio();
    });

    lessonSelect.addEventListener('change', function() {
        console.log('选择课程:', this.value); // 调试日志
        loadAudio();
    });

    playBtn.addEventListener('click', () => audioPlayer.play());
    pauseBtn.addEventListener('click', () => audioPlayer.pause());

    // 初始化
    updateLessonOptions(bookSelect.value);
    loadAudio();
}); 