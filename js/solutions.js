// Here are our soulutions...

var solutions = {
 shape: [
	{adjective: "shaping", noun: "shaper", plural: "shapers"},
	{noun: "harness"},
	{adjective: "aligning", noun: "aligner", plural: "aligners"},
	{adjective: "molding", noun: "mold", plural: "molds"},
	{adjective: "forming", noun: "form", plural: "forms"},
	{adjective: "sculpting", noun: "sculptor", plural: "sculptors"},
	{adjective: "morphing", noun: "morpher", plural: "morphers"}
 ],
 position: [
 	{adjective: "guiding", noun: "guide", plural: "guides"},
 	{adjective: "aligning", noun: "aligner", plural: "aligners"},
 	{noun: "harness"},
    {noun: "brace", plural: "braces"}
 ],
 big: [
	{adjective: "minimizing", noun: "minimizer", plural: "minimizers"},
	{adjective: "concealing", noun: "concealer", plural: "concealers"},
	{adjective: "disguising", noun: "disguiser", plural: "disguisers"},
	{noun: "camoflauge"}
 ],
 small: [
  	{adjective: "volumizing", noun: "volumizer", plural: "volumizers"},
 	{adjective: "plumping", noun: "plumper", plural: "plumpers"},
 	{adjective: "defining", noun: "definer"},
 	{noun: "pad", plural: "pads"}
 ],
 age: [
   	{adjective: "brightening", noun: "brightener", plural: "brighteners"},
 	{adjective: "rejuventating", noun: "rejuvenator", plural: "rejuvenators"},
 	{adjective: "defying", noun: "defier"},
 	{adjective: "reviving", noun: "reviver", plural: "revivers"},
 	{adjective: "revitalizing", noun: "revitalizer", plural: "retivalizers"},
 	{adjective: "regenerating", noun: "regenerator", plural: "regenerators"},
 	{adjective: "re-energizing", noun: "re-energizer", plural: "re-energizers"},
 	{adjective: "reanimating", noun: "reanimator", plural: "reanimators"},
 	{adjective: "resusitating", noun: "resucitator", plural: "resucitators"},
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "polishing", noun: "polisher", plural: "polishers"}
 ],
 texture: [
    {adjective: "smoothing", noun: "smoother", plural: "smoothers"},
    {adjective: "lubricating", noun: "lubricator", plural: "lubricators"},
    {adjective: "polishing", noun: "polish"},
    {adjective: "silky"},
    {adjective: "conditioning", noun: "conditioner"}
 ],
 attitude: [
    {adjective: "calming", noun: "calmer"},
 	{adjective: "soothing", noun: "soother"},
 	{adjective: "straightening", noun: "straightener", plural: "straighteners"},
    {adjective: "controling", noun: "controler", plural: "controlers"}
 ],
 smell: [
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "freshening", noun: "freshener", plural: "fresheners"},
 	{adjective: "deoderizing", noun: "deoderant", plural: "deoderant"},
 	{adjective: "sterilizing"},
 	{noun: "wipe", plural: "wipes"}
 ]
};


// ...and here are a bunch of products that can also be solutions,
// depending on the problem part we selected


var products = {
 head: ["helmet", "wrap"],
 face: ["mask", "serum"],
 neck: ["collar", "brace"],
 arms: ["sleeves", "shirt"],
 hands: ["gloves"],
 torso: ["shirt", "undershirt"],
 breasts: ["bra", "bralette"],
 downthere: ["underwear", "underpants", "thong", "panties"],
 legs: ["pants"],
 feet: ["socks", "shoes"],
 all: ["cream", "night cream", "day cream", "serum"]
};

var exciting_adjectives = [
	"magical",
	"incredible",
	"best-selling",
	"revolutionary",
	"one-of-a-kind",
	"ultra",
	"super",
	"mega",
	"fantastic",
	"fabulous",
	"special"
];

var followup = [
"Don't forget to check out our <span class='social-service'></span>.",
"Use the hashtag/coupon code x to save <span class='to-thirty'></span>%.",
"Your unfortunate <span class='part-again'></span> will thank you.",
"Last time these sold out in <span class='to-thirty'></span> days, so don't wait!",
"Our customers love 'em!",
"Refer <span class='to-thirty'></span> friends and we'll give you an extra one free!",
"Bye bye, problem <span class='part-again'></span>!",
"It'll change your life, trust us.",
"We make 'em from recycled milk containers, so it's environmentally friendly."

]

var social = [
"Kickstarter",
"Instagram",
"lastest Instagram story",
"Facebook",
"Facebook community",
"Twitter",
"season of Shark Tank",
"New York Times article"
]