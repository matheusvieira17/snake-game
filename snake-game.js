const canvas = document.querySelector("#snake");
const context = canvas.getContext("2d");
let box = 32;

function createBackground() {
  context.fillStyle = "#90ee90";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

createBackground();
