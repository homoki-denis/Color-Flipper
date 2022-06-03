const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container");
const btn = document.querySelector(".main-button");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[randomNumber()];
  }
  color.textContent = hexValue;
  color.style.color = hexValue;
  document.body.style.backgroundColor = hexValue;
});

function randomNumber() {
  return Math.trunc(Math.random() * hex.length);
}
