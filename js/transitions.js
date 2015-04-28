
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


function handleKeyboardNavigation(e) {

  var direction = "left";

  changeImage(direction);
}



function changeImage(direction) {
  // get the active card based on the .active class
  var currentCard = document.querySelector('.active');
  currentCard.classList.add('pt-page-moveToLeft');


  // figure out the active card's number
  var currentCardNumber = parseInt(currentCard.getAttribute('data-index'));
  
  if (direction == "left") {
    nextCardNumber = currentCardNumber - 1;
    if (nextCardNumber < 1) {
      nextCardNumber = numberOfCards;
    }
  } else if (direction == "right") {
    nextCardNumber = currentCardNumber + 1;
    if (nextCardNumber > numberOfCards) {
      nextCardNumber = 1;
    }
  }

  console.log(nextCardNumber);

  var nextCardSelector = '#card-' + nextCardNumber;
  var nextCard = document.querySelector(nextCardSelector);

  nextCard.classList.add('active'); 
  currentCard.classList.add('pt-page-moveFromLeft');
  currentCard.classList.remove('active');

}




// var card = document.querySelector (".card");
// var card1= $("#card-1");

// // console.log(card);
// // console.log($("#left"));
// $("#left").on("click", function() {
//   $(".card").addClass(function( index, currentClass) {
//     var addedClass;
//     var current = document.querySelector('')
//     console.log(index);
//     console.log ('currentclass: ', currentClass);
//     removeClass();

//     switch (currentClass) {
//       case "card":
//         addedClass = "card-2";
//         return addedClass;
//         break;

//       case "card-2":
//         return addedClass;
//         break; "card-3"

//       case "card-3":
//       break;

//       case "card-4":
//       break;

//       case "card-5":
//       break;
//     }
//   });
// });

// function removeClass(presentClass) {
//     $("card").removeClass(presentClass);

// }

// original animation code
// $(".card").on("click", function() {
//   this.style.left = "-2000px"
// })
