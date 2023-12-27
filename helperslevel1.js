// helpers.js

// zie ook console log: geen documentwrote gebruiken en andere waarschuwingen

// Deze functie kiest willekeurig een richting ("links" of "rechts") uit de directions-array.
function getRandomDirection() {
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  }

  function updateDirection() {
    document.getElementById("instruction").textContent = "Area 1: Vernietig de juiste vijand: links of rechts 👽";
    // Verwijder alle diamant elementen
      // Reset knoppen positie en kleur
      console.log("start van functie update direction");
      word.classList.remove("correct", "incorrect");
      leftBtn.classList.remove("click-effect");
      rightBtn.classList.remove("click-effect");
      leftBtn.classList.remove("correct-click");
      rightBtn.classList.remove("correct-click");
      nextLevelButton.style.display = "none";
      console.log("next level button weggehaald", nextLevelButton.style.display);

      const randomDirection = getRandomDirection();
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
      console.log("Knopposities bijgewerkt:", leftBtn.style.left, leftBtn.style.top, rightBtn.style.left, rightBtn.style.top);

    }

function endGame() {
    const gameArea = document.getElementById("game-area");
    document.getElementById("instruction").textContent = "End of Area 1 👽";
    // hier heb ik als laatse de button pressed op true gezet, wel goed checken of
    // ik ze niet ergens op false moet zetten!
    leftButtonPressed = true;
    console.log("leftButtonPressed op true in endgame", leftButtonPressed);
    rightButtonPressed = true;
    console.log("rightButtonPressed op true in endgame", rightButtonPressed);
    // document.removeEventListener("keydown", handleKeydown);

    // gameArea.innerHTML = "";
      console.log("hoi endgame 000");
      removeEventListeners();
      console.log("even listeners removed vanuit endgame");
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
      word.style.display = "none";
      console.log("right en leftbutton weggehaald in endgame");
      //wordDiv.style.display = "none";
    console.log("hoi endgame");

    const gameOverDiv = document.createElement("div");
    if (diamonds >= 2) {
      console.log("Diamonds hoger dan 2");

      //gameOverDiv.textContent = `Je score is ${score} van ${maxAttempts}. Je hebt toegang tot area 2!`;
      //console.log("diamonds groter dan 2 boodschap 2");
      //const nextLevelButton = document.createElement("button");
    }
    else {
      console.log("Diamonds is niet hoger dan 2");
      //gameOverDiv.textContent = `Je score is ${score} van ${maxAttempts}. Probeer het opnieuw!`;
    }

    // const retryButton = document.createElement("button");
    retryButton.textContent = "Speel opnieuw";
    retryButton.classList.add("retry-button");
    console.log("RetryButton aangemaakt:", retryButton);
    retryButton.addEventListener("click", () => {
      console.log("Retry button clicked");
      // Herstel de weergave van de knoppen en voeg event listeners toe
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
      console.log("Nu ben je in het retrybutton click deel voor aanroep addeventlisters");
      addEventListeners();
      console.log("even listeners toegevoegd");

      // Reset de spelvariabelen
      attempts = 0;
      score = 0;
      diamonds = 0;
      console.log("variabelen gereset in endgame");
      scoreDisplay.textContent = `Score: ${score}`;

      // hier moet dit opnieuw anders blijft de laatst gekozen knop true
      leftButtonPressed = false;
      rightButtonPressed = false;
      console.log("leftButtonPressed reset:", leftButtonPressed);
      console.log("rightButtonPressed reset:", rightButtonPressed);

      if (gameArea.contains(gameOverDiv)) {
        gameArea.removeChild(gameOverDiv);
      }
      if (gameArea.contains(retryButton)) {
        gameArea.removeChild(retryButton);
      }
      while (diamondsContainer.firstChild) {
        diamondsContainer.removeChild(diamondsContainer.firstChild);
      }
      updateDirection();
      console.log("update direction is aangeroepen in endgame");
    });

    if (diamonds >= 2) {
      console.log("diamonds groter dan 2");
      nextLevelButton.style.display = "block";
      console.log("next level button zichtbaar gemaakt", nextLevelButton.style.display);
      nextLevelButton.textContent = "Access Area 2 🪐";
      nextLevelButton.classList.add("next-level-button");
      nextLevelButton.addEventListener("click", () => {
        // Voer acties uit om door te gaan naar het volgende level
        window.location.href = "level2.html";
      });

      gameArea.appendChild(nextLevelButton);
    }

    //gameArea.appendChild(gameOverDiv);
    gameArea.appendChild(retryButton);

  }
