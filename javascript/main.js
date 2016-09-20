var carsToSell = [];
var originalPrice = [];

var userInput = document.getElementById("car-update");
var carDescription = '';

var carToDisplay = "";
var allCarOutput = document.getElementById("car-inventory");
var carGetter = new XMLHttpRequest();
carGetter.open("GET", "inventory.json");
carGetter.send();
carGetter.addEventListener("load", function () {
  var data = JSON.parse(this.responseText);
  carsToSell = data.cars;
  domWriter();
});

function domWriter () {
  for (var i=0; i<carsToSell.length; i++){
    carToDisplay += `<div class='cars col-sm-4' id='car-display-${i}'><p>${carsToSell[i].year} ${carsToSell[i].make} ${carsToSell[i].model} </p>`;
    carToDisplay += `<p class="ticketPrice">$${carsToSell[i].price}</p>`;
    carToDisplay += `<img src='${carsToSell[i].png}' class='block smaller'>`;
    carToDisplay += `<p class="info"><span id="car-${i}">${carsToSell[i].description}</span></p></div>`;
  };
  allCarOutput.innerHTML = carToDisplay;

  var carToDom = document.getElementsByClassName("cars");

  for (var i = 0; i < carToDom.length; i++) {
    carToDom.item(i).addEventListener("click", function carToEdit() {
      for (var i = 0; i < carToDom.length; i++) {
        if (carToDom.item(i).classList.contains("selected")) {
          carToDom.item(i).classList.remove("selected");
        }
      }
      var currentCar = document.getElementById(this.id);
      currentCar.classList.add("selected");
      carDescription = this.id.replace("display-", "");
      userInput.focus();
      userInput.value = '';
    });
  }
}

function editCarDescription (userInput) {
  document.getElementById(carDescription).innerHTML = userInput;
}

userInput.addEventListener("keyup", function() {
  editCarDescription(userInput.value);
});









