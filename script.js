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



const text = "I love you so much baby, you are so many things I wish I was. I know where your mind is going when you hear that, but it's the truth. I want you to take in all of the things you have accomplished in your 30 years on this Earth. (thats also why I made this typewriter effect so you cant skim read)      Baby... YOU beat Cancer, YOU reached the highest level in a martial art, YOU worked your way to the senior position of peretty much any place that gives you an opening to do so! YOU ARE AMAZING! YOU have provided so much for our family. YOU built the house we are living in and growing up in together. YOU gave birth to the most amazing most BEAUTIFUL little girl the worl will ever know. YOU are an absolute gift from heaven, and for me to have you in my life I will never be worthy. I will try everyday to reach that point of worthiness. I LOVE YOU so much Jen Atwood. My wife, My lover, and My Best Friend... Yours Forever Babe";
const element = document.getElementById("typeEffect");
let index = 0;

function typeText() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 60); // Adjust the timeout to control typing speed
  }
}

// typeText();


