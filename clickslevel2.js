function handleLeftButtonClick() {
    console.log("start HandleLeftButtonClick");
    if (leftButtonPressed) {
        console.log("LeftButtonPressed was al true: return");
        return; // Als de knop al is ingedrukt, doe niets
    }

    leftButtonPressed = true;
    console.log("1. LeftButtonPressed is op true gezet", leftButtonPressed);
    leftBtn.classList.add("click-effect");
    console.log("leftBtn.classList:", leftBtn.classList);
    attempts++;
    console.log("aantal attempts + 1 in functie handleleft:", attempts);
    if (directionSpan.textContent === "links") {
        word.classList.add("correct");
        directionSpan.textContent ="HIT"
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        console.log(`Huidige score uit handleleft: ${score}`);
        // const diamondsContainer = document.getElementById("diamonds-container");
        if (score % 5 === 0) {
            const diamond = document.createElement("span");
            diamond.textContent = "💎";
            diamond.className = "diamond";
            diamondsContainer.appendChild(diamond);
            diamonds++;
            console.log(`Huidige diamonds uit handleleft: ${diamonds}`);
        }
    } else {
        console.log("Niet correct uit handleleft");
        word.classList.add("incorrect");
        directionSpan.textContent ="FAILURE"
        console.log("word.classList in handleleft:", word.classList);
    }
    if (attempts === maxAttempts) {
        console.log("endGame wordt aangeroepen vanuit handleleft, attempts:", attempts);
        endGame();
    } else {
        setTimeout(() => {
            leftButtonPressed = false;
            console.log("LeftButtonPressed wordt op false gezet aan einde handleLeft", leftButtonPressed);
            console.log("updateDirection aanroep vanuit handleleft");
            updateDirection();
        }, 250);
    }
}

function handleRightButtonClick() {
    if (rightButtonPressed) {
        console.log("rightButtonPressed was al true: return");
        return; // Als de knop al is ingedrukt, doe niets
    }

    rightButtonPressed = true;
    console.log("1. RightButtonPressed wordt op true gezet", rightButtonPressed);
    rightBtn.classList.add("click-effect");
    console.log("rightBtn.classList in handleleft:", rightBtn.classList);
    attempts++;
    console.log("aantal attempts + 1 in functie handleRight:", attempts);
    if (directionSpan.textContent === "rechts") {
        word.classList.add("correct");
        directionSpan.textContent ="HIT"
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        console.log(`Huidige score uit handleRight: ${score}`);
        //const diamondsContainer = document.getElementById("diamonds-container");
        if (score % 5 === 0) {
            const diamond = document.createElement("span");
            diamond.textContent = "💎";
            diamond.className = "diamond";
            diamondsContainer.appendChild(diamond);
            diamonds++;
            console.log(`Huidige diamonds uit handleleft: ${diamonds}`);
        }
    } else {
        console.log("Niet correct uit handleRight");
        word.classList.add("incorrect");
        directionSpan.textContent ="FAILURE"
        console.log("word.classList in handleRight:", word.classList);
    }
    if (attempts === maxAttempts) {
        console.log("endGame wordt aangeroepen vanuit handleRight, attempts:", attempts);
        endGame();
    } else {
        setTimeout(() => {
            rightButtonPressed = false;
            console.log("rightButtonPressed wordt op false gezet in handleRight functie einde", rightButtonPressed);
            console.log("updateDirection vanuit handleRight");
            updateDirection();
        }, 250);
    }
}

function handleKeydown(event) {
    // if (!eventListenersActive) return;
    if (!eventListenersActive) {
        console.log("Event listeners zijn niet actief, return.");
        return;
      }

    if (event.key === "ArrowLeft" || event.key === "z") {
        handleLeftButtonClick();
    } else if (event.key === "ArrowRight") {
        handleRightButtonClick();
    }
}

