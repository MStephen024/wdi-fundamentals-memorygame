/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped" + cardOne);
console.log("User flipped" + cardFour);*/

/*var cardOne = cards[0];
var cardTwo = cards[2];
	cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	}
}

flipCard(0);
flipCard(2);
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
}