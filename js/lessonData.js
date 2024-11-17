// 为每个课程生成数据
for (let book in lessonData) {
    for (let i = 1; i <= lessonData[book].totalLessons; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        
        if (book === '4' || book === '3' || book === '2') {  // 暂时只处理2-4册
            const titles = book === '4' ? book4Titles : 
                         book === '3' ? book3Titles :
                         book2Titles;
            let title = titles[i];
            
            // 生成音频 URL，完全匹配实际文件名
            const audioUrl = `./audio/book${book}/${paddedNumber}－${title}.mp3`;
            
            lessonData[book].lessons[i] = {
                title: `${titles[i]}`,
                audioUrl: audioUrl
            };
        }
    }
} 