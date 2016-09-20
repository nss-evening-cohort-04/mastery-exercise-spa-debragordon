var CarLot = (function () {
  var carsToSell = [];
  var carGetter = new XMLHttpRequest();
  carGetter.open("GET", "inventory.json");
  carGetter.send();
  carGetter.addEventListener("load", getCarIventory);

  return getCarIventory;
})();

function getCarIventory () {
  var data = JSON.parse(this.responseText);
  carsToSell = data.cars;
  domWriter(carsToSell);
}

var carToDisplay = "";
var allCarOutput = document.getElementById("car-inventory");

function domWriter () {
  for (var i=0; i<carsToSell.length; i++){
    carToDisplay += `<div class='cars col-sm-4' id='car-display-${i}'><p>${carsToSell[i].year} ${carsToSell[i].make} ${carsToSell[i].model} </p>`;
    carToDisplay += `<p class="ticketPrice">$${carsToSell[i].price}</p>`;
    carToDisplay += `<img src='${carsToSell[i].png}' class='block smaller'>`;
    carToDisplay += `<p class="info"><span id="car-${i}">${carsToSell[i].description}</span></p></div>`;
  };
  allCarOutput.innerHTML = carToDisplay;
}