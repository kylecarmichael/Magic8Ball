/* Returns a random integer in the range 'min' through 'max' inclusive. */
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

/* Write a function that handles the magic 8-ball being clicked. */
function answerQuestion() {
	let theAnswer = possibleOutcomes[getRandomIntInclusive(0, 8)];
	makeAnswerAppear(theAnswer);
}

/*  Array of Outcomes */
let possibleOutcomes = ["Yes definitely", "It is certain", "Without a doubt", "Most likely", "Ask again later", "Concentrate and ask again", "Don't count on it", "Very doubtful"];
