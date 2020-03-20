var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)"
];

var squares = document.querySelectorAll(".square");
var colorPicked = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = colors[3];

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
