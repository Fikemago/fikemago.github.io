function getRandomDirection() {
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

// Set focus to the game area on page load
window.onload = () => {
    document.getElementById("game-area").focus();
};

function updateDirection() {
    console.log("Start functie update Direction");
    console.log("aanroep enable buttons vanuit updateDirection");
    document.getElementById("instruction").textContent = "Navigeer naar de juiste planeet 🪐 🌍";
    enableButtons();
    console.log("rightButtonPressed status aan begin updateDirection", rightButtonPressed);
    console.log("leftButtonPressed status aan begin updateDirection", leftButtonPressed);
    leftButtonPressed = false;
    console.log("maxAttempts aan begin updateDirection", maxAttempts);
    // Verwijder alle diamant elementen
    // Reset knoppen positie en kleur
    //const gameArea = document.getElementById("game-area");
    //gameArea.classList.remove("game-ended");
    word.classList.remove("correct", "incorrect");
    console.log("word.classList:", word.classList);
    leftBtn.classList.remove("click-effect");
    rightBtn.classList.remove("click-effect");
    console.log("leftBtn.classList:", leftBtn.classList);
    console.log("rightBtn.classList:", rightBtn.classList);
    // nextLevelButton.style.display = "none";
    // console.log("next level button weggehaald", nextLevelButton.style.display);

    const randomDirection = getRandomDirection();
    console.log("random direction:", randomDirection);
    console.log("aantal attempts:", attempts);
    directionSpan.textContent = randomDirection;
    instructionDiv.style.display = "block";
    // wordDiv.style.display = "block";

    // Plaats knoppen binnen het aangewezen speelveld
    const gameAreaWidth = document.getElementById("game-area").offsetWidth;
    const gameAreaHeight = document.getElementById("game-area").offsetHeight - 40;
    const buttonWidth = 100; // Breedte van de knoppen
    const buttonHeight = 100; // Hoogte van de knoppen

    const leftBtnX = Math.random() * (gameAreaWidth / 2 - buttonWidth);
    const leftBtnY = Math.random() * (gameAreaHeight - buttonHeight);
    leftBtn.style.left = `${leftBtnX}px`;
    leftBtn.style.top = `${leftBtnY}px`;

    const rightBtnX = (gameAreaWidth / 2) + Math.random() * (gameAreaWidth / 2 - buttonWidth);
    const rightBtnY = Math.random() * (gameAreaHeight - buttonHeight);
    rightBtn.style.left = `${rightBtnX}px`;
    rightBtn.style.top = `${rightBtnY}px`;
}

function endGame() {
    console.log("Functie endGame begint");
    const gameArea = document.getElementById("game-area");
    document.getElementById("instruction").textContent = "End of Area 2 🪐";
    // gameArea.innerHTML = "";
    ;
    // hier heb ik als laatse de button pressed op true gezet, wel goed checken of
    // ik ze niet ergens op false moet zetten!
    word.classList.remove("correct", "incorrect");
    //gameArea.classList.add("game-ended");
    leftButtonPressed = true;
    console.log("leftButtonPressed op true in endgame", leftButtonPressed);
    rightButtonPressed = true;
    console.log("rightButtonPressed op true in endgame", rightButtonPressed);
    removeEventListeners();
    console.log("eventListeners verwijderd");
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    console.log("linker button style display:", leftBtn.style.display);
    console.log("rechter button style display:", rightBtn.style.display)

    if (diamonds < 2) {
        directionSpan.textContent ="FAILURE"
        //const gameOverDiv = document.createElement("div");
        //gameOverDiv.textContent = `Jouw score is ${score} van ${maxAttempts}. Unlock volgende level met 2 diamonds (15 punten).`;
        //gameArea.appendChild(gameOverDiv);
    }

    // const retryButton = document.createElement("button");
    retryButton.textContent = "Speel opnieuw";
    retryButton.classList.add("retry-button");
    retryButton.addEventListener("click", () => {
        leftBtn.style.display = "block";
        rightBtn.style.display = "block";
        addEventListeners();
        console.log("eventListeners toegevoegd in endgame");

        attempts = 0;
        score = 0;
        diamonds = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        leftButtonPressed = false;
        rightButtonPressed = false;
        console.log("leftButtonPressed reset:", leftButtonPressed);
        console.log("rightButtonPressed reset:", rightButtonPressed);
        gameArea.removeChild(gameOverDiv);
        gameArea.removeChild(retryButton);
        while (diamondsContainer.firstChild) {
            diamondsContainer.removeChild(diamondsContainer.firstChild);
        }
        console.log("aanroep updateDirection vanuit endgame");
        updateDirection();
    });

    if (diamonds >= 2) {
        //const nextLevelButton = document.createElement("button");
        //const gameOverDiv = document.createElement("div");
        //gameOverDiv.textContent = `Jouw score is ${score} van ${maxAttempts}. Ga door naar het volgende level!`;
        //gameArea.appendChild(gameOverDiv);
        directionSpan.textContent ="SUCCESS"
        nextLevelButton.textContent = "Access Area 3 🌍";
        nextLevelButton.classList.add("next-level-button");
        nextLevelButton.addEventListener("click", () => {
            // Voer acties uit om door te gaan naar het volgende level
            window.location.href = "level3.html";
        });

        gameArea.appendChild(nextLevelButton);
    }

    // gameArea.appendChild(gameOverDiv);
    gameArea.appendChild(retryButton);

}

