// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
////////// A car DOM element that was clicked on.
////////// A color name of your choice (see behavior requirement 5 above).

var carInQueation = (function () {
  var userInput = document.getElementById("car-update");
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
})(CarLot || {});
