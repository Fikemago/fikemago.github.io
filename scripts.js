    // Zoek de knoppen op basis van hun id's of attributen
    const level1Button = document.getElementById("level1-link");
    const level2Button = document.getElementById("level2-link");

    // Voeg een klikgebeurtenisluisteraar toe aan elke knop
    level1Button.addEventListener("click", function (event) {
        event.preventDefault(); // Voorkom standaardgedrag van de link
        window.location.href = this.getAttribute("href"); // Ga naar level1.html
    });

    level2Button.addEventListener("click", function (event) {
        event.preventDefault(); // Voorkom standaardgedrag van de link
        const requiredDiamonds = parseInt(this.getAttribute("data-level")); // Haal het vereiste aantal diamanten op
        const currentDiamonds = // Hier moet je code toevoegen om het huidige aantal diamanten van de speler op te halen //

        // Controleer of de speler genoeg diamanten heeft om het niveau te ontgrendelen
        if (currentDiamonds >= requiredDiamonds) {
            window.location.href = this.getAttribute("href"); // Ga naar level2.html
        } else {
            alert("Je hebt niet genoeg diamanten om dit niveau te ontgrendelen.");
        }
    });

