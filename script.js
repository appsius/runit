const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
	'a',
	'ability',
	'able',
	'about',
	'above',
	'accept',
	'according',
	'account',
	'across',
	'act',
	'action',
	'activity',
	'actually',
	'add'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Generate random words from array
function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
	randomWord = getRandomWord();
	word.innerHTML = randomWord;
}

// Update score
function updateScore() {
	score++;
	scoreEl.innerHTML = score;
}

addWordToDOM();

// Event Listeners
text.addEventListener('input', e => {
	const insertedText = e.target.value;

	if (insertedText === randomWord) {
		addWordToDOM();

		updateScore();

		e.target.value = '';
	}
});
