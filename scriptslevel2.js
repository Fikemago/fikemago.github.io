document.write('<script type="text/javascript" src="helperslevel2.js"></script>');
document.write('<script type="text/javascript" src="emojilevel2.js"></script>');
document.write('<script type="text/javascript" src="clickslevel2.js"></script>');


const directions = ["links", "rechts"];
const directionSpan = document.getElementById("direction");
const instructionDiv = document.getElementById("instruction");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const scoreDisplay = document.getElementById("score-display"); // Voeg score-display toe aan HTML
let score = 0;
const maxAttempts = 15;
let attempts = 0;
const diamondsContainer = document.getElementById("diamonds-container");
const nextLevelButton = document.createElement("button");
const retryButton = document.createElement("button");
let diamonds = 0;
let leftButtonPressed = false;
let rightButtonPressed = false;
const emojis = ["👽", "🔥", "💧", "🌬", "🌪", "❄", "🎆", "🧨", "✨", "🎇"];
// const emojis = ["🥐", "🍉", "🍌", "🍔", "🥑", "🥕", "🥝", "🥕", "🥩", "🍤", "🍣", "🍜", "🍰", "🎂", "🥛"]
let remainingEmojis = 3; // Set the initial number of emojis to display
let eventListenersActive = true;


// de laatste richting blijft in beeld staan na finish
// bij probeer opnieuw zijn er geen emojis
// bij 15 punten blijft next level in beeld bij probeer opnieuw
// bij scripts geen documentwrite doen
// buttons blijven soms zichtbaar tijdens emojis
// puntentelling stopt niet na 15
// roep ik de functie disable buttons wel aan? want dan worden eventlisteners verwijderd

console.log("vanuit hier aanroep addEventListeners");
addEventListeners();


// document.addEventListener("keydown", handleKeydown);

function addEventListeners() {
    console.log("Nu begint de functie addEventListeners");
    leftBtn.addEventListener("click", () => {
        console.log("left button add event click");
        console.log("Waarde van leftButtonPressed bij click:", leftButtonPressed);
        if (!leftButtonPressed) {
            console.log("leftbuttonpressed was niet true vanuit add click")
            handleLeftButtonClick();
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        }
    });

    leftBtn.addEventListener("touchstart", () => {
        console.log("left button add event touchstart");
        console.log("Waarde van leftButtonPressed bij touch:", leftButtonPressed);
        if (!leftButtonPressed) {
            console.log("leftbuttonpressed was niet true vanuit add touch")
            handleLeftButtonClick();
            //leftButtonPressed = false; // Zet leftButtonPressed op false na touchstart
        }
    });

    rightBtn.addEventListener("click", () => {
        if (!rightButtonPressed) {
            console.log("rightbuttonpressed was niet true vanuit add click")
            handleRightButtonClick();
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        }
        // handleRightButtonClick();
        // rightButtonPressed = false; // Zet leftButtonPressed op false na de klik
    });

    rightBtn.addEventListener("touchstart", () => {
        // handleRightButtonClick();
        // rightButtonPressed = false; // Zet leftButtonPressed op false na touchstart
        console.log("right button add event touchstart");
        if (!rightButtonPressed) {
            console.log("rightbuttonpressed was niet true vanuit add touch")
            handleRightButtonClick();
            //leftButtonPressed = false; // Zet leftButtonPressed op false na touchstart
        }
    });

    document.addEventListener("keydown", handleKeydown);
}

function removeEventListeners() {
    console.log("functie removeEventListeners begint")
    leftBtn.removeEventListener("click", handleLeftButtonClick);
    leftBtn.removeEventListener("touchstart", handleLeftButtonClick);
    // leftButtonPressed = false; // Zet leftButtonPressed op false na het verwijderen van de event listeners

    rightBtn.removeEventListener("click", handleRightButtonClick);
    rightBtn.removeEventListener("touchstart", handleRightButtonClick);
    // rightButtonPressed = false; // Zet rightButtonPressed op false na het verwijderen van de event listeners

    document.removeEventListener("keydown", handleKeydown);
}


function disableButtons() {
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    eventListenersActive = false;
}

function enableButtons() {
    leftBtn.style.display = "block";
    rightBtn.style.display = "block";
    console.log("We zijn in functie enable button, waarde leftbutton:", leftButtonPressed);
    console.log("We zijn in functie enable button, waarde rightbutton:", rightButtonPressed);
    eventListenersActive = true;
    console.log("Waarde leftbutton na eventlistenersActive:", leftButtonPressed);
    console.log("Waarde rightbutton na eventlistenersActive:", rightButtonPressed);
    console.log("Enable buttons vanuit functie enable buttons (left button display, rightbutton en evenlisteners active)", leftBtn.style.display, rightBtn.style.display, eventListenersActive);
}

// setTimeout(displayEmojiGroup, 7500);
setTimeout(displayEmojiGroup, 3000);

updateDirection();
