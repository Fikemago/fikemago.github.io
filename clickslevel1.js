// hulpfuncties die met klikken etc te maken hebben

function handleLeftButtonClick() {
    console.log("Linker knop ingedrukt?", leftButtonPressed);
    // Als de knop al is ingedrukt, doe niets
      if (leftButtonPressed) {
        console.log("Linker knop ingedrukt, return");
      return;
    }

    leftButtonPressed = true;
    leftBtn.classList.add("click-effect");
    attempts++;
    console.log("left attempts + 1", attempts);
    if (directionSpan.textContent === "links") {
      word.classList.add("correct");
      leftBtn.classList.add("correct-click");
      directionSpan.textContent ="HIT"
      score++;
      console.log("left score + 1", score);
      scoreDisplay.textContent = `Score: ${score}`;
      // const diamondsContainer = document.getElementById("diamonds-container");
        if (score % 5 === 0) {
          const diamond = document.createElement("span");
          diamond.textContent = "💎";
          diamond.className = "diamond";
          diamondsContainer.appendChild(diamond);
          diamonds ++;
        }
    } else {
      word.classList.add("incorrect");
      directionSpan.textContent ="FAILURE"

    }
    if (attempts === maxAttempts) {
      console.log("endGame wordt aangeroepen vanuit handleLeft, attempts:", attempts);
      endGame();
    } else setTimeout(() => {
        leftButtonPressed = false;
        console.log("left knop op false gezet in handleLeft");
        updateDirection();
      }, 250);
    }

    function handleRightButtonClick() {
        console.log("Rechter knop ingedrukt?", rightButtonPressed);
        if (rightButtonPressed) {
          console.log("Rechter knop ingedrukt, return");
        return; // Als de knop al is ingedrukt, doe niets
      }

      rightButtonPressed = true;
      rightBtn.classList.add("click-effect");
      attempts++;
      console.log("right attempts + 1", attempts);
      if (directionSpan.textContent === "rechts") {
        word.classList.add("correct");
        rightBtn.classList.add("correct-click");
        directionSpan.textContent ="HIT"
        score++;
        console.log("right score + 1", score);
        scoreDisplay.textContent = `Score: ${score}`;
        //const diamondsContainer = document.getElementById("diamonds-container");
          if (score % 5 === 0) {
            const diamond = document.createElement("span");
            diamond.textContent = "💎";
            diamond.className = "diamond";
            diamondsContainer.appendChild(diamond);
            diamonds ++;
          }
      } else {
        word.classList.add("incorrect");
        directionSpan.textContent ="FAILURE"
        //game-area.classList.add("incorrect-body")
      }
      if (attempts === maxAttempts) {
        endGame();
      } else {
        setTimeout(() => {
          rightButtonPressed = false;
          console.log("Rechter knop op false gezet in handleRight");
          updateDirection();
        }, 250);
      }
    }

    function handleKeydown(event) {
        console.log("Keydown event ingeschakeld");
        if (event.key === "ArrowLeft" || event.key === "z") {
          handleLeftButtonClick();
        } else if (event.key === "ArrowRight") {
          handleRightButtonClick();
        }
      }
