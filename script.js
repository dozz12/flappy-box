const bird = document.getElementById("bird");
const pipeTop = document.getElementById("pipe-top");
const pipeBottom = document.getElementById("pipe-bottom");
const game = document.getElementById("game");

let birdY = 200;
let gravity = 2;
let jump = -30;
let velocity = 0;

let pipeX = 400;
let gap = 120;

function gameLoop() {
  velocity += gravity;
  birdY += velocity;
  bird.style.top = birdY + "px";

  pipeX -= 3;
  if (pipeX < -60) {
    pipeX = 400;
    let pipeHeight = Math.floor(Math.random() * 200) + 50;
    pipeTop.style.height = pipeHeight + "px";
    pipeBottom.style.height = (400 - pipeHeight - gap) + "px";
  }

  pipeTop.style.right = (400 - pipeX) + "px";
  pipeBottom.style.right = (400 - pipeX) + "px";

  // Game over detection
  if (
    birdY > 470 ||
    birdY < 0 ||
    (pipeX < 80 && pipeX > 20 && (
      birdY < parseInt(pipeTop.style.height) ||
      birdY + 30 > 500 - parseInt(pipeBottom.style.height)
    ))
  ) {
    alert("Game Over!");
    location.reload();
  }

  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", () => {
  velocity = jump;
});

gameLoop();
