var carToDisplay = "";
var allCarOutput = document.getElementById("car-inventory");

function domWriter (carData) {
  for (var i=0; i<carData.length; i++){
    carToDisplay += `<div class='cars col-sm-4' id='car-display-${i}'><p>${carData[i].year} ${carData[i].make} ${carData[i].model} </p>`;
    carToDisplay += `<p class="ticketPrice">$${carData[i].price}</p>`;
    carToDisplay += `<img src='${carData[i].png}' class='block smaller'>`;
    carToDisplay += `<p class="info"><span id="car-${i}" class="words">${carData[i].description}</span></p></div>`;
  };
  allCarOutput.innerHTML = carToDisplay;
  CarLot.eventRunners();
}

CarLot.getCarIventory();
