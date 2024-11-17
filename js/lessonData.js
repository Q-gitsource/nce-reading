// 首先定义 lessonData 对象
const lessonData = {
    '1': {
        totalLessons: 144,
        name: '新概念英语第一册',
        lessons: {}
    },
    '2': {
        totalLessons: 96,
        name: '新概念英语第二册',
        lessons: {}
    },
    '3': {
        totalLessons: 60,
        name: '新概念英语第三册',
        lessons: {}
    },
    '4': {
        totalLessons: 48,
        name: '新概念英语第四册',
        lessons: {}
    }
};

// 第四册课程的完整标题
const book4Titles = {
    1: "Finding Fossil Man",
    2: "Spare That Spider",
    3: "Matterhorn Man",
    4: "Seeing Hands",
    5: "Youth",
    6: "The Sporting Spirit",
    7: "Bats",
    8: "Trading Standards",
    9: "Royal Espionage",
    10: "Silicon Valley",
    // ... 继续添加剩余标题
};

// 第三册课程的完整标题
const book3Titles = {
    1: "A Puma at Large",
    2: "Thirteen equals one",
    3: "An unknown goddess",
    4: "The Double Life of Alfred Bloggs",
    5: "The Facts",
    // ... 继续添加剩余标题
};

// 第二册课程的完整标题
const book2Titles = {
    1: "A private conversation",
    2: "Breakfast or lunch?",
    3: "Please send me a card",
    4: "An exciting trip",
    5: "No wrong numbers",
    // ... 继续添加剩余标题
};

// 然后生成课程数据
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