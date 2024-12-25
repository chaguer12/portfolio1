function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}


document.addEventListener("DOMContentLoaded", () => {
    const text = "Hello, I'm"; // Text to animate
    const element = document.getElementById("animatedText");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the delay for typing speed
        } else {
            setTimeout(() => {
                clearText();
            }, 1000); // Wait before clearing the text
        }
    }

    function clearText() {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(clearText, 50); // Adjust the delay for clearing speed
        } else {
            typeText(); // Restart typing
        }
    }

    typeText();
});