
var numberOfCards = 10;

var gridControls = document.querySelector('.grid-controls');
gridControls.addEventListener("click", handleButtonClick);


function handleButtonClick(e) {
  var nextCardNumber;

  if (e.target.tagName != "BUTTON") {
    return;
  }
  // figure out which button was clicked
  var button = e.target;
  // use convention of button id is the direction
  var direction = button.getAttribute('id');

  changeImage(direction);
}

// Keydown function to change direction on keyboard
///////////////////////////

window.addEventListener("keydown", function  (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the key event was already consumed.
  }
  switch (event.keyCode) {
    case 39:
      // Do something for "left arrow" key press.
      changeImage("right");
      break;
    case 37: 
      changeImage("left");
      // Do something for "right arrow" key press.
      break;

    }
  });

//change direction on button control
////////////////////////////

function changeImage(direction) {
  // get the active card based on the .active class
  var currentCard = document.querySelector('.active');
  
  currentCard.classList.remove('pt-page-moveFromLeft');
  currentCard.classList.remove('pt-page-moveFromRight');

  // figure out the active card's number
  var currentCardNumber = parseInt(currentCard.getAttribute('data-index'));
  
  if (direction == "left") {
    // currentCard.classList.add('pt-page-moveToLeft');
    nextCardNumber = currentCardNumber - 1;
    if (nextCardNumber < 1) {
      nextCardNumber = numberOfCards;
    }
  } else if (direction == "right") {
    // currentCard.classList.add('pt-page-moveToRight');
    nextCardNumber = currentCardNumber + 1;
    if (nextCardNumber > numberOfCards) {
      nextCardNumber = 1;
    }
  }

//animation control
///////////////////////////////

  var nextCardSelector = '#card-' + nextCardNumber;
  var nextCard = document.querySelector(nextCardSelector);


  if (direction == "left"){ 
    nextCard.classList.add('pt-page-moveFromLeft');

  } else if (direction == "right"){
    nextCard.classList.add('pt-page-moveFromRight');
  }

  nextCard.classList.add('active');

  // nextCard.classList.remove('pt-page-moveFromLeft');
  // nextCard.classList.remove('pt-page-moveFromRight');
  
  // currentCard.classList.add('pt-page-moveFromLeft');

  currentCard.classList.remove('active');

  


}
