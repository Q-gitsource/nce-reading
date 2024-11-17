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

// 添加第二册课程标题
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
    29: "Taxi",
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

// 添加第一册课程标题
const book1Titles = {
    1: "Excuse me!",
    2: "Is this your...?",
    3: "Sorry, sir.",
    4: "Is this your...?",
    5: "Nice to meet you.",
    6: "What make is it?",
    7: "Are you a teacher?",
    8: "What's your job?",
    9: "How are you today?",
    10: "Look at...",
    11: "Is this your shirt?",
    12: "Whose is this...?",
    13: "A new dress",
    14: "What colour is your...?",
    15: "Your passports, please.",
    16: "Are you...",
    17: "How do you do?",
    18: "What are their jobs?",
    19: "Tired and thirsty",
    20: "Look at them!",
    21: "Which book?",
    22: "Give me/him/her/us/them a...",
    23: "Which glasses?",
    24: "Give me/him/her/us/them some...",
    25: "Mrs. Smith's kitchen",
    26: "Where is it?",
    27: "Mrs. Smith's living room",
    28: "Where are they?",
    29: "Come in, Amy.",
    30: "What must I do?",
    31: "Where's Sally?",
    32: "What's he/she/it doing?",
    33: "A fine day",
    34: "What are they doing?",
    35: "Our village",
    36: "Where...?",
    37: "Making a bookcase",
    38: "What are you going to do?",
    39: "Don't drop it!",
    40: "What are you going to do?",
    41: "Penny's bag",
    42: "Is there a...in/on that...?",
    43: "Hurry up!",
    44: "Are there any...?",
    45: "The boss's letter",
    46: "Can you...?",
    47: "A cup of coffee",
    48: "Do you like...?",
    49: "At the butcher's",
    50: "He likes...",
    51: "A pleasant climate",
    52: "What nationality are they?",
    53: "An interesting climate",
    54: "What nationality are they?",
    55: "The Sawyer family",
    56: "What do they usually do?",
    57: "An unusual day",
    58: "What's the time?",
    59: "Is that all?",
    60: "What's the time?",
    61: "A bad cold",
    62: "What's the matter with them?",
    63: "Thank you, doctor.",
    64: "Don't...!",
    65: "Not a baby",
    66: "What's the time?",
    67: "The weekend",
    68: "What's the time?",
    69: "The car race",
    70: "When were they there?",
    71: "He's awful!",
    72: "When did you...?",
    73: "The way to King Street",
    74: "What did they do?",
    75: "Uncomfortable shoes",
    76: "When did you...?",
    77: "Terrible toothache",
    78: "When did you...?",
    79: "Carol's shopping list",
    80: "I must go to the...",
    81: "Roast beef and potatoes",
    82: "I had...",
    83: "Going on holiday",
    84: "Have you had...?",
    85: "Paris in the spring",
    86: "What have you done?",
    87: "A car crash",
    88: "Have you...yet?",
    89: "For sale",
    90: "Have you...yet?",
    91: "Poor Ian!",
    92: "When will...?",
    93: "Our new neighbour",
    94: "When did you/will you go to...?",
    95: "Tickets, please.",
    96: "What's the exact time?",
    97: "A small blue case",
    98: "Whose is it?",
    99: "OW!",
    100: "He says that...She says that...They say that...",
    101: "A card from Jimmy",
    102: "He says he...She says she...They say they...",
    103: "The French test",
    104: "Too, very, enough",
    105: "Full of mistakes",
    106: "I want you/him/her/them to...",
    107: "It's too small.",
    108: "How do they compare?",
    109: "A good idea",
    110: "How do they compare?",
    111: "The most expensive model",
    112: "How do they compare?",
    113: "Small change",
    114: "I've got none.",
    115: "Knock, knock!",
    116: "Every, no, any and some",
    117: "Tommy's breakfast",
    118: "What were you doing?",
    119: "A true story",
    120: "It had already happened.",
    121: "The man in a hat",
    122: "Who (whom), which and that",
    123: "A trip to Australia",
    124: "(Who)/(whom), (which) and (that)",
    125: "Tea for two",
    126: "Have to and do not need to",
    127: "A famous actress",
    128: "He can't be...",
    129: "Seventy miles an hour",
    130: "He can't have been...",
    131: "Don't be so sure!",
    132: "He may be...",
    133: "Sensational news!",
    134: "He said (that) he...",
    135: "The latest report",
    136: "He said (that) he...",
    137: "A pleasant dream",
    138: "If...",
    139: "Is that you, John?",
    140: "He wants to know if/why/what/when",
    141: "Sally's first train ride",
    142: "Someone invited Sally to a party.",
    143: "A walk through the woods",
    144: "He hasn't been served yet."
};

// 修改音频基础路径为相对路径
const AUDIO_BASE_URL = './audio';  // 改为相对路径

// 为每个课程生成数据
for (let book in lessonData) {
    for (let i = 1; i <= lessonData[book].totalLessons; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        
        if (book === '4' || book === '3') {  // 第三册和第四册有音频文件
            const titles = book === '4' ? book4Titles : book3Titles;
            const title = titles[i];
            const fileName = `${paddedNumber}－${title.replace(/['"]/g, '')}.mp3`;
            
            lessonData[book].lessons[i] = {
                title: `${titles[i]}`,
                audioUrl: `${AUDIO_BASE_URL}/${encodeURIComponent(fileName)}`
            };
            
            console.log(`生成音频URL: ${AUDIO_BASE_URL}/${encodeURIComponent(fileName)}`);
        } else {
            lessonData[book].lessons[i] = {
                title: book === '2' ? book2Titles[i] : book1Titles[i],
                audioUrl: null  // 第一册和第二册暂时没有音频
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