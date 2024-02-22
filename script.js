const flipButton = document.getElementById("flipButton");
const outcomeDisplay = document.getElementById("outcome");
const statsDisplay = document.getElementById("stats");
const coinElement = document.getElementById("coin");

let headsCount = 0;
let tailsCount = 0;

flipButton.addEventListener("click", flipCoin);

function flipCoin() {
    coinElement.classList.add("flipping"); // Add the flipping class here
    
    // Generate random outcome
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    
    // Display outcome
    outcomeDisplay.textContent = outcome;
    
    // Update statistics
    if (outcome === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }
    updateStats();

    // Generate random color for button and outcome text
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    flipButton.style.backgroundColor = randomColor;
    outcomeDisplay.style.color = randomColor;

    // Display blinking text for both "Heads" and "Tails"
    displayBlinkingText(outcome);

    // Remove the flipping class after the animation finishes
    setTimeout(() => {
        coinElement.classList.remove("flipping");
    }, 1000);
}

function displayBlinkingText(outcome) {
    const blinkingText = document.createElement("div");
    blinkingText.textContent = "Outcome " + outcome;
    blinkingText.classList.add("blinking");
    blinkingText.style.top = Math.random() * (window.innerHeight - 200) + "px";
    blinkingText.style.left = Math.random() * (window.innerWidth - 200) + "px";
    blinkingText.style.color = outcomeDisplay.style.color;
    document.body.appendChild(blinkingText);

    // Remove blinking text after 2 seconds
    setTimeout(() => {
        blinkingText.remove();
    }, 2000);
}

function updateStats() {
    statsDisplay.textContent = "Heads: " + headsCount + ", Tails: " + tailsCount;
}
