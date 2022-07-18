// Arrays for suits and values
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", '10', "J", "Q", "K"];

//Function for creating deck
function getDeck() {
  let deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = {
        Value: values[x],
        Suit: suits[i],
      };
      deck.push(card);
    }
  }
  return deck;
}

//Function for shuffling deck
function shuffle() {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  clickButton.addEventListener('click', shuffle);
  renderDeck();
}

//Rendering cards
function renderDeck() {
  document.getElementById("deck").innerHTML = "";

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("deck").appendChild(card);
  }
}

function load() {
  deck = getDeck();
  shuffle();
  renderDeck();
}

window.onload = load();
