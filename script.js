//Define an object that contains the vocabulary lists for all styles.
const wordBank = {
	surreal:{
		subjects:[
			"dream machine", "bionic sheep","lunar fish"
		],

		verbs:[
			"scans", "dissolves into", "echoes through"
		],

		adjectives:[
			"pixelated", "invisible", "glitching"
		],

		objects:[
			"time loops", "a floating city", "memory fragments"
		]
	},

	nature:{
		subjects:[
			"mossy stone", "glowing firefly","river"
		],

		verbs:[
			"sings to", "flows over", "wraps"
		],

		adjectives:[
			"shimmering", "soft-spoken", "misty"
		],

		objects:[
			"heartbeat of earth", "fading sun", "dewdrop stories"
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
	const sentenceButton = document.getElementById("generate-button");
	sentenceButton.textContent = "Re-Generate";

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

	const taskButton = document.getElementById("generate-task-button");
	taskButton.textContent = "Re-Generate";
}

//bind task generation button
document.getElementById("generate-task-button").addEventListener("click",generateTaskPrompt);

//flip on mobile (on tap)
document.getElementById("flip-card").addEventListener("click", function() {
	this.classList.toggle("is-flipped");
})