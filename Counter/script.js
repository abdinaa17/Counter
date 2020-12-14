const span = document.getElementById("span");
const buttonUp = document.getElementById("button-up");
const buttonDown = document.getElementById("button-down");
let initial = 0;

buttonUp.addEventListener('click', () => {
  initial++;
  span.textContent = initial;

 
})

buttonDown.addEventListener('click', () => {
  initial--;
  span.textContent = initial;

 
})