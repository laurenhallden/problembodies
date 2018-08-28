// Here are our soulutions...

var solutions = {
 shape: [
	{adjective: "shaping", noun: "shaper", plural: "shapers"},
	{adjective: "aligning", noun: "aligner", plural: "aligners"},
	{adjective: "molding", noun: "mold", plural: "molds"},
	{adjective: "forming", noun: "form", plural: "forms"},
	{adjective: "sculpting", noun: "sculptor", plural: "sculptors"},
	{adjective: "morphing", noun: "morpher", plural: "morphers"},
	{adjective: "disciplining", noun: "discipliner", plural: "discipliners"},
	{noun: "harness"}
 ],
 position: [
 	{adjective: "guiding", noun: "guide", plural: "guides"},
 	{adjective: "aligning", noun: "aligner", plural: "aligners"},
    {noun: "brace", plural: "braces"},
  	{noun: "harness"},
 	{noun: "sling"}
 ],
 big: [
	{adjective: "minimizing", noun: "minimizer", plural: "minimizers"},
	{adjective: "concealing", noun: "concealer", plural: "concealers"},
	{adjective: "disguising", noun: "disguiser", plural: "disguisers"},
	{adjective: "shrinking", noun: "shrinker", plural: "shinkers"},
	{adjective: "compressing"},
	{adjective: "contolling"},
	{noun: "camoflauge"}
 ],
 small: [
  	{adjective: "volumizing", noun: "volumizer", plural: "volumizers"},
 	{adjective: "plumping", noun: "plumper", plural: "plumpers"},
 	{adjective: "extending", noun: "extension", plural: "extensions"},
 	{adjective: "enlarging", noun: "enlarger", plural: "enlargers"},
 	{adjective: "enhancing", noun: "enhancer", plural: "enhancers"},
 	{adjective: "maximizing", noun: "maximizer", plural: "maximizers"},
 	{adjective: "defining", noun: "definer"},
 	{noun: "pads", plural: "pads"}
 ],
 age: [
   	{adjective: "brightening", noun: "brightener", plural: "brighteners"},
 	{adjective: "rejuventating", noun: "rejuvenator", plural: "rejuvenators"},
 	{adjective: "reviving", noun: "reviver", plural: "revivers"},
 	{adjective: "revitalizing", noun: "revitalizer", plural: "retivalizers"},
 	{adjective: "regenerating", noun: "regenerator", plural: "regenerators"},
 	{adjective: "re-energizing", noun: "re-energizer", plural: "re-energizers"},
 	{adjective: "reanimating", noun: "reanimator", plural: "reanimators"},
 	{adjective: "resusitating", noun: "resucitator", plural: "resucitators"},
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "polishing", noun: "polisher", plural: "polishers"},
 	{adjective: "anxtioxidant", noun: "antioxidant"},
 	{adjective: "mircodelivery"},
 	{adjective: "restoring"},
	{adjective: "age-defying"},
 	{noun: "peel"}
 ],
 texture: [
    {adjective: "smoothing", noun: "smoother", plural: "smoothers"},
    {adjective: "lubricating", noun: "lubricator", plural: "lubricators"},
    {adjective: "exfoliating", noun: "exfoliator", plural: "exfoliators"},
    {adjective: "hydrating", noun: "hydrator", plural: "hydrators"},
    {adjective: "polishing", noun: "polish"},
    {adjective: "conditioning", noun: "conditioner"},
    {adjective: "resurfacing", noun: "resurfacer"},
    {adjective: "silky"},
    {adjective: "Himalayan"},
    {adjective: "chemical"},
    {adjective: "retexturizing"},
    {adjective: "refining"},
    {adjective: "nourishing"},
    {adjective: "daily"},
    {noun: "oil"},
    {noun: "gel"},
    {noun: "cream"},
    {noun: "peel"}
 ],
 surface: [
    {adjective: "smoothing", noun: "smoother", plural: "smoothers"},
    {adjective: "resurfacing", noun: "resurfacer"},
    {adjective: "firming", noun: "firmers", plural: "firmers"},
    {adjective: "filling", noun: "filler"},
    {noun: "peel"}
 ],
 attitude: [
 	{adjective: "straightening", noun: "straightener", plural: "straighteners"},
    {adjective: "controling", noun: "controler", plural: "controlers"},
    {adjective: "calming", noun: "calmer"},
 	{adjective: "soothing", noun: "soother"},
 	{adjective: "cooling"}
 ],
 smell: [
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "freshening", noun: "freshener", plural: "fresheners"},
 	{adjective: "deoderizing", noun: "deoderant", plural: "deoderant"},
 	{adjective: "cleansing", noun: "cleanser", plural: "cleansers"},
 	{adjective: "sterilizing"},
 	{adjective: "mineral"},
 	{adjective: "daily"},
 	{noun: "wipes", plural: "wipes"},
 	{noun: "towels", plural: "towels"},
 	{noun: "towelettes", plural: "towelettes"},
 	{noun: "perfume"}
 ],
 cleanliness: [
 	{adjective: "cleansing", noun: "cleanser", plural: "cleansers"},
 	{adjective: "sterilizing", noun: "sterlizer", plural: "sterlilizers"},
 	{adjective: "mineral"},
 	{adjective: "foaming"},
 	{adjective: "daily"},
 	{adjective: "dermatologist-recomended"},
 	{noun: "wipes", plural: "wipes"},
 	{noun: "towels", plural: "towels"},
 	{noun: "towelettes", plural: "towelettes"},
 	{noun: "beauty bar"},
 	{noun: "emulsion"},
 	{noun: "wash"}
 ]
};


// ...and here are a bunch of products that can also be solutions,
// depending on the problem part we selected

// TO DO - work these in

var products = {
 head: ["head wrap"],
 face: ["mask", "serum", "bath salt", "face wrap", "makeup", "milk"],
 neck: ["collar", "brace"],
 arms: ["sleeves", "shirt"],
 hands: ["gloves"],
 torso: ["shirt", "undershirt", "baselayer"],
 breasts: ["bra", "bralette"],
 downthere: ["underwear", "underpants", "thong", "panties", "shorts"],
 legs: ["pants"],
 feet: ["socks", "shoes"],
 all: ["corrector", "treatment", "procedure"]
};

var exciting_adjectives = [
	"magical",
	"incredible",
	"best-selling",
	"revolutionary",
	"one-of-a-kind",
	"ultimate",
	"super",
	"fabulous",
	"special",
	"powerful",
	"natural",
	"organic",
	"fair-trade",
	"innovative",
	"maximum power",
	"high-performance",
	"miracle-working"
];

var followup = [
"Use the hashtag/coupon code x to save <span class='to-thirty'></span>%.",
//"Your unfortunate <span class='part-again'></span> will thank you.",
//"Refer <span class='to-thirty'></span> friends and get access to special reward points!",
//"Bye bye, problem <span class='part-again'></span>!",
//"It&rsquo;ll change your life. Trust us.",
//"Take your self-care routine to the next level. You deserve it.",
//"Made from recycled milk containers, because we care about the environment."

]

var social = [
"Get yours before your friends by donating to our <a class='social-link' target='_blank'>Kickstarter</a>!",
"See the resuts for yourself on Instagram: <a class='social-link' target='_blank'><span class='social-account'></span></a>",
"Don't forget to <a class='social-link' target='_blank'>friend us on Facebook</a>!",
"Share your results on our new <a class='social-link' target='_blank'>Facebook community</a>!",
"See what people are saying about &rsquo;em on Twitter! <a class='social-link' target='_blank'><span class='social-account'></span></a>",
"Check us out in the <a class='social-link' target='_blank'>New York Times!</a>"
]