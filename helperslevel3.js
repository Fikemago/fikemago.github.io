function getRandomDirection1() {
    const randomIndex = Math.floor(Math.random() * directions1.length);
    return directions1[randomIndex];
}

function getRandomDirection2() {
    const randomIndex = Math.floor(Math.random() * directions2.length);
    return directions2[randomIndex];
}



function updateDirection() {
    console.log("Functie update direction start nu");
    document.body.classList.remove("game-ended");
    document.getElementById("instruction").textContent = "Area 3: kies de juiste baan 🌕🌙";
    leftButtonPressed = false;
    leftleftButtonPressed = false;
    rightButtonPressed = false;
    rightleftButtonPressed = false;
    console.log("Button pressed op false gezet in updateDirection left, leftleft, right, rightleft", leftButtonPressed, leftleftButtonPressed, rightButtonPressed, rightleftButtonPressed);
    randomDirection1 = getRandomDirection1();
    randomDirection2 = getRandomDirection2();
    console.log("Direction 1 & 2 aangeroepen in updateDirection:", randomDirection1, randomDirection2);
    directionSpan.textContent = `${randomDirection1} - ${randomDirection2}`;
    instructionDiv.style.display = "block";
    carBtn.style.left = "50%";
    carBtn.style.top = "200px";
    directionSpan.classList.remove("correct", "incorrect");
    console.log("directionSpan.classList verwijderd", directionSpan.classList);
    // deze kon weg dacht ik
    //button.classList.remove("correct", "incorrect");
    leftBtn.classList.remove("click-effect");
    rightBtn.classList.remove("click-effect");
    leftleftBtn.classList.remove("click-effect");
    rightleftBtn.classList.remove("click-effect");
    console.log("clickeffecten verwijderd van buttons");
}



function endGame() {
    console.log("Nieuwe functie endGame begint");
    const gameArea = document.getElementById("game-area");
    document.getElementById("instruction").textContent = "End of last area 🌕🌙";
    // gameArea.innerHTML = "";
        // hier heb ik als laatse de button pressed op true gezet, wel goed checken of
    // ik ze niet ergens op false moet zetten!
    document.body.classList.add("game-ended");
    leftButtonPressed = true;
    leftleftButtonPressed = true;
    rightButtonPressed = true;
    rightleftButtonPressed = true;
    console.log("Button pressed op true gezet in endgame left, leftleft, right, rightleft", leftButtonPressed, leftleftButtonPressed, rightButtonPressed, rightleftButtonPressed);
    removeEventListeners();
    console.log("eventListeners verwijderd");

    if (diamonds < 2) {
        directionSpan.textContent ="FAILURE"
        //const gameOverDiv = document.createElement("div");
        //gameOverDiv.textContent = `Jouw score is ${score} van ${maxAttempts}. Probeer opnieuw tot je 2 diamonds hebt (10 punten)!`;

        // const retryButton = document.createElement("button");
        retryButton.textContent = "Speel opnieuw";
        retryButton.classList.add("retry-button");
        retryButton.addEventListener("click", () => {
            window.location.href = "level3.html";

        });
        //gameArea.appendChild(gameOverDiv);
            gameArea.appendChild(retryButton);
    }

    if (diamonds >= 2) {
        //const nextLevelButton = document.createElement("button");
        directionSpan.textContent ="SUCCESS"
        retryButton.textContent = "End of game - return home";
        retryButton.classList.add("retry-button");
        retryButton.addEventListener("click", () => {
            window.location.href = "index.html";
        //const gameOverDiv = document.createElement("div");
        //gameOverDiv.textContent = `Jouw score is ${score} van ${maxAttempts}. Je hebt het gehaald!`;
        //nextLevelButton.textContent = "Terug naar homepage";
        //nextLevelButton.classList.add("next-level-button");
        //nextLevelButton.addEventListener("click", () => {
            // Voer acties uit om door te gaan naar het volgende level
            //window.location.href = "index.html";
       });

        //gameArea.appendChild(gameOverDiv);
        // gameArea.appendChild(nextLevelButton);
    }

    // gameArea.appendChild(gameOverDiv);
    gameArea.appendChild(retryButton);

}
