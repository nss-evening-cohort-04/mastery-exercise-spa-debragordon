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
var carToDisplay = "";

function domWriter (discountedSeason) {
  var output = document.getElementById("storefront");
    for (var i=0; i<carsToSell.length; i++){
      carToDisplay += `<div class='cars col-sm-4' id='carDisplay'><p>${carsToSell[i].year} ${carsToSell[i].make} ${carsToSell[i].model} </p>`;
      carToDisplay += `<p class="ticketPrice">$${carsToSell[i].price}</p>`;
      carToDisplay += `<img src='${carsToSell[i].png}' class='block smaller'>`;
      carToDisplay += `<p class="info">${carsToSell[i].description}</p></div>`;
    };
    output.innerHTML = carToDisplay;
}

// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing. //////THIS NEEDS TO BE A CLICK EVENT LIKE IN THE FAMOUS PEOPLE EXERCISE///////

// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.

// When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.

// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments. ///// A car DOM element that was clicked on.
///// A color name of your choice (see behavior requirement 5 above).