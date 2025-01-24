const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const readingTime = document.getElementById('readingTime');
const clearText = document.getElementById('clearText');
const copyText = document.getElementById('copyText');

function updateStats() {
	const text = textInput.value;
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	const chars = text.length;
	const sentences = text.split(/[.!?]+/).filter(Boolean).length;
	const paragraphs = text.split(/\n\n+/).filter(Boolean).length;
	const readingTimeEstimate = Math.ceil(words / 200);

	wordCount.textContent = words;
	charCount.textContent = chars;
	sentenceCount.textContent = sentences;
	paragraphCount.textContent = paragraphs;
	readingTime.textContent = readingTimeEstimate;
}

textInput.addEventListener('input', updateStats);

clearText.addEventListener('click', () => {
	textInput.value = '';
	updateStats();
});

copyText.addEventListener('click', () => {
	navigator.clipboard.writeText(textInput.value).then(() => {
		alert('Copied!');
	});
});
