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
    11: "How to Grow Old",
    12: "Banks and Their Customers",
    13: "The Search for Oil",
    14: "The Butterfly Effect",
    15: "Secrecy in Industry",
    16: "The Modern City",
    17: "A Man-made Disease",
    18: "Porpoises",
    19: "The Stuff of Dreams",
    20: "Snake Poison",
    21: "William S. Hart and the Early Western Film",
    22: "Knowledge and Progress",
    23: "Bird Flight",
    24: "Beauty",
    25: "Non-Auditory Effects of Noise",
    26: "The Past Life of the Earth",
    27: "The Vasa",
    28: "Patients and Doctors",
    29: "The Hovercraft",
    30: "Exploring the Sea-Floor",
    31: "The Sculptor Speaks",
    32: "Galileo Reborn",
    33: "Education",
    34: "Adolescence",
    35: "Space Odyssey",
    36: "The Cost of Government",
    37: "The Process of Ageing",
    38: "Water and the Traveller",
    39: "What Every Writer Wants",
    40: "Waves",
    41: "Training Elephants",
    42: "Recording an Earthquake",
    43: "Are There Strangers in Space",
    44: "Patterns of Culture",
    45: "Of Men and Galaxies",
    46: "Hobbies",
    47: "The Great Escape",
    48: "Planning a Share Portfolio"
};

// 第三册课程的完整标题
const book3Titles = {
    1: "A Puma at Large",
    2: "Thirteen equals one",
    3: "An unknown goddess",
    4: "The Double Life of Alfred Bloggs",
    5: "The Facts",
    6: "Smash-and-grab",
    7: "Mutilated ladies",
    8: "A Famous Monastery",
    9: "Flying cats",
    10: "The Loss of the Titanic",
    11: "Not guilty",
    12: "Life on a desert island",
    13: "It's only me",
    14: "A noble gangster",
    15: "Fifty pence worth of trouble",
    16: "Mary had a little lamb",
    17: "The longest suspension bridge in the world",
    18: "Electric currents in modern art",
    19: "A very dear cat",
    20: "Pioneer pilots",
    21: "Daniel Mendoza",
    22: "By heart",
    23: "One man's meat is another man's poison",
    24: "A skeleton in the cupboard",
    25: "The Cutty Sark",
    26: "Wanted: a large biscuit tin",
    27: "Nothing to sell and nothing to buy",
    28: "Five pounds too dear",
    29: "Funny or not?",
    30: "The death of a ghost",
    31: "A lovable eccentric",
    32: "A lost ship",
    33: "A day to remember",
    34: "A happy discovery",
    35: "Justice was done",
    36: "A chance in a million",
    37: "The Westhaven Express",
    38: "The first calendar",
    39: "Nothing to worry about",
    40: "Who's who",
    41: "Illusions of pastoral peace",
    42: "Modern cavemen",
    43: "Fully insured",
    44: "Speed and comfort",
    45: "The power of the press",
    46: "Do it yourself",
    47: "Too high a price?",
    48: "The silent village",
    49: "The ideal servant",
    50: "New year resolutions",
    51: "Predicting the future",
    52: "Mud is mud",
    53: "In the public interest",
    54: "Instinct or cleverness?",
    55: "From the earth: greetings",
    56: "Our neighbour, the river",
    57: "Back in the old country",
    58: "A little spot of bother",
    59: "Collecting",
    60: "Too early and too late"
};

// 第二册课程的完整标题
const book2Titles = {
    1: "A private conversation",
    2: "Breakfast or lunch?",
    3: "Please send me a card",
    4: "An exciting trip",
    5: "No wrong numbers",
    6: "Percy Buttons",
    7: "Too late",
    8: "The best and the worst",
    9: "A cold welcome",
    10: "Not for jazz",
    11: "One good turn deserves another",
    12: "Goodbye and good luck",
    13: "The Greenwood Boys",
    14: "Do you speak English?",
    15: "Good news",
    16: "A polite request",
    17: "Always young",
    18: "He often does this!",
    19: "Sold out",
    20: "One man in a boat",
    21: "Mad or not?",
    22: "A glass envelope",
    23: "A new house",
    24: "It could be worse",
    25: "Do the English speak English?",
    26: "The best art critics",
    27: "A wet night",
    28: "No parking",
    29: "Taxi!",
    30: "Football or polo?",
    31: "Success story",
    32: "Shopping made easy",
    33: "Out of the darkness",
    34: "Quick work",
    35: "Stop thief!",
    36: "Across the Channel",
    37: "The Olympic Games",
    38: "Everything except the weather",
    39: "Am I all right?",
    40: "Food and talk",
    41: "Do you call that a hat?",
    42: "Not very musical",
    43: "Over the South Pole",
    44: "Through the forest",
    45: "A clear conscience",
    46: "Expensive and uncomfortable",
    47: "A thirsty ghost",
    48: "Did you want to tell me something?",
    49: "The end of a dream",
    50: "Taken for a ride",
    51: "Reward for virtue",
    52: "A pretty carpet",
    53: "Hot snake",
    54: "Sticky fingers",
    55: "Not a gold mine",
    56: "Faster than sound",
    57: "Can I help you, madam?",
    58: "A blessing in disguise?",
    59: "In or out?",
    60: "The future",
    61: "Trouble with the Hubble",
    62: "After the fire",
    63: "She was not amused",
    64: "The Channel Tunnel",
    65: "Jumbo versus the police",
    66: "Sweet as honey!",
    67: "Volcanoes",
    68: "Persistent",
    69: "But not murder!",
    70: "Red for danger",
    71: "A famous clock",
    72: "A car called Bluebird",
    73: "The record-holder",
    74: "Out of the limelight",
    75: "SOS",
    76: "April Fools' Day",
    77: "A successful operation",
    78: "The last one?",
    79: "By air",
    80: "The Crystal Palace",
    81: "Escape",
    82: "Monster or fish?",
    83: "After the elections",
    84: "On strike",
    85: "Never too old to learn",
    86: "Out of control",
    87: "Perfect alibi",
    88: "Trapped in a mine",
    89: "A slip of the tongue",
    90: "What's for supper?",
    91: "Three men in a basket",
    92: "Asking for trouble",
    93: "A noble gift",
    94: "Future champions",
    95: "A fantasy",
    96: "The dead return"
};

// 修改文件名生成函数
function generateAudioUrl(book, number, title) {
    // OneDrive 文件夹的 ID
    const folderId = '284e33473ea70623%21105';
    const authKey = 'AamX8UW7u70SFyjw';
    
    // 生成文件名
    const fileName = `${number}－${title}.mp3`;
    
    // 生成 OneDrive 直接下载链接
    return `https://onedrive.live.com/download?cid=284e33473ea70623&resid=${folderId}&authkey=${authKey}&parId=${folderId}&fileName=${encodeURIComponent(fileName)}`;
}

// 生成课程数据
for (let book in lessonData) {
    for (let i = 1; i <= lessonData[book].totalLessons; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        
        if (book === '4' || book === '3' || book === '2') {  // 暂时只处理2-4册
            const titles = book === '4' ? book4Titles : 
                         book === '3' ? book3Titles :
                         book2Titles;
            let title = titles[i];
            
            if (title) {  // 只在标题存在时创建课程数据
                // 使用新的函数生成音频URL
                const audioUrl = generateAudioUrl(book, paddedNumber, title);
                
                lessonData[book].lessons[i] = {
                    title: title,
                    audioUrl: audioUrl
                };
                
                // 添加调试日志
                console.log(`生成音频URL: ${audioUrl}`);
            }
        }
    }
}

// 添加调试信息
console.log('当前域名:', window.location.hostname);
console.log('baseUrl:', window.location.hostname === 'q-gitsource.github.io' ? '/nce-reading' : '.');