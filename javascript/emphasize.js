var carInQuestion = (function () {
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
