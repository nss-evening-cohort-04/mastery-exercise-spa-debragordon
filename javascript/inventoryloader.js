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
})(CarLot || {});