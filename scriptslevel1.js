document.write('<script type="text/javascript" src="helperslevel1.js"></script>');
document.write('<script type="text/javascript" src="clickslevel1.js"></script>');

const directions = ["links", "rechts"];
// let directions = ["links", "rechts"];
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
let leftButtonPressed = false; // om dubbele touch te voorkomen!
let rightButtonPressed = false;


// ik denk dat het door deze aanroep kwam dat je altijd op de pijltjes kon blijven klikken
// dat heb ik opgelost door ze op true te zetten
// staat deze aanroep wel op de goede plek?
addEventListeners();




function addEventListeners() {
  console.log("start addEventListeners");
  leftBtn.addEventListener("click", handleLeftButtonClick);
  leftBtn.addEventListener("touchstart", handleLeftButtonClick);

  rightBtn.addEventListener("click", handleRightButtonClick);
  rightBtn.addEventListener("touchstart", handleRightButtonClick);

  document.addEventListener("keydown", handleKeydown);
}

function removeEventListeners() {
  console.log("start removeEventListeners");
  leftBtn.removeEventListener("click", handleLeftButtonClick);
  leftBtn.removeEventListener("touchstart", handleLeftButtonClick);

  rightBtn.removeEventListener("click", handleRightButtonClick);
  rightBtn.removeEventListener("touchstart", handleRightButtonClick);

  document.removeEventListener("keydown", handleKeydown);
  console.log("einde functie removeEvent listeners");
}


updateDirection();
