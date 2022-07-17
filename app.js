// Global variables
let colour = "black";
let click = true;

// Select HTML Elements
let sketchpad = document.querySelector(".sketchpad");
let squares = sketchpad.querySelectorAll("div");
let sketchpadSize = document.querySelector(".sketchpad-size");
let body = document.querySelector("body");
let mode = document.querySelector(".mode");

const renderSketchpad = (size) => {
  squares.forEach((square) => square.remove());
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let totalSize = size * size;
  for (let i = 0; i < totalSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", changeColour);
    square.style.backgroundColor = "white";
    sketchpad.insertAdjacentElement("beforeend", square);
  }
};

// Change size of the board
const changeSize = (input) => {
  if (input > 1 && input < 100) {
    renderSketchpad(input);
  } else {
    alert("Size must be between 1 and 100");
    sketchpadSize.value = 16;
  }
};

// Change colour
function changeColour() {
  if (click) {
    if (colour === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = colour;
    }
  }
}

// Select colour
const selectColour = (input) => {
  if (!input) {
    colour = "black";
  } else {
    colour = input;
  }
};

// Reset sketchpad
function resetSketchpad() {
  let squares = sketchpad.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// Click to sketch
body.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      mode.textContent = "Sketch Mode";
      mode.classList.remove("red");
      mode.classList.add("green");
    } else {
      mode.textContent = "Not In Sketch Mode";
      mode.classList.remove("green");
      mode.classList.add("red");
    }
  }
});

renderSketchpad(16);
