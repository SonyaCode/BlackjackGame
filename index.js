// Build a BlackJack Game
let cards = [];
let hasBlackjack = false;
let isAlive;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");
// variables representing two cards 
let sum = 0;
let player = document.getElementById("player-el");

// display player's name
if (!localStorage.player) {
    localStorage.player = prompt("Enter your name")

}
player.textContent = "Player: " + localStorage.player;
// display player's win
// let wins = 0;

if (!localStorage.wins) {
    localStorage.wins = 0;
}


function renderGame() {
    // resetting the sum and cardsEl text to prevent duplicate
    sum = 0;
    cardsEl.textContent = "Cards: ";

    // add all the cards in the list to cardsEl and add the card number to the sum
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
        sum += cards[i]
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackjack = true;
        localStorage.wins++;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }

    document.getElementById("num-of-wins").textContent = "Total wins: " + localStorage.wins
    messageEl.innerText = message;
}

function newCard(element) {
    // will only add card if the game is NOT over
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        renderGame();
    }  
}

function startGame() {
    // reset cards list
    cards = [];
    isAlive = true;
    hasBlackjack = false;
    // generate and add two cards to the cards list
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
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
