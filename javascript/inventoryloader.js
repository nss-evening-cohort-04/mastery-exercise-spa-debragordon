var CarLot = (function () {
  var carsToSell = [];

  return {
    getCarIventory: function () {
      var carGetter = new XMLHttpRequest();
      carGetter.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        carsToSell = data.cars;
        domWriter(carsToSell);
      });
      carGetter.open("GET", "inventory.json");
      carGetter.send();

    }
  }
})();

CarLot.getCarIventory();

var carToDisplay = "";
var allCarOutput = document.getElementById("car-inventory");

function domWriter (carData) {
  for (var i=0; i<carData.length; i++){
    carToDisplay += `<div class='cars col-sm-4' id='car-display-${i}'><p>${carData[i].year} ${carData[i].make} ${carData[i].model} </p>`;
    carToDisplay += `<p class="ticketPrice">$${carData[i].price}</p>`;
    carToDisplay += `<img src='${carData[i].png}' class='block smaller'>`;
    carToDisplay += `<p class="info"><span id="car-${i}">${carData[i].description}</span></p></div>`;
  };
  allCarOutput.innerHTML = carToDisplay;
}