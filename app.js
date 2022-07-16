// Select HTML Elements
let sketchpad = document.querySelector(".sketchpad");
let squares = sketchpad.querySelectorAll("div");
let sketchpadSize = document.querySelector(".sketchpad-size");

const renderSketchpad = (size) => {
  squares.forEach((square) => square.remove());
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let totalSize = size * size;
  for (let i = 0; i < totalSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", changeColour);
    square.style.backgroundColor = "green";
    sketchpad.insertAdjacentElement("beforeend", square);
  }
};

const changeSize = (input) => {
  if (input > 1 && input < 100) {
    renderSketchpad(input);
  } else {
    alert("Size must be between 1 and 100");
    sketchpadSize.value = 16;
  }
};

function changeColour() {
  this.style.backgroundColor = "black";
}

renderSketchpad(16);
