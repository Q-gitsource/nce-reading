document.addEventListener('DOMContentLoaded', function() {
    const bookSelect = document.getElementById('bookSelect');
    const lessonSelect = document.getElementById('lessonSelect');
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // 更新课程选项
    function updateLessonOptions(bookNumber) {
        lessonSelect.innerHTML = ''; // 清空现有选项
        
        // 获取当前选中册数的总课程数
        const totalLessons = lessonData[bookNumber].totalLessons;
        
        // 添加一个默认选项
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '请选择课程';
        lessonSelect.appendChild(defaultOption);
        
        // 添加所有课程选项
        for (let i = 1; i <= totalLessons; i++) {
            if (lessonData[bookNumber].lessons[i]) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `第${i}课 ${lessonData[bookNumber].lessons[i].title}`;
                lessonSelect.appendChild(option);
            }
        }
        
        // 触发 change 事件以更新音频
        lessonSelect.dispatchEvent(new Event('change'));
    }

    // 加载音频
    function loadAudio() {
        const bookNumber = bookSelect.value;
        const lessonNumber = lessonSelect.value;
        const errorMessage = document.getElementById('errorMessage');
        
        if (!lessonNumber || !lessonData[bookNumber].lessons[lessonNumber]) {
            errorMessage.textContent = '请选择课程';
            return;
        }

        const lesson = lessonData[bookNumber].lessons[lessonNumber];
        
        // 直接设置音频源
        audioPlayer.src = lesson.audioUrl;
        
        // 添加加载事件监听
        audioPlayer.onloadeddata = () => {
            errorMessage.textContent = '';
            console.log('音频加载成功');
        };
        
        // 添加错误处理
        audioPlayer.onerror = (e) => {
            console.error('音频加载失败:', e);
            errorMessage.textContent = '无法加载音频文件，请检查网络连接';
        };
    }

    // 事件监听器
    bookSelect.addEventListener('change', function() {
        console.log('选择册数:', this.value);
        updateLessonOptions(this.value);
    });

    lessonSelect.addEventListener('change', function() {
        console.log('选择课程:', this.value);
        if (this.value) {
            loadAudio();
        }
    });

    playBtn.addEventListener('click', () => {
        if (audioPlayer.src) {
            audioPlayer.play();
        } else {
            document.getElementById('errorMessage').textContent = '请先选择课程';
        }
    });

    pauseBtn.addEventListener('click', () => audioPlayer.pause());

    // 初始化
    updateLessonOptions(bookSelect.value);
}); 