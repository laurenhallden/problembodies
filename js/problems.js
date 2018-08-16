// Make an object containing all the categories of ways things can be problems,
// so we can solve them later

var problems = {
 shape: ["square", "triangular", "oblong", "pointy", "sharp", "long", "knobby"],
 position: ["far apart", "close together", "high", "low"],
 big: ["visibile", "prominent", "fat", "hefty", "bulky", "big", "strong"],
 small: ["shrimpy", "puny", "small", "thin", "weak", "timid", "shy", "tiny", "meek", "bashful"],
 age: ["old", "worn down", "grungy", "not bright anymore", "ashy", "dull", "dingy", "sad", "tired"],
 texture: ["wrinkled", "dented", "ashy", "rough", "scaly", "dry", "hairy", "fuzzy", "fluffy"],
 attitude: ["angry", "unruly", "rowdy", "unmanageable", "out of control", "grumpy", "noisy"],
 smell: ["stinky", "smelly", "pungent"]
};


var solutions = {
 shape: [
	{adjective: "shaping", noun: "shaper", plural: "shapers"},
	{noun: "harness"},
	{adjective: "aligning", noun: "aligner", plural: "aligners"},
	{adjective: "guiding", noun: "guide", plural: "guides"},
	{adjective: "molding", noun: "mold", plural: "molds"},
	{adjective: "forming", noun: "form", plural: "forms"},
	{adjective: "sculpting"}
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
 	{adjective: "defining"}
 ],
 age: [
   	{adjective: "brightening"},
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
    {adjective: "smoothing", noun: "smoother", plural: "smoothers"}
    {adjective: "lubricating", noun: "lubricator", plural: "lubricators"},
    {adjective: "polishing", noun: "polish"}
 ],
 attitude: [
    {adjective: "calming", noun: "calmer"},
 	{adjective: "soothing", noun: "soother"}
 ],
 smell: [
 	{adjective: "refreshing", noun: "refresher"}
 ]
};