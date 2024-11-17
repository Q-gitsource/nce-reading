// 为每个课程生成数据
for (let book in lessonData) {
    for (let i = 1; i <= lessonData[book].totalLessons; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        
        if (book === '4' || book === '3' || book === '2') {  // 暂时只处理2-4册
            const titles = book === '4' ? book4Titles : 
                         book === '3' ? book3Titles :
                         book2Titles;
            let title = titles[i];
            
            // 修改文件名生成逻辑，移除标点符号
            const safeTitle = title
                .replace(/[.,!?']/g, '')  // 移除标点符号
                .replace(/\s+/g, ' ')     // 规范化空格
                .trim();                  // 移除首尾空格
            
            // 生成音频 URL
            const audioUrl = `./audio/book${book}/${paddedNumber}－${safeTitle}.mp3`;
            
            lessonData[book].lessons[i] = {
                title: `${titles[i]}`,
                audioUrl: audioUrl
            };
            
            // 添加调试日志
            console.log(`生成音频URL: ${audioUrl}`);
        }
    }
} 