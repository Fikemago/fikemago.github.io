function handleButtonClick(choice, button) {
    attempts++;
    console.log("Attempts + 1 vanuit handleButtonClick", attempts);
    console.log("Choice vanuit handleButtonClick", choice);
    console.log("Button vanuit handleButtonClick", button);
    button.style.transform = "scale(1.2)";

    console.log("Car Button Before Move - Left:", carBtn.style.left);
    console.log("Car Button Before Move - Top:", carBtn.style.top);

    console.log("Direction:", directionSpan.textContent);

    const directionTextTrim = directionSpan.textContent.trim()

    const correctChoice = directionSpan.textContent.trim() === choice.trim();
    directionSpan.classList.add(correctChoice ? "correct" : "incorrect");
    word.classList.add(correctChoice ? "correct" : "incorrect");
    console.log("Correct Choice:", correctChoice);
    if (correctChoice === true) {
        directionSpan.textContent ="SUCCESS"
    } else {
        directionSpan.textContent ="FAILURE"
    }


    // Add the correct/incorrect class to the clicked button based on the expected choice
    //button.classList.add(correctChoice ? "correct" : "incorrect");
    //console.log("button.classList:", button.classList);
    //score++;
    score += correctChoice ? 1 : 0; // Verhoog de score alleen als de keuze correct is
    console.log("Score", score);
    console.log("Attempts:", attempts);
    scoreDisplay.textContent = `Score: ${score}`;
    //const diamondsContainer = document.getElementById("diamonds-container");
    if (correctChoice) {
        if (score > 0 && score % 5 === 0) {
            const diamond = document.createElement("span");
            diamond.textContent = "💎";
            diamond.className = "diamond";
            diamondsContainer.appendChild(diamond);
            diamonds++;
            console.log("Diamond added. Current Diamonds:", diamonds);
        }
    }

    if (attempts === maxAttempts) {
       console.log("Function endgame wordt aangeroepen", attempts);
       endGame();
       // return; // Stop de functie als attempts === maxAttempts
    }


    setTimeout(() => {
        console.log("setTimeout start nu");
        leftBtn.style.transform = ""; // Reset the scale
        rightBtn.style.transform = ""; // Reset the scale
        leftleftBtn.style.transform = ""; // Reset the scale
        rightleftBtn.style.transform = ""; // Reset the scale
        directionSpan.classList.remove("correct", "incorrect");
        //button.classList.remove("correct", "incorrect");
        word.classList.remove("correct", "incorrect");
        console.log("remove button.classList:", button.classList);
        if (attempts !== maxAttempts) {
            console.log("updateDirection wordt nu aangeroepen vanuit setTimeout");
            updateDirection();
            // return; // Stop de functie als attempts === maxAttempts
        }

    }, 500);

    // Calculate the new position for the car to be centered on the button
    const buttonRect = button.getBoundingClientRect();
    console.log("Button Left:", buttonRect.left);
    console.log("Button Top:", buttonRect.top);

    // Adjust this value to move the car upwards
    const yOffset = -5;

    const carLeft = buttonRect.left + (buttonRect.width - carBtn.offsetWidth) / 2;
    // const carTop = buttonRect.top + (buttonRect.height - carBtn.offsetHeight) / 2 + yOffset;
    const carTop = yOffset;

    console.log("Car Left:", carLeft);
    console.log("Car Top:", carTop);
    console.log("Car Button After Move - Left:", carBtn.style.left);
    console.log("Car Button After Move - Top:", carBtn.style.top);

    // Use setTimeout to ensure that the position update is applied after the CSS transition is applied
    setTimeout(() => {
        console.log("De 2e keer setTimeout start nu");
        // Set the new position for the car with pixel values
        carBtn.style.left = carLeft + "px";
        carBtn.style.top = carTop + "px";
    }, 0); // Use a small timeout to ensure the transition is applied first

}

function removeEventListeners() {
    console.log("functie removeEventListeners begint")
    leftBtn.removeEventListener("click", handleButtonClick);
    leftBtn.removeEventListener("touchstart", handleButtonClick);
    leftleftBtn.removeEventListener("click", handleButtonClick);
    leftleftBtn.removeEventListener("touchstart", handleButtonClick);
    // leftButtonPressed = false; // Zet leftButtonPressed op false na het verwijderen van de event listeners

    rightBtn.removeEventListener("click", handleButtonClick);
    rightBtn.removeEventListener("touchstart", handleButtonClick);
    rightleftBtn.removeEventListener("click", handleButtonClick);
    rightleftBtn.removeEventListener("touchstart", handleButtonClick);
    // rightButtonPressed = false; // Zet rightButtonPressed op false na het verwijderen van de event listeners

    // document.removeEventListener("keydown", handleKeydown);
}
