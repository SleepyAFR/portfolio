const phrases = [
    "American University Master's Student",
    "Cybersecurity Enthusiast",
    "Research Author",
    "Asante Fola-Rose"
];

let index = 0;
let charIndex = 0;
const typingTextElement = document.getElementById('typing-text');

function type() {
    if (index < phrases.length) {
        if (charIndex < phrases[index].length) {
            typingTextElement.textContent += phrases[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                // Clear the text for all except the last phrase
                if (index < phrases.length - 1) {
                    typingTextElement.textContent = '';
                }
                index++;
                charIndex = 0;
                type(); // Start typing the next phrase
            }, 2000); // Pause before starting the next phrase
        }
    }
}

// Start the typing effect
type();