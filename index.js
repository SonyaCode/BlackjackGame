// Build a BlackJack Game
let cards = [];
let hasBlackjack = false;
let isAlive;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");
// variables representing two cards 
let firstCard;
let secondCard;
let sum;


function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

    sum = firstCard + secondCard
    sumEl.innerHTML = sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
    } else {
        message = "You're out of the game! 😭"
    }

    messageEl.innerText = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);

    if (randomNumber == 1) {
        return 11
    } else if (randomNumber > 9) {
        return 10
    } else {
        return randomNumber
    }
}
