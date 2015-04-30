


var gridControls = document.querySelector('.grid-controls');
var container = document.querySelector('.container');
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
  var numberOfCards = cards.length;
  // get the active card based on the .active class
  var currentCard = document.querySelector('.active');
  
  currentCard.classList.remove('moveFromLeft');
  currentCard.classList.remove('moveFromRight');

  // figure out the active card's number
  var currentCardNumber = parseInt(currentCard.getAttribute('data-index'));
  
  if (direction == "left") {
    // currentCard.classList.add('pt-page-moveToLeft');
    nextCardNumber = currentCardNumber - 1;
    if (nextCardNumber < 0) {
      nextCardNumber = numberOfCards - 1;
    }
  } else if (direction == "right") {
    // currentCard.classList.add('pt-page-moveToRight');
    nextCardNumber = currentCardNumber + 1;
    if (nextCardNumber >= numberOfCards) {
      nextCardNumber = 0;
    }
  }
  console.log(nextCardNumber, currentCardNumber)
//animation control
///////////////////////////////

  var nextCardSelector = '#card-' + nextCardNumber;
  var nextCard = document.querySelector(nextCardSelector);


  if (direction == "left"){ 
    nextCard.classList.add('moveFromLeft');

  } else if (direction == "right"){
    nextCard.classList.add('moveFromRight');
  }

  nextCard.classList.add('active');


  currentCard.classList.remove('active');

  
}

// build list 

var cards = [
    { 
      fontName:"Source Code Pro",
      link:"https://www.google.com/fonts/specimen/Source+Code+Pro",
      title:"brown",
      pangram: "fox jumps over the lazy dog"
    },
    { 
      fontName:"Cardo",
      link:"http://www.google.com/fonts/specimen/Cardo",
      title:"Praty",
      pangram: "jokers quizzically vexed me with fibs"
    },
    { 
      fontName:"Merriweather",
      link:"http://www.google.com/fonts/specimen/Merriweather",
      title:"Woven",
      pangram: "red vixens fight for a quick jump"
    },
    { 
      fontName:"Droid Sans",
      link:"http://www.google.com/fonts/specimen/Droid+Sans",
      title:"quick",
      pangram: "movement of the enemy will jeopardize six gunboats"
    },
    { 
      fontName:"Arvo",
      link:"http://www.google.com/fonts/specimen/Arvo",
      title:"Bobby",
      pangram: "Klun awarded Jayme for her very high quiz"
    },
    { 
      fontName:"Lato",
      link:"http://www.google.com/fonts/specimen/Lato",
      title:"Blowzy",
      pangram: "red vixens fight for a quick jump"
    },
    { 
      fontName:"PT Sans",
      link:"http://www.google.com/fonts/specimen/PT+Sans",
      title:"Waxing",
      pangram: "of linoleum frequently peeves chintzy the kids job"
    },
    { 
      fontName:"Ubuntu",
      link:"http://www.google.com/fonts/specimen/Ubuntu",
      title:"A very",
      pangram: "big box sailed up then whizzed quickly from Japan"
    },
    { 
      fontName:"Josefin Slab",
      link:"http://www.google.com/fonts/specimen/Josefin+Slab",
      title:"Nymphs",
      pangram: "blitz quick vex dwarf jog"
    },
    { 
      fontName:"Volkhov",
      link:"http://www.google.com/fonts/specimen/Volkhov",
      title:"Sixty",
      pangram: "zips were quickly picked from the woven jute bag"
    },
  ];

cards.forEach(createCard);

function createCard(card, index) {

  // step 1: create markup
  var cardDiv  = document.createElement("div");
  var fontP    = document.createElement("p");
  var link      = document.createElement("a");
  var titleDiv  = document.createElement("div");
  var paddingDiv  = document.createElement("div");
  var pangramDiv   = document.createElement("div");



//   // step 2: attributes

  cardDiv.classList.add("card");
  cardDiv.id = 'card-' + index;
  cardDiv.dataset.index =  index;

  fontP.classList.add("paragraph-padding");
  fontP.innerHTML = "Right now you are looking at Google font:";

  link.classList.add("a");
  link.href = card.link;
  link.innerHTML = card.fontName;

  titleDiv.innerHTML = card.title;
  titleDiv.dataset.fitterHappierText = "";
  titleDiv.classList.add("fitter-happier");
  titleDiv.classList.add("decoration-top");


  paddingDiv.classList.add("h2-padding");


  pangramDiv.classList.add("decoration-bottom");
  pangramDiv.classList.add("fitter-happier");
  pangramDiv.dataset.fitterHappierText = "";
  pangramDiv.innerHTML = card.pangram;

  
  // step 3: append to DOM
  cardDiv.appendChild(fontP);
  fontP.appendChild(link);
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(paddingDiv);
  cardDiv.appendChild(pangramDiv);

  //special stuff for first card
  if(index == 0) {
    cardDiv.classList.add("active");

    var firstTextDiv = document.createElement("div");
    var firstP = document.createElement("p");
    
    firstTextDiv.innerHTML = '<p>Looking for a english-language pangram? Look no further b/c you found it!</p>';
    firstTextDiv.classList.add("text");

    firstP.innerHTML = '<a href="https://github.com/alimofun/typeTransitions">view on gethub </a>INSPIRED BY <a href="http://jxnblk.com/fitter-happier-text/">fitter-happier-text</a> Made by <a href="http://www.seankesterson.com/">Sean Kesterson</a>';
    firstP.classList.add("paragraph-padding");

    cardDiv.appendChild(firstTextDiv);
    cardDiv.appendChild(firstP);
  }
 

  container.appendChild(cardDiv);
}

