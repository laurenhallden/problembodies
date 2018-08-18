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
"magical", "incredible", "best-selling", "revolutionary", "one-of-a-kind"
];

var followup = [
"find us on kickstarter/instagram/twitter.",
"use the hashtag/coupon code x to save y percent.",
"your unfortunate x will thank you.",
"last time these sold out in x days, so don't wait!",
"a customer favorite!",
"refer x friends and we'll give you an extra one free!",
"bye bye, problem x!"

]