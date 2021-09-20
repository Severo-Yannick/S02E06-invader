// Creation de la grille
function createGrid(dimension) {
  var invaderDivElement = document.querySelector("#invader");
  // On vide le contenu de la div avant la nouvelle saisie du user 
  invaderDivElement.textContent = '';

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

// Ajout d'élements au formulaire
function fillForm() {
  var formElement = document.querySelector(".configuration");
  // Soumission du formulaire
  formElement.addEventListener('submit', handleFormSubmit);

  var inputElement = document.createElement("input");
  inputElement.name = "gridSize";
  inputElement.type = "number";
  inputElement.placeholder = "Taille de la grille";
  inputElement.autofocus = true;
  inputElement.min = 0;
  inputElement.classList.add("configuration__input");

  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Valider";
  buttonElement.classList.add("configuration__button");

  formElement.appendChild(inputElement);
  formElement.appendChild(buttonElement);
}

// Récupération de la donnée et Soumission du formulaire
function handleFormSubmit(event) {
  event.preventDefault();
  // Recupèration du formulaire soumis
  var submitedFormElement = event.target;

  // Recupèration des sous-elements du formulaire (champs/boutons)
  var formInputsElements = submitedFormElement.elements;

  // Recupèration de l'élément contenant le champs gridSize
  var gridSizeInputElement = formInputsElements['gridSize'];

  // Recupèration la value entrée par l'utilisateur
  var gridSize = gridSizeInputElement.value;

  // Je passe en argument la taille de la grille à créer
  createGrid(gridSize);
}

function init() {
  fillForm();
}

init();
