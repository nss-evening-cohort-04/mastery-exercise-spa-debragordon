var CarLot = (function (newCarLot) {
  var userInput = document.getElementById("car-update");
  newCarLot.editCarDescription = function (userInput) {
    document.getElementById(carDescription).innerHTML = userInput;
  }

  userInput.addEventListener("keyup", function() {
    CarLot.editCarDescription(userInput.value);
  });
  return newCarLot;

})(CarLot || {});