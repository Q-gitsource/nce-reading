async function initializeApp() {
    try {
        console.log('开始初始化应用...');
        console.log('检查 DOM 元素:');
        console.log('bookSelect:', document.getElementById('bookSelect'));
        console.log('lessonSelect:', document.getElementById('lessonSelect'));
        
        // 获取选择元素
        const bookSelect = document.getElementById('bookSelect');
        const lessonSelect = document.getElementById('lessonSelect');
        
        // 初始化课程选择功能
        initLessonSelection(bookSelect, lessonSelect);
        
        // 初始化模式选择
        const modeSelection = document.getElementById('modeSelection');
        modeSelection.addEventListener('click', (e) => {
            if (e.target.dataset.mode) {
                switchMode(e.target.dataset.mode);
            }
        });
        
        console.log('应用初始化完成');
    } catch (error) {
        console.error('应用初始化失败:', error);
        handleError(error);
    }
}

function initLessonSelection(bookSelect, lessonSelect) {
    // 初始状态设置
    lessonSelect.disabled = true;
    
    // 添加册数选择事件监听器
    bookSelect.addEventListener('change', function() {
        const selectedBook = this.value;
        console.log('选择册数:', selectedBook); // 调试日志
        
        if (selectedBook) {
            updateLessonOptions(selectedBook, lessonSelect);
        } else {
            // 如果没有选择册数，禁用课程选择
            lessonSelect.disabled = true;
            lessonSelect.innerHTML = '<option value="">选择课程</option>';
        }
    });

    // 添加课程选择事件监听器
    lessonSelect.addEventListener('change', function() {
        const selectedLesson = this.value;
        console.log('选择课程:', selectedLesson); // 调试日志
        
        if (selectedLesson) {
            const selectedBook = bookSelect.value;
            loadLesson(selectedBook, selectedLesson);
        }
    });
}

function updateLessonOptions(bookNumber, lessonSelect) {
    console.log('更新课程选项，册数:', bookNumber);
    
    // 清空现有选项
    lessonSelect.innerHTML = '<option value="">选择课程</option>';
    
    if (!bookNumber) {
        lessonSelect.disabled = true;
        return;
    }

    // 启用课程选择
    lessonSelect.disabled = false;
    
    // 获取选中册数的总课程数
    const totalLessons = lessonData[bookNumber]?.totalLessons;
    
    if (!totalLessons) {
        console.error('未找到对应册数的课程数据');
        return;
    }
    
    // 添加课程选项
    for (let i = 1; i <= totalLessons; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `第 ${i} 课`;
        lessonSelect.appendChild(option);
    }
    
    lessonSelect.disabled = false;
    console.log(`已添加 ${totalLessons} 个课程选项`);
}

// 添加 getLessonData 函数
function getLessonData(bookNumber, lessonNumber) {
    return new Promise((resolve, reject) => {
        try {
            const lesson = lessonData[bookNumber]?.lessons[lessonNumber];
            if (!lesson) {
                throw new Error('未找到课程数据');
            }
            resolve(lesson);
        } catch (error) {
            reject(error);
        }
    });
}

async function loadLesson(bookNumber, lessonNumber) {
    try {
        const lesson = await getLessonData(bookNumber, lessonNumber);
        console.log('加载课程数据:', lesson);  // 添加调试日志
        
        const audio = document.getElementById('lessonAudio');
        const sentenceDisplay = document.getElementById('sentenceDisplay');
        
        // 显示课程标题
        sentenceDisplay.textContent = lesson.title;
        
        // 设置音频源
        audio.src = lesson.audioUrl;
        console.log('音频URL:', lesson.audioUrl);  // 添加调试日志
        
        // 添加错误处理
        audio.onerror = function(e) {
            console.error('音频加载失败:', e);
            document.getElementById('feedback').textContent = '音频加载失败，请检查文件路径';
        };
        
        // 添加成功处理
        audio.onloadeddata = function() {
            console.log('音频加载成功');
            document.getElementById('feedback').textContent = '';
        };
    } catch (error) {
        console.error('加载课程失败:', error);
        document.getElementById('feedback').textContent = error.message;
    }
}

// 当 DOM 加载完成后开始初始化
document.addEventListener('DOMContentLoaded', initializeApp);

function switchMode(mode) {
    console.log(`切换到${mode}模式`);
}

function handleError(error) {
    console.error('错误:', error);
    const errorDiv = document.getElementById('error-message') || createErrorElement();
    errorDiv.textContent = `出错了：${error.message}`;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

function createErrorElement() {
    const div = document.createElement('div');
    div.id = 'error-message';
    div.className = 'error-message';
    document.body.appendChild(div);
    return div;
} 