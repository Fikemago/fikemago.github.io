function createEmojiElement(emoji) {
    const emojiElement = document.createElement("span");
    emojiElement.textContent = emoji;
    emojiElement.classList.add("emoji");

    emojiElement.addEventListener("click", () => {

        emojiElement.remove(); // Verwijder de geklikte emoji
        remainingEmojis--;
        console.log("emoji - 1", remainingEmojis);

        if (remainingEmojis === 0) {
            const emojiContainer = document.getElementById("emoji-container");
            emojiContainer.classList.add("emoji-click");
            const messageElement = emojiContainer.querySelector(".message");
            if (messageElement) {
                messageElement.remove(); // Remove the message
                enableButtons();
            }
        }
    });

        return emojiElement;
        console.log("return emojiElement", emojiElement);

    }

    function displayEmojiGroup() {
        if (attempts >= 15) {
            console.log("Max attempts. Display geen emoji's meer.", attempts);
            return;
        }
        const emojiContainer = document.getElementById("emoji-container");
        emojiContainer.innerHTML = ""; // Verwijder eerdere emoji's

        disableButtons();

        const emojisToShow = [];
        while (emojisToShow.length < 2) {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const randomEmoji = emojis[randomIndex];
            emojisToShow.push(randomEmoji);
        }

        emojisToShow.forEach((emoji) => {
            emojiContainer.appendChild(createEmojiElement(emoji));
        });

        const messageElement = document.createElement("div");
        messageElement.textContent = "Vernietig!";
        messageElement.classList.add("message");
        emojiContainer.appendChild(messageElement);

        remainingEmojis = 2; // Reset the number of remaining emojis

        setTimeout(() => {
            const messageElement = emojiContainer.querySelector(".message");
            if (messageElement) {
                messageElement.remove(); // Remove the message
            }

            displayEmojiGroup(); // Show a new group of emojis after timeout
        }, 7000); // Show a new group of emojis every ... seconds
    }
