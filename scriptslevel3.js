document.write('<script type="text/javascript" src="helperslevel3.js"></script>');
document.write('<script type="text/javascript" src="clickslevel3.js"></script>');

 // versie 002 werkte bijna, maar de autobutton gaat te ver naar beneden
 // zie versie 002 voor alle weggehaalde functies als comments
 const directions1 = ["links", "rechts"];
 const directions2 = ["en daarna links", "en daarna rechts"];
 const directionSpan = document.getElementById("direction");
 const instructionDiv = document.getElementById("instruction");
 const leftBtn = document.getElementById("leftBtn");
 const leftleftBtn = document.getElementById("leftleftBtn");
 const rightBtn = document.getElementById("rightBtn");
 const rightleftBtn = document.getElementById("rightleftBtn");
 const carBtn = document.getElementById("carBtn");
 const scoreDisplay = document.getElementById("score-display");
 let score = 0;
 const maxAttempts = 15;
 let attempts = 0;
 const diamondsContainer = document.getElementById("diamonds-container");
 const nextLevelButton = document.createElement("button");
 const retryButton = document.createElement("button");
 let diamonds = 0;
 let carPosition = 0;
 let leftButtonPressed = false;
 let leftleftButtonPressed = false;
 let rightButtonPressed = false;
 let rightleftButtonPressed = false;




 // Set focus to the game area on page load
 window.onload = () => {
     document.getElementById("game-area").focus();
 };


console.log("vanuit hier aanroep addEventListeners");
addEventListeners();

 function addEventListeners() {

    leftBtn.addEventListener("click", () => {
        console.log("handle click leftBtn aangeroepen (links - rechts)");
        if (!leftButtonPressed) {
            console.log("leftbuttonpressed was niet true vanuit add click");
            handleButtonClick("links - en daarna rechts", leftBtn);
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("leftbuttonpressed was true vanuit add click, return");
            return;
        }
    });

    leftBtn.addEventListener("touchstart", () => {
        //handleButtonClick("links - en daarna rechts", leftBtn);
        console.log("handle touch leftBtn aangeroepen (links - rechts)");
        if (!leftButtonPressed) {
            console.log("leftbuttonpressed was niet true vanuit add touch");
            handleButtonClick("links - en daarna rechts", leftBtn);
            leftButtonPressed = true; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("leftbuttonpressed was true vanuit add touch, return");
            return;
        }

    });

    rightBtn.addEventListener("click", () => {
        //handleButtonClick("rechts - en daarna rechts", rightBtn);
        console.log("handle click rightBtn toegevoegd (rechts - rechts)");
        if (!rightButtonPressed) {
            console.log("rightbuttonpressed was niet true vanuit add click");
            handleButtonClick("rechts - en daarna rechts", rightBtn);
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightbuttonpressed was true vanuit add click, return")
            return;
        }
    });

    rightBtn.addEventListener("touchstart", () => {
        //handleButtonClick("rechts - en daarna rechts", rightBtn);
        console.log("handle touch rightBtn toegevoegd (rechts - rechts)");
        if (!rightButtonPressed) {
            console.log("rightbuttonpressed was niet true vanuit add touch");
            handleButtonClick("rechts - en daarna rechts", rightBtn);
            rightButtonPressed = true; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightbuttonpressed was true vanuit add click, return")
            return;
        }
    });


    leftleftBtn.addEventListener("click", () => {
        //handleButtonClick("links - en daarna links", leftleftBtn);
        console.log("handle click leftleftBtn toegevoegd (links - links)");
        if (!leftleftButtonPressed) {
            console.log("leftleftbuttonpressed was niet true vanuit add click");
            handleButtonClick("links - en daarna links", leftleftBtn);
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightbuttonpressed was true vanuit add click, return")
            return;
        }
    });

    leftleftBtn.addEventListener("touchstart", () => {
        //handleButtonClick("links - en daarna links", leftleftBtn);
        console.log("handle touch leftleftBtn toegevoegd (links - links)");
        if (!leftleftButtonPressed) {
            console.log("leftleftbuttonpressed was niet true vanuit add touch");
            handleButtonClick("links - en daarna links", leftleftBtn);
            leftleftButtonPressed = true; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightbuttonpressed was true vanuit add touch, return")
            return;
        }
    });

    rightleftBtn.addEventListener("click", () => {
        //handleButtonClick("rechts - en daarna links", rightleftBtn);
        console.log("handle click rightleftBtn toegevoegd (rechts - links)");
        if (!rightleftButtonPressed) {
            console.log("rightleftbuttonpressed was niet true vanuit add click");
            handleButtonClick("rechts - en daarna links", rightleftBtn);
            //leftButtonPressed = false; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightleftbuttonpressed was true vanuit add click, return")
            return;
        }
    });

    rightleftBtn.addEventListener("touchstart", () => {
        //handleButtonClick("rechts - en daarna links", rightleftBtn);
        console.log("handle touch rightleftBtn toegevoegd (rechts - links)");
        if (!rightleftButtonPressed) {
            console.log("rightleftbuttonpressed was niet true vanuit add touch");
            handleButtonClick("rechts - en daarna links", rightleftBtn);
            rightleftButtonPressed = true; // Zet leftButtonPressed op false na de klik
        } else {
            console.log("rightleftbuttonpressed was true vanuit add touch, return")
            return;
        }

    });
 }


 updateDirection();
