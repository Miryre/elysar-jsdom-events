import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
// grab the button from the Dom
const btn = document.querySelector(".my-button");

// generate a sudo random number

function random(number) {
  return Math.floor(Math.random() * (number + 1))
}

btn.addEventListener("click", () => {
  const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = randomColor;
})
 
};
