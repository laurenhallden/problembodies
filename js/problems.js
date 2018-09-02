// Make an object containing all the categories of ways things can be problems,
// so we can solve them later

var problems = {
 shape: ["square", "triangular", "oblong", "pointy", "sharp", "long", "knobby"],
 position: ["droopy", "dangly", "misaligned", "pendulous", "off-center", "askew", "lopsided", "twisted", "crooked", "saggy"],
 big: ["prominent", "bulbous", "bulgy", "fat", "hefty", "bulky", "big", "enormous", "pudgy", "puffy", "plump", "large", "chubby", "flabby", "paunchy", "meaty"],
 small: ["shrimpy", "puny", "small", "thin", "weak", "tiny", "meek", "pitiful", "pitiable", "inadequate", "insufficient", "meager", "paltry", "deflated"],
 age: ["old", "haggard", "worn down", "used up", "exhausted", "shabby", "worn out", "weary", "ruined", "grungy", "ashy", "dull", "dingy", "sad", "tired", "depleted", "numb"],
 texture: ["ashy", "rough", "scaly", "dry", "gnarled", "uneven", "calloused", "flaky", "parched"],
 surface: ["wrinkled", "dented", "pitted", "scarred", "dimpled", "uneven", "slack"],
 attitude: ["unruly", "rowdy", "unmanageable", "out of control", "grumpy", "noisy", "irritated", "offensive"],
 smell: ["stinky", "smelly", "pungent", "disgusting", "offensive", "sweaty"],
 cleanliness: ["dirty", "greasy", "shiny", "waxy", "oily", "pimply"],
 hariness: ["hairy", "fuzzy", "shaggy", "frizzy", "fuzzy", "bushy", "furry"]
};

var suggestions = [
    'tired of',
    'are people talking about',
    'sick of',
    'self-conscious about',
    'worried about',
    'concerned about'
];

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
];

// these can't
var emphasis = [
    "particularly",
    "weirdly",
    "noticeably",
    "pretty",
    "extra"
];

// This is the introductory line for statements that have those
var intro = [
    "Look in the mirror—be honest.",
    "Maybe it&rsquo;s time to face reality.",
    "Think about it.",
    "Let&rsquo;s face it.",
    "Time for some hard truths.",
    "This is going to be awkward, but..."
];

// These are bad things your part might be doing
var results = [
    "holding you back",
    "getting in the way",
    "attracting the wrong kind of attention",
    "bringing you down",
    "ruining your mood",
    "making it hard to date",
    "making you self-conscious",
    "causing you serious grief",
    "causing you distress",
    "keeping you up at night"
];