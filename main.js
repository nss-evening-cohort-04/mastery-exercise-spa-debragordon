var carsToSell = [];

var carGetter = new XMLHttpRequest();
carGetter.open("GET", "inventory.json");
carGetter.send();
carGetter.addEventListener("load", function () {
  var data = JSON.parse(this.responseText);
  carsToSell = data.cars;
  domWriter();
});

var originalPrice = [];

function domWriter (discountedSeason) {
  var output = document.getElementById("storefront");

  var carsToDisplay = "";
    for (var i=0; i<carsToSell.length; i++){
      carsToDisplay += `<div class='cars'><p>${carsToSell[i].year} ${carsToSell[i].make} ${carsToSell[i].model} </p>`;
      carsToDisplay += `<p class="ticketPrice">$${carsToSell[i].price}</p>`;
      carsToDisplay += `<img src='${carsToSell[i].png}' class='block smaller'>`;
      carsToDisplay += `<p class="info">${carsToSell[i].description}</p></div>`;
    };
    output.innerHTML = carsToDisplay;
}