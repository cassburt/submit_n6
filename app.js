var cartOne = {           // Object: Salmon cookie cart
  loc: "Pioneer Square",  // Location of cart
  hours:  8,              // # of hours the cart is open
  minCus: 17,             // Min # of customers per hour
  maxCus: 88,             // Max # of customers per hour
  avSale: 5.2,            // Av # of cookies per sale
  cPh:  0,                // Cookies per hour
  sales: [],              // Array for cart sales
  operation: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "],
  cusGen: function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartTwo = {            // Object: Salmon cookie cart
  loc: "Portland Airport", // Location of cart
  hours:  8,               // # of hours the cart is open
  minCus: 6,               // Min # of customers per hour
  maxCus: 24,              // Max # of customers per hour
  avSale: 1.2,             // Av # of cookies per sale
  sales: [],               // Array for cart sales
  operation: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "],
  cusGen: function() {     // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartThree = {            // Object: Salmon cookie cart
  loc: "Washington Square",  // Location of cart
  hours:   8,                // # of hours the cart is open
  minCus: 11,               // Min # of customers per hour
  maxCus: 38,               // Max # of customers per hour
  avSale: 1.9,              // Av # of cookies per sale
  sales: [],                // Array for cart sales
  operation: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "],
  cusGen: function() {      // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartFour = {           // Object: Salmon cookie cart
  loc: "Sellwood",         // Location of cart
  hours:  8,              // # of hours the cart is open
  minCus: 20,             // Min # of customers per hour
  maxCus: 48,             // Max # of customers per hour
  avSale: 3.3,            // Av # of cookies per sale
  sales: [],              // Array for cart sales
  operation: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "],
  cusGen: function() {    // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

var cartFive = {           // Object: Salmon cookie cart
  loc: "Pearl District",   // Location of cart
  hours:   8,              // # of hours the cart is open
  minCus:  3,              // Min # of customers per hour
  maxCus: 24,              // Max # of customers per hour
  avSale: 2.6,             // Av # of cookies per sale
  sales: [],               // Array for cart sales
  operation: ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "],
  cusGen: function() {     // Random # of customers based on cart max/min
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;
  }
};

function coCo(cart) {  //Calcs an array of cookies per hour
  for (var i = 0; i < cart.hours; i++) {
    var cPh = Math.round(cart.cusGen() * cart.avSale);
    cart.sales.push (cPh);
  }
};

function shSa(cart, listID) {  //Function: Shows sales as unordered list
  var perHour = "";
  for (var saleIndex = 0; saleIndex < cart.sales.length; saleIndex++) {
    perHour += "<li>" + cart.operation[saleIndex] + cart.sales[saleIndex] + " cookies" + "</li>";
  }
  var sum = cart.sales.reduce(function(pv, cv) { return pv + cv; }, 0);
  document.getElementById(listID).innerHTML = perHour + "Total: " + sum + " cookies";
};

window.onload = function() { //note: turn these into for loops
  coCo(cartOne);
  coCo(cartTwo);
  coCo(cartThree);
  coCo(cartFour);
  coCo(cartFive);
  shSa(cartOne, id="cartOne");
  shSa(cartTwo, id="cartTwo");
  shSa(cartThree, id="cartThree");
  shSa(cartFour, id="cartFour");
  shSa(cartFive, id="cartFive");
};
