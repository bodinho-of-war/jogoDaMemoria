/*
 * Create a list that holds all of your cards
 */
let cards = [],
  icones = [
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-bolt',
    'fa-cube',
    'fa-leaf',
    'fa-bicycle',
    'fa-bomb',
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-bolt',
    'fa-cube',
    'fa-leaf',
    'fa-bicycle',
    'fa-bomb'
  ];
let icone;

const ul = document.querySelector('.deck');

let criarCards = (arr) => {
  for (let i = 0; i < 16; i++){
    arr.push(document.createElement('li'));
    icone = document.createElement('i');
    icone.classList.toggle('fa');
    icone.classList.toggle(icones[i]);
    arr[i].appendChild(icone);
  }
  arr.forEach((card) => {
    card.classList.toggle('card');
  });
}

// Shuffle function from http://stackoverflow.com/a/2450976

let shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let exibir = () => {
  cards.forEach(card => {
    ul.appendChild(card);
  });
};

criarCards(cards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

shuffle(cards);

exibir();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let mostrar = () => {
    event.target.classList.toggle('open');
    event.target.classList.toggle('show');
};

let verificar = (element) => {
  cards.forEach(card => {
    if(card.classList[1] === 'open'){
      validar(element.firstElementChild, card.firstElementChild);
    }
  });
}

let adcionarListeners = (arr) => {
  arr.forEach( item => {
    item.addEventListener('click', mostrar);
  });
};

adcionarListeners(cards);
