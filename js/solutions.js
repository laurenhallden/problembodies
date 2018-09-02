// Here are our solutions...

var solutions = {
 shape: [
	{adjective: "shaping", noun: "shaper", plural: "shapers"},
	{adjective: "realigning", noun: "aligner", plural: "aligners"},
	{adjective: "molding", noun: "mold", plural: "molds"},
	{adjective: "forming", noun: "form", plural: "forms"},
	{adjective: "sculpting", noun: "sculptor", plural: "sculptors"},
	{adjective: "morphing", noun: "morpher", plural: "morphers"},
	{adjective: "disciplining", noun: "discipliner", plural: "discipliners"},
	{noun: "harness"}
 ],
 position: [
 	{adjective: "guiding", noun: "guide", plural: "guides"},
 	{adjective: "realigning", noun: "aligner", plural: "aligners"},
  	{adjective: "adjusting", noun: "adjuster", plural: "adjusters"},
  	{adjective: "reforming", noun: "reformer", plural: "reformers"},
    {noun: "brace", plural: "braces"},
  	{noun: "harness"},
 	{noun: "sling"},
 	{noun: "tape"},
 	{noun: "glue"},
 	{noun: "corrector"},
 ],
 big: [
	{adjective: "minimizing", noun: "minimizer", plural: "minimizers"},
	{adjective: "concealing", noun: "concealer", plural: "concealers"},
	{adjective: "disguising", noun: "disguiser", plural: "disguisers"},
	{adjective: "shrinking", noun: "shrinker", plural: "shinkers"},
	{adjective: "compressing"},
	{adjective: "controlling"},
	{noun: "camouflage"}
 ],
 small: [
  	{adjective: "volumizing", noun: "volumizer", plural: "volumizers"},
 	{adjective: "plumping", noun: "plumper", plural: "plumpers"},
 	{adjective: "extending", noun: "extender", plural: "extensions"},
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
 	{adjective: "resuscitating", noun: "resuscitator", plural: "resuscitators"},
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "polishing", noun: "polisher", plural: "polishers"},
 	{adjective: "antioxidant", noun: "antioxidant"},
 	{adjective: "microdelivery"},
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
    {adjective: "retexturizing"},
    {adjective: "refining"},
    {adjective: "nourishing"},
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
    {adjective: "silicone"},
    {adjective: "laser"},
    {noun: "injections"}
 ],
 attitude: [
 	{adjective: "straightening", noun: "straightener", plural: "straighteners"},
    {adjective: "controlling", noun: "controller", plural: "controllers"},
    {adjective: "calming", noun: "calmer"},
 	{adjective: "soothing", noun: "soother"},
 	{adjective: "cooling"}
 ],
 smell: [
 	{adjective: "refreshing", noun: "refresher", plural: "refreshers"},
 	{adjective: "freshening", noun: "freshener", plural: "fresheners"},
 	{adjective: "deodorizing", noun: "deodorant", plural: "deodorant"},
 	{adjective: "cleansing", noun: "cleanser", plural: "cleansers"},
 	{adjective: "sterilizing"},
 	{adjective: "mineral"},
 	{noun: "wipes", plural: "wipes"},
 	{noun: "towel", plural: "towels"},
 	{noun: "towelettes", plural: "towelettes"},
 	{noun: "perfume"}
 ],
 cleanliness: [
 	{adjective: "cleansing", noun: "cleanser", plural: "cleansers"},
 	{adjective: "sterilizing", noun: "sterilizer", plural: "sterilizers"},
 	{adjective: "mineral"},
 	{adjective: "foaming"},
 	{adjective: "dermatologist-recommended"},
 	{noun: "wipes", plural: "wipes"},
 	{noun: "towels", plural: "towels"},
 	{noun: "towelettes", plural: "towelettes"},
 	{noun: "beauty bar"},
 	{noun: "emulsion"},
 	{noun: "wash"}
 ],
 hariness: [
 	{adjective: "waxing", noun: "wax", plural: "wax"},
 	{adjective: "tweezing", noun: "tweezer", plural: "tweezers"},
 	{adjective: "depilatory", noun: "depilatory", plural: "depilatory"},
 	{adjective: "shaving", noun: "shaver", plural: "shavers"},
 	{adjective: "dermatologist-recommended"},
 	{adjective: "chemical"},
 	{noun: "epilator", plural: "epilators"},
 	{noun: "threading", plural: "threader"}
 ]
};


// ...and here are a bunch of products that can also be solutions,
// depending on the problem part we selected

// TO DO - work these in

var productsWith = {
 head: ["wrap", "corrector", "treatment", "procedure"],
 face: ["mask", "serum", "wrap", "makeup", "milk", "corrector", "treatment", "procedure"],
 neck: ["collar", "brace", "band", "corrector", "treatment", "procedure"],
 arms: ["sleeves", "bands", "corrector", "treatment", "procedure"],
 hands: ["corrector", "bands", "treatment", "procedure"],
 torso: ["band", "baselayer", "corrector", "treatment", "procedure"],
 breasts: ["corrector", "treatment"],
 downthere: ["corrector", "treatment", "procedure"],
 legs: ["corrector", "bands", "treatment", "procedure"],
 feet: ["socks", "corrector", "bands", "treatment", "procedure"],
};

var productsWithout = {
 head: ["head wrap"],
 face: ["face mask"],
 neck: ["collar"],
 arms: ["shirt", "sweater"],
 hands: ["gloves"],
 torso: ["shirt", "undershirt", "sweater"],
 breasts: ["bra", "bralette"],
 downthere: ["underwear", "underpants", "thong", "panties", "shorts"],
 legs: ["pants", "stockings", "tights"],
 feet: ["socks", "shoes"]
};

var exciting_adjectives = [
	"magical",
	"incredible",
	"best-selling",
	"revolutionary",
	"one-of-a-kind",
	"ultimate",
	"super",
	"unbelievable",
	"fabulous",
	"special",
	"high-tech",
	"powerful",
	"natural",
	"organic",
	"fair-trade",
	"innovative",
	"maximum power",
	"high-performance",
	"cutting-edge",
	"miracle-working",
	"luxurious",
	"intensive"
];

var hyphen_adjectives = [
	"mega-",
	"ultra-",
	"hyper-",
	"super-"
];

var followup = [
"Use the coupon code <span class='coupon-code'></span> to save <span class='to-thirty'></span>%.",
"Your unfortunate <span class='part-again'></span> will thank you.",
"Refer <span class='to-thirty'></span> of your best friends to unlock special reward points!",
"Bye bye, problem <span class='part-again'></span>!",
"It&rsquo;ll change your life. Trust us.",
"Take your self-care routine to the next level. You deserve it.",
"Made from recycled milk containers, because we care about the environment."
]

var social = [
"Get yours before your friends by donating to our <a class='social-link' target='_blank'>Kickstarter</a>!",
"See the results for yourself on Instagram:&nbsp; <a class='social-link' target='_blank'><span class='social-account'></span></a>",
"Don't forget to <a class='social-link' target='_blank'>friend us on Facebook</a>!",
"Connect with people just like you <a class='social-link' target='_blank'>Facebook community</a>!",
"See what people are saying about &rsquo;em on Twitter!&nbsp; <a class='social-link' target='_blank'><span class='social-account'></span></a>",
"Check us out in the <a class='social-link' target='_blank'>New York Times!</a>"
]