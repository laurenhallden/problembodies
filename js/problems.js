// Make an object containing all the categories of ways things can be problems,
// so we can solve them later

var problems = {
 shape: ["square", "triangular", "oblong", "pointy", "sharp", "long", "knobby"],
 position: ["droopy", "loose", "dangly"],
 big: ["prominent", "bulbous", "bulgy", "fat", "hefty", "bulky", "big", "emormous", "pudgy", "puffy", "plump", "large", "chubby", "flabby", "paunchy", "meaty"],
 small: ["shrimpy", "puny", "small", "thin", "weak", "timid", "shy", "tiny", "meek", "bashful", "pitiful", "pitiable", "inadequate", "insufficient", "meager", "paltry"],
 age: ["old", "haggard", "worn down", "used up", "exhausted", "shabby", "worn out", "weary", "ruined", "grungy", "ashy", "dull", "dingy", "sad", "tired"],
 texture: ["ashy", "rough", "scaly", "dry", "hairy", "frizzy", "gnarled", "uneven"],
 surface: ["wrinkled", "dented", "pitted", "scarred", "dimpled", "uneven"],
 attitude: ["angry", "unruly", "rowdy", "unmanageable", "out of control", "grumpy", "noisy"],
 smell: ["stinky", "smelly", "pungent", "disgusting"]
};

var suggestions = [
    'tired of',
    'are people talking about',
    'sick of'
]

// these can be pumped up with "just..."
var justEmphasis = [
    "too",
    "too",
    "too",
    "too",
    "really",
    "kinda...",
    "super",
    "crazy"
]

// these can't
var emphasis = [
    "particularly",
    "weirdly",
    "noticeably",
    "pretty",
    "extra"
]

var intro = [
    "Look in the mirror—be honest.",
    "Maybe it's time to face reality.",
    "Think about it.",
    "Let's face it.",
    "Time for some hard truths.",
    "This is going to be akward, but..."
];

var results = [
    "holding you back",
    "getting in the way",
    "attracting the wrong kind of attention",
    "bringing you down",
    "ruining your day",
    "making it hard to date",
    "making life hard",
    "causing you some serious grief",
    "causing you distress",
    "keeping you from getting that promotion"
];

