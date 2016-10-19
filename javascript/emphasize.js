var CarLot = (function (newCarLot) {
  var userInput = document.getElementById("car-update");
  var carToDom = document.getElementsByClassName("cars");

  newCarLot.emphasize = function(currentCar) {
    for (var i = 0; i < carToDom.length; i++) {
      if (carToDom.item(i).classList.contains("selected")) {
        carToDom.item(i).classList.remove("selected");
      }
    }
    currentCar.classList.add("selected");
    // carDescription = this.id.replace("display-", "");
    userInput.focus();
    userInput.value = '';
  }

  return newCarLot;

})(CarLot || {});
