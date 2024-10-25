const phrases = [
    "AU MS Comp Sci Student",
	"VSU BS Comp Sci Undergrad",
    "Cybersecurity Enthusiast",
    "Researcher and Author",
	"Back-end Web Developer"
];

let index = 0;
let charIndex = 0;
const typingTextElement = document.getElementById('typing-text');

function type() {
    if (charIndex < phrases[index].length) {
        typingTextElement.textContent += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(() => {
            typingTextElement.textContent = '';
            charIndex = 0;
            index = (index + 1) % phrases.length; // Loop back to the first phrase after the last one
            type(); // Start typing the next phrase
        }, 2000); // Pause before starting the next phrase
    }
}

// Start the typing effect
type();