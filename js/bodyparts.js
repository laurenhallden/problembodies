// Make an object with all problem body parts
// Parts can either have a count of 1 (like your spine), 2 (like your legs), 10 (like a set of toes),
// or 20 for groups of things too big to be counted (like pores) and should always be talked about as a group

var bodyparts = [
 {singular: "ankle", plural: "ankles", count: 2, products: "feet", emoji: "👣"},
 {singular: "arm", plural: "arms", count: 2, products: "arms", emoji: "💪"},
 {singular: "back", plural: "ankles", count: 1, products: "torso", emoji: ""},
 {singular: "belly button", plural: "belly buttons", count: 1, products: "torso", emoji: ""},
 {singular: "bicep", plural: "biceps", count: 2, products: "arms", emoji: "💪"},
 {singular: "boob", plural: "boobs", count: 2, products: "breasts", emoji: "🍒"},
 {singular: "bottom", plural: "bottoms", count: 1, products: "downthere", emoji: "🍑"},
 {singular: "breast", plural: "breasts", count: 2, products: "breasts", emoji: "🍒"},
 {singular: "butt cheek", plural: "butt cheeks", count: 2, products: "downthere", emoji: "🍑"},
 {singular: "butt", plural: "butts", count: 1, products: "downthere", emoji: "", emoji: "🍑"},
 {singular: "calf", plural: "calves", count: 2, products: "legs", emoji: ""},
 {singular: "cheek", plural: "cheeks", count: 2, products: "face", emoji: "😊"},
 {singular: "chest", plural: "chests", count: 1, products: "torso", emoji: ""},
 {singular: '“down there”', plural: '“down theres”', count: 1, products: "downthere", emoji: "😏"},
 {singular: "earlobe", plural: "earlobes", count: 2, products: "head", emoji: "👂"},
 {singular: "ear", plural: "ears", count: 2, products: "head", emoji: "👂"},
 {singular: "elbow", plural: "elbows", count: 2, products: "arms", emoji: "💪"},
 {singular: "eyebrow", plural: "eyebrows", count: 2, products: "face", emoji: "😉"},
 {singular: "eyelash", plural: "eyelashes", count: 10, products: "face", emoji: "😌"},
 {singular: "eyelid", plural: "eyelids", count: 2, products: "face", emoji: "👁"},
 {singular: "eye", plural: "eyes", count: 2, products: "face", emoji: "👁"},
 {singular: "face", plural: "faces", count: 1, products: "face", emoji: "😊"},
 {singular: "finger", plural: "fingers", count: 10, products: "hands", emoji: "👐"},
 {singular: "fingernail", plural: "fingernails", count: 10, products: "hands", emoji: "💅 "},
 {singular: "foot", plural: "feet",  count: 2, products: "feet", emoji: "👣"},
 {singular: "forearm", plural: "forearms", count: 2, products: "arms", emoji: "💪"},
 {singular: "freckle", plural: "freckles", count: 20, emoji: ""},
 {singular: "hairline", plural: "hairlines", count: 1, products: "head", emoji: "🙆‍♂️ "},
 {singular: "hair", plural: "hair", count: 1, products: "head", emoji: "🙆‍♀️ "},
 {singular: "hamstring", plural: "hamstrings", count: 2, products: "legs", emoji: ""},
 {singular: "hand", plural: "hands", count: 2, products: "hands", emoji: "🤛"},
 {singular: "heel", plural: "heels", count: 2, products: "feet", emoji: "👣"},
 {singular: "hipbone", plural: "hipbones", count: 2, emoji: "🕺"},
 {singular: "hip", plural: "hips", count: 2, emoji: "🕺"},
 {singular: "jaw", plural: "jaws", count: 1, emoji: "💃🏼"},
 {singular: "knee", plural: "knees", count: 2, products: "legs", emoji: ""},
 {singular: "knuckle", plural: "knuckles", count: 10, products: "hands", emoji: "👊"},
 {singular: "leg", plural: "legs", count: 2, products: "legs", emoji: "🤸‍♀️"},
 {singular: "lip", plural: "lips", count: 2, set: "vertical", products: "face", emoji: "💋 "},
 {singular: "lower back", plural: "lower backs", count: 1, products: "torso", emoji: ""},
 {singular: "nail bed", plural: "nail beds", count: 10, products: "hands", emoji: "💅 "},
 {singular: "neck", count: 1, plural: "necks", products: "neck", emoji: ""},
 {singular: "nipple", plural: "nipples", count: 2, products: "breasts", emoji: "🍒"},
 {singular: "nose", plural: "noses", count: 1, products: "face", emoji: "👃"},
 {singular: "palm", plural: "palms", count: 2, products: "hands", emoji: "🤲 "},
 {singular: "penis", plural: "penises", count: 1, products: "downthere", emoji: "🍆"},
 {singular: "pore", plural: "pores", count: 20, products: "face", emoji: ""},
 {singular: "rib", plural: "ribs", count: 10, products: "torso", emoji: ""},
 {singular: "shin", plural: "shins", count: 2, products: "legs", emoji: ""},
 {singular: "shoulder", plural: "shoulders", count: 2, products: "torso", emoji: ""},
 {singular: "shoulder blades", plural: "shoulder blades", count: 2, products: "torso", emoji: ""},
 {singular: "spine", count: 1, plural: "spines", products: "torso", emoji: ""},
 {singular: "stomach", count: 1, plural: "stomachs", products: "torso", emoji: ""},
 {singular: "tear duct", plural: "tear ducts", count: 2, emoji: "💦"},
 {singular: "testicle", plural: "testes", count: 2, products: "downthere", emoji: "🍒"},
 {singular: "thigh", plural: "thighs", count: 2, products: "legs", emoji: "🍗"},
 {singular: "tooth", plural: "teeth", count: 20, emoji: "😄"},
 {singular: "toenail", plural: "toenails", count: 10, products: "feet", emoji: "👣"},
 {singular: "toe", plural: "toes", count: 10, products: "feet", emoji: "👣"},
 {singular: "tongue", plural: "tongues", count: 1, products: "face", emoji: "👅"},
 {singular: "tummy", plural: "tummies", count: 1, products: "torso", emoji: ""},
 {singular: "vagina", plural: "vaginas", count: 1, products: "downthere", emoji: "🌷"},
 {singular: "vulva", plural: "vulvas", count: 1, products: "downthere", emoji: "🌷"}
];