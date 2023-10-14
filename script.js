document.addEventListener("DOMContentLoaded", function() {
  let aFRONTcard = document.querySelector(".cardFront");
  let aINsidecard = document.querySelector(".cardInside");

  let inOpac = window.getComputedStyle(aINsidecard);
  let inOpacValue = inOpac.getPropertyValue("opacity");
  console.log("Hi" + inOpacValue);

  aFRONTcard.style.zIndex = '3'

  // Rest of your code...
});

// if (inOpacValue == '0') {
//   rRotateCard()
// } else {
//   // Reset the card when clicked again
//   rResetCard()
// }

// Reset the card when clicked again
let rResetCard = function resetCard(card) {
  card.style.transform = 'rotateY(0deg)';
  card.style.backgroundColor = 'wheat';
  card.style.opacity = '0';
  card.style.width = '35rem'
  card.style.zIndex = '1';
  card.style.visibility = 'hidden';

  let ftitleFront = document.querySelector(".content");
  ftitleFront.style.opacity = '100';

  let titleFront = document.querySelector(".insideContent");
  titleFront.style.opacity = '0';

  let insideCard = document.querySelector(".cardFront");
  insideCard.style.opacity = '1'
  insideCard.style.transform = 'rotateY(0deg)';
  insideCard.style.zIndex = '3';
  console.log("Reversed")
}

let rRotateCard = function rotateCard(card) {

  card.style.transform = 'rotateY(180deg)';
  card.style.backgroundColor = 'wheat';
  card.style.opacity = '0';
  card.style.zIndex = '1';

  let titleFront = document.querySelector(".content");
  titleFront.style.opacity = '0';

  let ftitleFront = document.querySelector(".insideContent");
  ftitleFront.style.opacity = '100';

  let insideCard = document.querySelector(".cardInside");
  insideCard.style.opacity = '100'
  insideCard.style.transform = 'rotateY(90deg)';
  insideCard.style.width = '70rem'
  insideCard.style.zIndex = '3';
  insideCard.style.visibility = 'visible';
  insideCard.style.backgroundColor = 'lightcoral';
  console.log("Forward")
}
