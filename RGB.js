var numSquares = 6;
var colors = randomColorGenerate(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var squareButton = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1Background = document.getElementsByTagName("h1");
var resetColors = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

hardButton.addEventListener("click", () => {
  numSquares = 6;
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "block";
  }
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  colors = randomColorGenerate(numSquares);
  colorPicked = pickedColor();
  colorDisplay.textContent = colorPicked;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

easyButton.addEventListener("click", () => {
  numSquares = 3;
  easyButton.classList.add("selected");
  colors = randomColorGenerate(numSquares);
  colorPicked = pickedColor();
  colorDisplay.textContent = colorPicked;
  hardButton.classList.remove("selected");
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

resetColors.addEventListener("click", function() {
  colors = randomColorGenerate(numSquares);
  colorPicked = pickedColor();
  colorDisplay.textContent = colorPicked;
  resetColors.textContent = "New Colors";
  h1Background[0].style.background = "royalblue";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});
colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if (clickedColor === colorPicked) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1Background[0].style.background = clickedColor;
      resetColors.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function randomColorGenerate(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.unshift(randomColor());
  }

  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
