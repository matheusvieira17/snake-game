const canvas = document.querySelector("#snake");
const context = canvas.getContext("2d");
let box = 32;

function createBackground() {
  context.fillStyle = "#90ee90";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

createBackground();

let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function createSnake() {
  for (let counter = 0; counter < snake.length; counter++) {
    context.fillStyle = "#2d572c";
    context.fillRect(snake[counter].x, snake[counter].y, box, box);
  }
}

createSnake();

let direction = "right";

function startGame() {
  createBackground();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  switch (direction) {
    case "right":
      snakeX += box;
      break;
    case "left":
      snakeX -= box;
      break;
    case "up":
      snakeY -= box;
      break;
    case "down":
      snakeY = snakeY + box;
    default:
      break;
  }

  snake.pop();

  let newSnakeHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newSnakeHead);
}

let game = setInterval(startGame, 200);
