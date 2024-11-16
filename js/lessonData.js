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
        lessons: {
            '1': {
                title: 'Finding Fossil Man',
                audioUrl: './audio/01－Finding Fossil Man.mp3'
            }
        }
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
    17: "A Man-Made Disease",
    18: "Porpoises",
    19: "The Stuff of Dreams",
    20: "Snake Poison",
    21: "William S. Hart and the Early Western Film",
    22: "Knowledge and Progress",
    23: "Bird Flight",
    24: "Beauty",
    25: "Non-Auditory Effects of Noise",
    26: "The Past Life of the Earth",
    27: "The vasa",
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

// 添加第三册课程标题
const book3Titles = {
    1: "A Puma at large",
    2: "Thirteen equals one",
    3: "An unknown goddess",
    4: "The double life of Alfred Bloggs",
    5: "The facts",
    6: "Smash-and-grab",
    7: "Mutilated ladies",
    8: "A famous monastery",
    9: "Flying cats",
    10: "The loss of Titanic",
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
    41: "Illusions of Pastoral peace",
    42: "Modern Cavemen",
    43: "Fully insured",
    44: "Speed and comfort",
    45: "The power of press",
    46: "Do it yourself",
    47: "Too high a price?",
    48: "The silent village",
    49: "The Ideal Servant",
    50: "New Year Resolutions",
    51: "Predicting the future",
    52: "Mud is mud",
    53: "In the public interest",
    54: "Instinct or cleverness?",
    55: "From the earth: greatings",
    56: "Our neighbour, the river",
    57: "Back in the old country",
    58: "A little spot of bother",
    59: "Collecting",
    60: "Too early and too late"
};

// GitHub Pages 基础 URL
const AUDIO_BASE_URL = '/nce-reading/audio';

// 为每个课程生成数据
for (let book in lessonData) {
    for (let i = 1; i <= lessonData[book].totalLessons; i++) {
        if (book === '4') {
            const paddedNumber = i.toString().padStart(2, '0');
            const title = book4Titles[i];
            const fileName = `${paddedNumber}－${title}.mp3`;
            
            lessonData[book].lessons[i] = {
                title: `${book4Titles[i]}`,
                audioUrl: `${AUDIO_BASE_URL}/${fileName}`
            };
        } else if (book === '3') {
            const paddedNumber = i.toString().padStart(2, '0');
            const title = book3Titles[i];
            const fileName = `${paddedNumber}－${title}.mp3`;
            
            lessonData[book].lessons[i] = {
                title: `${book3Titles[i]}`,
                audioUrl: `${AUDIO_BASE_URL}/${fileName}`
            };
        } else {
            lessonData[book].lessons[i] = {
                title: `第${book}册第${i}课`,
                audioUrl: null
            };
        }
    }
}

function loadLessonData(bookNumber, lessonNumber) {
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