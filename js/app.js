var app = {
  // Creation de la grille
  createGrid: function (dimension) {
    var invaderDivElement = document.querySelector("#invader");
    // On vide le contenu de la div avant la nouvelle saisie du user 
    invaderDivElement.textContent = '';
  
    for (var i = 0; i < dimension; i++) {
      var newLineElement = app.createLine(dimension);
      invaderDivElement.appendChild(newLineElement);
    }
  },

  // Creation des lignes
  createLine: function (dimension) {
    var lineElement = document.createElement("div");
    lineElement.classList.add("line");
  
    for (var i = 0; i < dimension; i++) {
      var newPixelElement = app.createPixel();
      lineElement.appendChild(newPixelElement);
    }
  
    return lineElement;
  },

  // Changement de la couleur d'arrière plan du pixel cliqué
  handlePixelClick: function (event) {
    var clickedPixel = event.target;
    clickedPixel.classList.toggle("pixel--dark");
  },

  // Création de pixels
  createPixel: function () {
    var pixelElement = document.createElement("div");
    pixelElement.classList.add("pixel");
  
    // Ajout d'un écouteur au clic sur les pixels
    pixelElement.addEventListener('click', app.handlePixelClick);
  
    return pixelElement;
  },
  // Ajout d'élements au formulaire
  fillForm : function () {
    var formElement = document.querySelector(".configuration");
    // Soumission du formulaire
    formElement.addEventListener('submit', app.handleFormSubmit);
  
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
  },
  // Récupération de la donnée et Soumission du formulaire
  handleFormSubmit: function (event) {
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
    app.createGrid(gridSize);
  },
  init: function() {
    app.fillForm();
    app.createGrid(8);
  }
}

app.init();
