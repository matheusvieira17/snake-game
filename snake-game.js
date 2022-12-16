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
  if (snake[0].x > (15 * box) && direction == "right") {
    snake[0].x = 0;
  } else if (snake[0].x < 0 && direction == "left") {
    snake[0].x = (16 * box);
  } else if (snake[0].y > (15 * box) && direction == "down") {
    snake[0].y = 0;
  } else if (snake[0].y < 0 && direction == "up") {
    snake[0].y == (16 * box);
  }

  createBackground();
  createSnake();
  drawFood()

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

document.addEventListener("keydown", update);
function update(event) {
  if (event.keyCode === 37 && direction !== "right") {
    direction = "left";
  } else if (event.keyCode === 38 && direction !== "down") {
    direction = "up";
  } else if (event.keyCode === 39 && direction !== "left") {
    direction = "right";
  } else if (event.keyCode === 40 && direction !== "up") {
    direction = "down";
  }
}

let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

function drawFood() {
  context.fillStyle = "#d21f3c"
  context.fillRect(food.x, food.y, box, box)
}

let game = setInterval(startGame, 200);
