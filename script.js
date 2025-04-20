//Define an object that contains the vocabulary lists for all styles.
const wordBank = {
	surreal:{
		subjects:[
			"dream machine", "bionic sheep","lunar fish","glitching statue", "melting shadow", "echoing void", "digital moth", "plastic phoenix", "cybernetic owl", "glass whale", "telepathic cactus", "floating mirror", "pixel ghost", "mechanical swan", "gravity snake", "reversed cloud", "neon slug", "fragmented tower", "paper moon", "liquid book", "spiraling hat", "silent siren", "magnetic fog", "talking mirror", "folded time", "elastic sun", "clock spider", "levitating umbrella", "inverted lantern", "melting chair", "infinite stair", "distorted angel", "paper flame", "glowing dice", "vapor cat", "looping train", "collapsing balloon", "plasma tree", "painted fish", "binary bird", "kaleidoscope wolf", "flashing ceiling", "mirrored jellyfish", "screaming clock", "hovering pyramid", "sleeping signal", "magnetic antelope", "backward bird", "dust angel", "folded horizon", "fractured moon", "invisible violin", "winking television", "cubic rabbit", "flickering mask", "crystal giraffe", "zipped river", "rainbow insect", "scanning satellite", "golden beetle", "frozen whistle", "shifting hat", "drifting forest", "televised feather", "disappearing key", "blinking wall", "holographic candle", "noisy mirror", "melted violin", "spinning island", "dreaming plant", "folding swan", "transparent snail", "clockwise storm", "silent fog", "radioactive bubble", "shadow fox", "time turtle", "hypnotic jelly", "cogwheel cloud", "suspended thread", "ticking tunnel", "speaking stone", "fractured antler", "geometric crow", "levitating paper", "neural bell", "submerged kite", "rain-soaked hat", "sentient hairbrush", "glowing brick", "fragmented sphere", "reflected labyrinth", "surrealist hand", "digitized tongue", "light-eating bug", "magnetized snowflake", "echo sculpture", "folded skyline", "burning carousel", "melting dragonfly", "translucent whale"
		],

		verbs:[
			"scans", "dissolves into", "echoes through","distorts","fractures", "twists", "loops", "melts over", "floats past", "radiates", "splits", "pierces", "rotates around", "collapses into", "reverses", "absorbs", "contorts", "levitates above", "unfolds into", "reflects on", "disappears into", "morphs into", "blends with", "glitches through", "transforms", "shuffles through", "shimmers over", "burns through", "slides into", "hovers around", "echoes within", "compresses", "distills", "shatters", "suspends", "stretches across", "wraps around", "glows beneath", "slithers across", "spins around", "drifts over", "replicates", "crackles", "reconfigures", "splashes into", "hums through", "vibrates", "ripples through", "bursts from", "erupts into", "twinkles in", "inverts", "wanders into", "hollows out", "fractures into", "emerges from", "oscillates", "blinks into", "erupts from", "bends across", "shifts beyond", "pulses through", "syncs with", "tunnels through", "crawls beneath", "snaps over", "arches into", "leaks into", "dances with", "ticks across", "drips into", "wobbles", "screeches through", "fractals into", "washes across", "unwinds into", "stutters through", "glitches past", "dims over", "expands around", "unravels", "lingers within", "compresses into", "weaves through", "compresses down", "lights up", "detaches from", "reflects through", "grinds against", "ripples over", "rebounds", "clashes into", "fades within", "zips through", "vaporizes", "climbs through", "extracts", "twists out", "bounces from", "encircles", "scrambles over", "curls into"
		],

		adjectives:[
			"pixelated", "invisible", "glitching","recursive", "melting", "reversed", "fractured", "disjointed", "flickering", "looped", "mirror-like", "holographic", "vaporous", "hollow", "bent", "delayed", "fragmented", "neon-lit", "synthetic", "hypnotic", "transparent", "artificial", "dreamlike", "compressed", "spinning", "floating", "detached", "folded", "silent", "vibrating", "burning", "liquid", "kaleidoscopic", "wired", "phantom", "ghostlike", "chromatic", "metallic", "twisted", "dripping", "shadowed", "distorted", "glowing", "mirrored", "blurred", "buzzing", "hovering", "inverted", "elastic", "deformed", "dimensional", "shattered", "soft-glowing", "plasma", "glass-like", "nonlinear", "tilted", "shifting", "timeless", "disappearing", "multi-layered", "folding", "cyclic", "orbital", "randomized", "frozen", "reflective", "bouncing", "blurred-edge", "irregular", "fog-like", "crystalline", "unreal", "interlaced", "weightless", "overexposed", "machine-like", "pulsating", "flattened", "colorless", "fuzzy", "shimmering", "resonating", "low-res", "tiling", "synthetic-blue", "glassy", "evaporating", "stitched", "stretching", "dizzying", "dream-fed", "plastic", "electric", "half-visible", "loop-driven", "glimmering", "tangled", "reflecting", "infinite", "static-filled", "binary"
		],

		objects:[
			"time loops", "a floating city", "memory fragments","mirror spiral", "neon mist", "fractured moon", "electric void", "plastic universe", "vapor cloud", "melting staircase", "synthetic tide", "dream tunnel", "static field", "glass cage", "binary storm", "distorted skyline", "ghost echo", "folded horizon", "cloud maze", "glitch field", "electric fog", "echo chamber", "cyber forest", "magnetic silence", "phantom trail", "spinning symbol", "liquid structure", "hollow galaxy", "recursive clock", "pixel cloud", "burning diagram", "vortex gate", "shifting grid", "hologram pulse", "compressed sky", "zero point", "looping corridor", "plastic dome", "paper cosmos", "shattered orb", "radio wave", "dripping portal", "binary prism", "neural cloud", "upside-down city", "folded star", "gravity sculpture", "telepathic screen", "fog pattern", "ghost signal", "reflected map", "glowing rune", "rotating cube", "stretched room", "floating landmark", "glass moon", "circuit web", "kaleidoscope gate", "twisting spectrum", "inverted skyline", "wandering frame", "hovering object", "painted glitch", "mirror void", "time echo", "digital spiral", "vapor stair", "infinite grid", "looping thread", "electric canvas", "encoded fog", "sound fragment", "buzzing prism", "melting map", "lost frequency", "blinking pattern", "memory chamber", "fractured system", "neon lattice", "blurry gate", "repeating road", "echo pattern", "invisible vortex", "scrambled dream", "nonlinear code", "slipping texture", "distorted mural", "magnetic swarm", "floating organ", "ripple wall", "folded circuit", "ghost wheel", "burning edge", "shifting sculpture", "cracked tunnel", "drifting phrase", "sensory loop", "transparent pulse", "shadow mural", "tilted monument", "glowing mesh"
		]
	},

	nature:{
		subjects:[
			"mossy stone", "glowing firefly","river","morning dew","hummingbird","oak branch","forest canopy","snow-capped peak","windblown feather","sleeping fox","sunlit river","birch bark","autumn breeze","blooming hillside","pinecone","wet stones","lavender field","tidepool creature","wandering deer","cloud shadow","leaf-litter path","swaying grass","chirping sparrow","melted snow","foggy valley","rippling stream","moss-covered stump","golden finch","fluttering moth","fallen apple","cracked earth","shy turtle","hollow tree","gliding hawk","sun-warmed rock","climbing vine","raindrop cluster","cypress grove","drifting seed","rising mist","sandstone arch","nesting robin","twinkling star","desert bloom","grazing sheep","trickling creek","coral fan","buzzing bee","soft clover","glowing plankton","sleeping bear","wildflower ring","newborn fawn","forest edge","melting icicle","snowy meadow","running brook","tidal wave","green tendril","sprouting bud","flowing waterfall","sleeping lynx","drifting feather","mountain pass","summer storm","chirping cricket","willow branch","tangled roots","glowing ember","icy wind","coastal breeze","fluttering leaf","hidden burrow","trembling fern","fresh bloom","rising tide","quiet pond","glowing dusk","humming hive","sandy shore","desert wind","grassy plain","whispering tree","dandelion puff","muddy pawprint","muddy pawprint","weeping willow","brittle bark","gentle stream","prairie wind","still lake","curling vine","chirping wren","splashing otter","distant thunder","shifting dune","silvery trout","opening blossom","creaking branch","sleepy raccoon","hidden cave"
		],

		verbs:[
			"sings to", "flows over", "wraps","rustles","wraps","nourishes","rests upon","flows over","glows through","whispers to","brushes against","hovers above","clings to","melts into","grows from","stretches over","coils around","lifts","bends toward","sinks beneath","gathers","shelters","wraps around","shades","curls around","waves over","drifts into","scatters across","emerges from","hides beneath","cascades down","folds into","dances with","reflects","shades over","climbs up","runs through","cracks open","glistens on","twines around","glides through","presses against","rides above","huddles under","trickles over","bubbles under","murmurs through","flickers along","sways with","clutches","brushes past","bursts from","loops through","breezes past","weaves through","soaks","carries","releases","flickers in","rolls across","glimmers beneath","ripples across","beams through","shelters in","collides with","holds","falls onto","sinks into","spills into","vibrates through","drapes over","bounces off","slides down","surrounds","supports","pools beneath","wraps gently around","circles around","echoes off","twists through","melts down","fades into","layers over","pulses through","climbs across","stirs within","binds to","gathers in","spreads through","coats","breathes onto","catches","folds around","touches","hums to","lingers in","spreads under","nestles in","skips across","resonates through","falls beneath","brightens","reaches toward"
		],

		adjectives:[
			"shimmering", "soft-spoken", "misty","golden", "soft-spoken", "misty", "trembling", "damp", "blooming", "mossy", "warm", "scattered", "golden-hued", "sunlit", "icy", "weathered", "delicate", "overgrown", "silent", "tangled", "shimmering", "frostbitten", "velvet", "earthy", "radiant", "breezy", "soaked", "glowing", "sleepy", "dusty", "sun-kissed", "cloudy", "evergreen", "lush", "faded", "vibrant", "chilled", "foggy", "brittle", "prickly", "pale", "slow-moving", "iridescent", "falling", "sloped", "windblown", "shaded", "moist", "quiet", "curving", "sweet-smelling", "gentle", "fragrant", "uneven", "cracked", "waving", "low-hanging", "translucent", "climbing", "crisp", "light-dappled", "unsteady", "pebble-lined", "worn", "hollow", "patchy", "amber", "curled", "cool", "hibernating", "gritty", "powdery", "plush", "muddy", "drifting", "rippling", "night-chilled", "vibrant-green", "dew-covered", "moss-covered", "sun-warmed", "root-deep", "frost-covered", "sky-colored", "chalky", "fern-like", "moonlit", "forest-lined", "seed-filled", "honey-colored", "silver-tipped", "unevenly shaped", "blooming-white", "red-tinged", "wind-softened", "cloudy-grey", "newly-sprouted", "desert-dry", "puddled", "smooth", "upward-reaching", "dense", "cool-toned"
		],

		objects:[
			"heartbeat of earth", "fading sun", "dewdrop stories","riverbed", "mountain breeze", "dewdrop stories", "tree ring", "raindrop pattern", "forest floor", "petal cluster", "hollow log", "pebble bed", "sunbeam", "tidepool shadow", "frosted leaves", "blossom veil", "fallen branch", "wildflower path", "rippling lake", "snowdrift", "fog veil", "moss mat", "pine scent", "meadow light", "root system", "bark texture", "echoing canyon", "butterfly dance", "branch arch", "cloud reflection", "glacial ripple", "fern pattern", "cactus skin", "stone echo", "night air", "stream pulse", "thunder trail", "water ripple", "fox track", "clover patch", "breeze echo", "drifting pollen", "twilight hush", "leaf pattern", "beetle path", "birch glow", "lichen edge", "sunset glow", "forest scent", "river shimmer", "dawn chorus", "nesting shape", "valley hum", "cricket rhythm", "breeze motion", "petal burst", "rain rhythm", "sea sparkle", "willow sway", "feather fall", "lily bloom", "mineral bed", "bark whisper", "reed rustle", "stone glint", "trout splash", "mist trail", "branch ring", "tide swirl", "acorn fall", "owl cry", "beetle shine", "leaf tremor", "earth scent", "log spiral", "vine stretch", "sun halo", "dew rhythm", "sap scent", "ice reflection", "haze shadow", "lichen layer", "thistle edge", "wind ripple", "fawn track", "grass shimmer", "creek shimmer", "sky flicker", "puddle ring", "pine echo", "rock shadow", "stream glint", "ant line", "snow texture", "trail bend", "meadow scent", "petal shimmer", "wind hush", "morning stillness", "root curl", "dusk light", "cloud drift", "stone line", "rain mirror", "twig snap", "hill shadow", "moss spread"
		]
	}
};


//Define a utility function to randomly select an element from an array.
function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}


//Generating sentences.
function generateSentence() {

	//Get the style currently selected by the user (retrieve the selected value from the dropdown menu).
	const style = document.getElementById("style-container").value;

	//Get the vocabulary object (subject, verb, adjective, object) from the corresponding style.
	const bank = wordBank[style];

	if (!bank) {
		alert("Please select a style first.");
		return;
	}

	//Combine the sentence according to the structure.
	const sentence = `"The ${random(bank.subjects)} ${random(bank.verbs)} the ${random(bank.adjectives)} ${random(bank.objects)}."`;

	//Display the generated sentence on the page (insert it into the element with the ID "output").
	document.getElementById("output").textContent = sentence;

	//Iterate button text after first click
	// const sentenceButton = document.getElementById("generate-button");
	// sentenceButton.textContent = "Re-Generate";

}

//Bind a click event to the button: run the generateSentence function when the button is clicked.
document.getElementById("generate-button").addEventListener("click", generateSentence);


//Task prompt library categorized by type
const taskPrompts = {
	visual: [
		"Design an album cover based on this sentence.",
		"Choose 2 colors that visually match this sentence.",
		"Turn this sentence into a collage.",
		"Create a 5-minute drawing inspired by this sentence."
	],
	sensory: [
		"If this sentence were a sound, what would it be?",
		"Whisper this sentence to yourself. How does it feel?",
		"Use this sentence to create a short soundscape.",
		"What emotion is hidden beneath these words?"
	],
	writing: [
		"Use this sentence as the first line of a poem.",
		"Translate this sentence into emoji."
	],
	conceptual: [
		"What question does this sentence try to answer?",
		"What kind of world could exist where this sentence is completely normal?",
		"Turn this sentence into a museum exhibit title. What does the exhibit show?"
	],
};

//Generate a random task based on selected task type
function generateTaskPrompt() {
	const type = document.getElementById("task-container").value;
	const prompts = taskPrompts[type];

	if (!prompts) {
		alert("Please select a task type.");
		return;
	}

	const prompt = random(prompts);
	document.getElementById("task-output").textContent = prompt;

	// const taskButton = document.getElementById("generate-task-button");
	// taskButton.textContent = "Re-Generate";

	const card = document.getElementById("flip-card");
	card.classList.add("is-flipped");
	setTimeout(() => {
		card.classList.remove("is-flipped");
	}, 500);
}

//bind task generation button
document.getElementById("generate-task-button").addEventListener("click",generateTaskPrompt);

//flip on mobile (on tap)
document.getElementById("flip-card").addEventListener("click", function() {
	this.classList.toggle("is-flipped");
})