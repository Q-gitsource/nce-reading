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
            const absolutePath = new URL(lesson.audioUrl, window.location.href).href;
            console.log('尝试加载音频:', lesson.audioUrl);
            console.log('完整路径:', absolutePath);
            
            fetch(lesson.audioUrl, { method: 'HEAD' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`文件不存在: ${response.status}`);
                    }
                    errorMessage.textContent = ''; // 清除错误信息
                    console.log('文件存在，开始加载');
                    audioPlayer.src = lesson.audioUrl;
                    audioPlayer.load();
                })
                .catch(error => {
                    console.error('检查文件失败:', error);
                    errorMessage.textContent = `音频加载失败: ${error.message}`;
                    console.log('尝试的文件路径:', lesson.audioUrl);
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