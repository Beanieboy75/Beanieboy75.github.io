$(document).ready(function () {
  // Your code goes here

function makeDot(top, left, _elementID) {
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(_elementID);
  }
  function rollDie(){
    $("#die").empty();
    const randomNum = Math.ceil(Math.random() * 6);
    console.log("Rolled:", randomNum);
    if (randomNum === 1) {
  makeDot(50, 50, "#die"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "#die"); // top left
  makeDot(75, 75, "#die"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "#die"); // top left
  makeDot(75, 75, "#die"); // bottom right
  makeDot(50, 50, "#die"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "#die"); // bottom right
  makeDot(25, 25, "#die"); // top left
  makeDot(25, 75, "#die"); // bottom left
  makeDot(75, 25, "#die"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "#die"); // middle middle
  makeDot(75, 75, "#die"); // bottom right
  makeDot(25, 25, "#die"); // top left
  makeDot(25, 75, "#die"); // bottom left
  makeDot(75, 25, "#die"); // top right
}

  else if (randomNum === 6) {
      makeDot(25, 25, "#die"); // Top left
      makeDot(25, 75, "#die"); // Top right
      makeDot(50, 25, "#die"); // Middle left
      makeDot(50, 75, "#die"); // Middle right
      makeDot(75, 25, "#die"); // Bottom left
      makeDot(75, 75, "#die"); // Bottom right
    }
  }
  $("#die").on("click", rollDie);
});
