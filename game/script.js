let openedCards = [];
let matchedCards = 0;
var symbols = ["♤", "♥", "♡", "♧", "♤", "♥", "♡", "♧"];

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function checkMatch() {
    if (openedCards.length === 2) {
        if (openedCards[0].textContent === openedCards[1].textContent) {
            openedCards.forEach(card => {
                card.style.opacity = "1";
                card.removeEventListener("click", flipCard);
                card.classList.add("matched");
            });
            openedCards = [];
            matchedCards += 2;
            if (matchedCards === 8) {
                alert("You win 1 level");
                resetGame();
            }
        } else {
            setTimeout(() => {
                openedCards.forEach(card => {
                    card.style.opacity = "0";
                });
                openedCards = [];
            }, 1000);
        }
    }
}

function flipCard(event) {
    const card = event.currentTarget;
    card.style.opacity = "1";
    openedCards.push(card);
    checkMatch();
}

function resetGame() {
    openedCards = [];
    matchedCards = 0;
    shuffle(symbols);
    const cards = document.querySelectorAll(".cards");
    for (let i = 0; i < cards.length; i++) {
        cards[i].textContent = symbols[i];
        cards[i].style.opacity = "0";
        cards[i].addEventListener("click", flipCard);
        cards[i].classList.remove("matched"); 
    }
}

resetGame();
