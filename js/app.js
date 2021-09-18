// Creation de la grille
function createGrid(dimension) {
  var invaderDivElement = document.querySelector("#invader");

  for (var i = 0; i < dimension; i++) {
    var newLineElement = createLine(dimension);
    invaderDivElement.appendChild(newLineElement);
  }
}

// Creation des lignes
function createLine(dimension) {
  var lineElement = document.createElement("div");
  lineElement.classList.add("line");

  for (var i = 0; i < dimension; i++) {
    var newPixelElement = createPixel();
    lineElement.appendChild(newPixelElement);
  }

  return lineElement;
}

// Création de pixels
function createPixel() {
  var pixelElement = document.createElement("div");
  pixelElement.classList.add("pixel");

  return pixelElement;
}

createGrid(8);
