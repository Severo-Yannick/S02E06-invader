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

// Changement de la couleur d'arrière plan du pixel cliqué
function handlePixelClick(event) {
  var clickedPixel = event.target;
  clickedPixel.classList.toggle("pixel--dark");
}

// Création de pixels
function createPixel() {
  var pixelElement = document.createElement("div");
  pixelElement.classList.add("pixel");

  // Ajout d'un écouteur au clic sur les pixels
  pixelElement.addEventListener('click', handlePixelClick);

  return pixelElement;
}

// Ajout d'élement au formulaire
function fillForm() {
  var formElement = document.querySelector(".configuration");

  var inputElement = document.createElement("input");
  inputElement.name = "gridSize";
  inputElement.type = "number";
  inputElement.placeholder = "Taille de la grille";
  inputElement.classList.add("configuration__input");

  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Valider";
  buttonElement.classList.add("configuration__button");

  formElement.appendChild(inputElement);
  formElement.appendChild(buttonElement);
}

function init() {
  fillForm();
  createGrid(8);
}

init();
