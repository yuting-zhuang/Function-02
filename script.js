//Vocabulary lists by style.
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


//Task type library categorized by type
const taskPrompts = {
	visual: [
		"Design an album cover based on this sentence.","Choose 2 colors that visually match this sentence.","Sketch a 10-minute drawing of the sentence.","Create a collage that interprets the sentence visually.","Use only geometric shapes to express the sentence.","Create a moodboard using textures related to the sentence.","Design a movie poster inspired by the sentence.","Turn the sentence into a logo or icon.","Recreate the sentence in 3D using found objects.","Make a digital artwork based on a literal interpretation.","Redraw the sentence in the style of your favorite artist.","Use paper cutouts to visualize the sentence.","Turn the sentence into a pattern or textile design.","Make a comic strip that ends with this sentence.","Draw a map of a place where the sentence would be true.","Illustrate the sentence using only lines and shadows.","Design a book cover for a story based on the sentence.","Create a symmetrical visual based on the sentence.","Interpret the sentence using photography.","Use food or objects to recreate the sentence and photograph it.","Draw two interpretations: literal and symbolic.","Animate the sentence in 3-5 frames.","Create a character that embodies the sentence.","Use collage and typography to recreate the sentence visually.","Paint the atmosphere of the sentence.","Create a tarot-style card that represents the sentence.","Design a flag based on the emotion of the sentence.","Build a shadow box scene inspired by the sentence.","Illustrate the sentence as a cover for a zine.","Use fabric or texture scans to reinterpret the sentence.","Create a pixel-art version of the sentence.","Turn the sentence into a surreal landscape.","Visualize it as a scientific diagram.","Design packaging for a fictional product inspired by the sentence.","Use mirrors or transparency in your design.","Represent the sentence with only circles.","Create an animation loop that visualizes the mood.","Use AI image generators to explore the sentence visually.","Design an AR filter or digital mask based on the sentence.","Visualize the sentence using only black and white."
	],
	sensory: [
		"If this sentence were a sound, what would it be?", "Close your eyes and imagine touching the sentence—what texture do you feel?", "Say the sentence out loud. How does your voice change?", "Whisper this sentence to yourself. How does it feel?", "Imagine this sentence as a smell—describe it.", "Draw the emotional weather of this sentence.", "Listen to ambient music while reading the sentence—does it shift?", "Taste the sentence in your imagination. What does it resemble?", "Read the sentence slowly—when do you feel tension or ease?", "Map the physical sensation this sentence triggers in your body.", "Act out this sentence using only your hands.", "Recreate this sentence using found sound clips.", "Assign a temperature to this sentence. Why?", "What texture would this sentence have if it were a fabric?", "How does the sentence feel in your chest or stomach?", "If the sentence were a flavor, would it be sweet, sour, salty, bitter, or umami?", "Record yourself reading this sentence in 3 different tones.", "Play a sound that matches the sentence's rhythm.", "Imagine this sentence as a weather pattern—what is it?", "Trace this sentence on your palm—how does it feel?", "Imagine the sentence as a dance move. Describe it.", "Turn the sentence into a breathing rhythm.", "What kind of light does this sentence emit?", "Describe the scent this sentence brings to mind.", "If this sentence were a sensation, where would you feel it?", "Imagine the sentence as a gust of wind—how strong is it?", "Describe the sentence using only sensory metaphors.", "If you could hold the sentence, how much would it weigh?", "Say the sentence with different emotional tones—how does it shift?", "Imagine you're walking through this sentence—what's underfoot?", "Play an instrument (real or virtual) that expresses the sentence.", "Write the sentence on a textured surface—how does it change?", "Visualize the sentence as a scent trail—where does it lead?", "Draw an abstract shape that feels like this sentence.", "Imagine the sentence whispering back to you. What do you hear?", "Read the sentence aloud underwater (or pretend to)—how does it sound?", "If this sentence had a heartbeat, what would its tempo be?", "Imagine you are inside this sentence—what do you touch first?", "Assign a physical gesture to this sentence.", "Light a candle or turn on a fan while reading—how does the sentence transform?", "Close your eyes. What image does the sentence leave behind?"
	],
	writing: [
		"Use this sentence as the first line of a poem.", "Write a short story inspired by the sentence.", "Transform the sentence into a haiku.", "Rewrite the sentence in the voice of a child.", "Describe a world where this sentence is a law.", "Write a dialogue where one character says this sentence.", "Translate the sentence into emoji.", "Use this sentence to start a journal entry.", "Break the sentence into individual words and write a line for each.", "Write a tweet that uses or twists this sentence.", "Turn the sentence into a riddle.", "Use the sentence as the title for a short horror story.", "Write the sentence backwards, then reinterpret it.", "Write a newspaper headline inspired by this sentence.", "Translate the sentence into a Shakespearean tone.", "Write a recipe inspired by this sentence.", "Invent a myth that explains the sentence.", "Write an advertisement that features this sentence.", "Use this sentence as the title of a lost book—describe its contents.", "Turn the sentence into a metaphor for modern life.", "Write a love letter using the sentence as your theme.", "Describe the sentence from the perspective of an animal.", "Rephrase the sentence as a legal statement.", "Write a poem where each word in the sentence begins a new line.", "Use the sentence as a closing line for a speech.", "Write a letter from the future explaining the sentence's meaning.", "Turn the sentence into a prophecy.", "Use the sentence as the final line of a ghost story.", "Imagine the sentence is graffiti—describe who wrote it and why.", "Rewrite the sentence as a question, then answer it.", "Write a scene where the sentence appears on a mysterious note.", "Use the sentence as the name of a band—write their bio.", "Describe how the sentence would be interpreted in a different culture.", "Write a dream journal entry with the sentence at its core.", "Parody the sentence using exaggeration.", "Write the sentence as an ancient proverb and explain it.", "Create a list of synonyms that expand the sentence's meaning.", "Use the sentence in a ransom note.", "Write a flash fiction piece where the sentence is misunderstood.", "Recast the sentence in the form of a chant or spell.", "Write a screenplay opening scene based on the sentence."
	],
	conceptual: [
		"What question does this sentence try to answer?", "What kind of world could exist where this sentence is completely normal?", "Turn this sentence into a museum exhibit title. What does the exhibit show?", "What assumptions does this sentence challenge?", "What might have happened before this sentence was said?", "If this sentence were a rule, who would it apply to?", "What philosophical idea is hidden in this sentence?", "What paradox does the sentence contain?", "Imagine this sentence is a lie. What is the truth?", "What does this sentence reveal about its speaker?", "Create a belief system based on this sentence.", "How would an alien interpret this sentence?", "What emotion is the sentence hiding?", "What contradiction lies at the core of this sentence?", "Explain this sentence to someone from 500 years ago.", "What would this sentence mean if written in a dream?", "If the sentence were a law, what would be its consequences?", "Where does this sentence belong—in a poem, a manifesto, a manual?", "Write a question that only this sentence can answer.", "What cultural myth could this sentence become?", "What is the sentence avoiding?", "What value does this sentence promote?", "What unseen force does this sentence imply?", "How would a machine misinterpret this sentence?", "Imagine the sentence is part of a ritual—what does it mark?", "What invisible structure supports the sentence's meaning?", "What kind of person would whisper this sentence?", "Where does the sentence belong: past, present, or future?", "What would a child think this sentence means?", "How would a villain use this sentence?", "What power dynamic is embedded in the sentence?", "How would this sentence appear in a dream dictionary?", "What sensory experience could symbolize the sentence's idea?", "What system or structure is being resisted by the sentence?", "What's missing from the sentence—and why?", "If this sentence were a password, what would it unlock?", "What illusion does this sentence rely on?", "What would change if this sentence were never said?", "What is the opposite of this sentence's reality?", "What timeline might this sentence come from?", "How does this sentence reshape your perception of time?"
	],
};


//Define a utility function to randomly select an element from an array.
function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

//background image
function updateBackgroundByStyle(style) {
	const background = document.querySelector(".background");
	background.classList.remove("nature-bg","surreal-bg"); //remove all the style first
	
	if (style === "nature") { //then add on
		background.classList.add("nature-bg");
	} else if (style === "surreal") {
		background.classList.add("surreal-bg");
	}
}

//Generate a random sentence based on selected style + a random task based on selected task type
function generateAll() {

	//Get the style currently selected by the user (retrieve the selected value from the dropdown menu).
	const style = document.getElementById("style-container").value;
	const type = document.getElementById("task-container").value;

	//Get the vocabulary object (subject, verb, adjective, object) from the corresponding style.
	const bank = wordBank[style];
	const prompts = taskPrompts[type];

	if (!bank || !prompts) {
		alert("Please select a sentence style and task type.");
		return;
	}

	//background image
	updateBackgroundByStyle(style);

	//Combine the sentence according to the structure.
	const sentence = `"The ${random(bank.subjects)} ${random(bank.verbs)} the ${random(bank.adjectives)} ${random(bank.objects)}."`;

	//Display the generated sentence on the page (insert it into the element with the ID "output").
	document.getElementById("output").textContent = sentence;
	
	//same with task generator
	const task = random(prompts);
	document.getElementById("task-output").textContent = task;

	//Iterate button text after first click
	// const sentenceButton = document.getElementById("generate-button");
	// sentenceButton.textContent = "Re-Generate";

	//auto-flip
	const card = document.getElementById("flip-card");
	card.classList.add("is-flipped");
	setTimeout(() => {
		card.classList.remove("is-flipped");
	}, 500);
}

//Bind a click event to the button: run the generateSentence function when the button is clicked.
document.getElementById("generate-button").addEventListener("click", generateAll);

//background image change immediatly after choose style
document.getElementById("style-container").addEventListener("change", function() {
	const selectedStyle = this.value;
	updateBackgroundByStyle(selectedStyle);
})

//flip on mobile (on tap)
document.getElementById("flip-card").addEventListener("click", function() {
	this.classList.toggle("is-flipped");
})

document.querySelector(".a-link").addEventListener("click", function() {
	document.getElementById("main-section").scrollIntoView({
		behavior: "smooth"
	});
})