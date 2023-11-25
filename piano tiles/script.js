// Selecting DOM elements
const start = document.querySelector(".start");
const inst = document.querySelector(".inst");
const logo = document.querySelector(".logo");
const gamename = document.querySelector(".game-name");
const namebox = document.querySelector(".name-box");
const game = document.querySelector("#game");
const sco = document.getElementById("score");
const audio = document.getElementById("audio");
const ply = document.getElementById("play");
const out = document.getElementById("out");
const results = document.getElementById("result");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");
const text = result_box.querySelector(".score_text");
let a;
let tos = 2400;

// Variables for game state
var count = 1;
var score = 0;
var step = 0;
var mar = randomMargin(), mar2;

// Display a congratulatory message with the player's name if available in local storage
let playerName = localStorage.getItem("playerName");
if (playerName) {
  result_box.querySelector(".complete_text").innerText =
    "Congratulations, " + playerName + "! You've completed The Game!";
}

// Function to display the game completion result
function viewResult() {
  const playerName = localStorage.getItem("playerName");
  const completeText = result_box.querySelector(".complete_text");

  if (playerName) {
    completeText.innerText = `Congratulations, ${playerName}! You've completed The Game!`;
  } else {
    completeText.innerText = "You've completed The Game!";
  }

  game.style.display = "none";
  results.play();
  result_box.classList.add("activeResult");
  text.innerText = "You've scored " + score + " points";
}

// Restart the game and reset scores
restart.onclick = () => {
  start.style.display = "block";
  namebox.style.display = "block";
  gamename.style.display = "block";
  logo.style.display = "block";
  inst.style.display = "block";
  window.location.reload();
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio.currentTime = 0;
};

// Play audio and restart when it ends
function startAudio() {
  audio.play();
}
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});

// Function to set the speed of falling elements based on the player's score
function speed(e) {
  a = setInterval(appendDiv, e);
}

// Reset boolean variables for controlling speed adjustments
function reset() {
  bool1 = bool2 = bool3 = bool4 = true;
}

// End the game and show results
function outs() {
  audio.pause();
  out.play();
  setTimeout(viewResult, 1000);
}

// Function to create and style falling elements
function appendDiv() {
  var ob = document.createElement("div");

  do {
    mar2 = randomMargin();
  } while (mar == mar2) { mar = mar2 }

  ob.style.marginLeft = mar2 + "%";
  setTimeout(moveDown, 100, ob);
  ob.onclick = () => {
    ob.style.background = "rgba(0,0,0,0.2)";
    updateScore();
  }
  if (score >= 140 && score < 150) step = 1;
  else if (score >= 150 && score < 400) step = 2;
  else if (score >= 400 && score < 800) step = 3;
  else if (score >= 800) step = 4;
  document.getElementById("tiles").prepend(ob);
}

// Function to generate a random margin for falling elements
function randomMargin() { return 25 * Math.floor(Math.random() * 4) }

// Function to move the falling elements down the screen
function moveDown(e) {
  e.classList.add("move");
  if (step == 1) {
    e.classList.add("speedX1");
    if (bool1 == true) {
      clearInterval(a);
      speed(300);
      reset();
      bool1 = false;
      tos = 500;
    }
  }
  else if (step == 2) {
    e.classList.add("speedX2");
    if (bool2 == true) {
      clearInterval(a);
      speed(250);
      reset();
      bool2 = false;
      tos = 1600;
    }
  }
  else if (step == 3) {
    e.classList.add("speedX3");
    if (bool3 == true) {
      clearInterval(a);
      speed(200);
      reset();
      bool3 = false;
      tos = 1200;
    }
  } else if (step == 4) {
    e.classList.add("speedX4");
    if (bool4 == true) {
      clearInterval(a);
      speed(160);
      reset();
      bool4 = false;
      tos = 1000;
    }
  }
  setTimeout(removeDiv, tos, e)
}

// Function to update the player's score
function updateScore() {
  score++;
  sco.innerText = score;
}

// Function to remove falling elements and end the game if not clicked
function removeDiv(e) {
  var bg = e.style.background;
  if (bg == "") {
    clearInterval(a);
    outs();
  }
  e.remove()
}

// Event listener for starting the game
start.querySelector("button").onclick = () => {
  const playerNameInput = document.querySelector(".om");
  const playerName = playerNameInput.value;
  localStorage.setItem("playerName", playerName);

  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  namebox.style.display = "none";
  inst.style.display = "none";
  gamename.style.display = "none";
  logo.style.display = "none";

  score = 0;
  speed(400);
  setTimeout(startAudio, 1000);
};
