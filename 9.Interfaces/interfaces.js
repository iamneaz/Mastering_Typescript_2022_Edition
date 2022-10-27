"use strict";
exports.__esModule = true;
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
