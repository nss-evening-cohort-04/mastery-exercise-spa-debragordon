var CarLot = (function (newCarLot) {
  var userInput = document.getElementById("car-update");
  var carDescription;

  newCarLot.editCarDescription = function (userInput) {
    if (carDescription) {
     carDescription[0].innerHTML = userInput;
    } else {
      alert("please select the car you would like to edit.");
    }
  }

  newCarLot.eventRunners = function() {
    userInput.addEventListener("keyup", function() {
      CarLot.editCarDescription(userInput.value);
    });

    var carToDom = document.getElementsByClassName("cars");

    for (var i = 0; i < carToDom.length; i++) {
      carToDom.item(i).addEventListener("click", function carToEdit(e) {
        carDescription = $(e.currentTarget).find(".words");
        newCarLot.emphasize(e.currentTarget);
      });
    }
  }

  return newCarLot;

})(CarLot || {});