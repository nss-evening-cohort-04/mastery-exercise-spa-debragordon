var CarLot = (function () {
  var userInput = document.getElementById("car-update");
  function editCarDescription (userInput) {
    document.getElementById(carDescription).innerHTML = userInput;
  }

  userInput.addEventListener("keyup", function() {
    editCarDescription(userInput.value);
  });
})(CarLot || {});