function pizzaOven(style, type, cheese, toppings) {
    var pizza = {};
    pizza.style = style;
    pizza.type = type;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

function pizzaRandom() {
    var pizza = {};
    var styles = ["deep dish","hand tossed","traditional","thin","New York"];
    var types = ["traditional","marinara"];
    var cheeses = ["cheddar","mozzarella","parmesan"];
    var toppings = ["onion","olives","mushrooms","sausage","beef","diced tomatoes","green bell pepper"];

    pizza.style = styles[Math.floor(Math.random()*styles.length)];
    pizza.type = types[[Math.floor(Math.random()*types.length)]];
    pizza.cheese = cheeses[[Math.floor(Math.random()*cheeses.length)]];
    pizza.topping = [toppings[Math.floor(Math.random()*toppings.length)],toppings[Math.floor(Math.random()*toppings.length)],toppings[Math.floor(Math.random()*toppings.length)]];
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "New York", ["cheddar", "mozzarella"], ["onion", "green bell pepper", "sausage"]);
var pizza4 = pizzaOven("cheese stuffed crust", "", ["parmesan", "cheddar"], ["japapenos", "meatballs", "onion"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizzaRandom())