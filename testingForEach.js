//Learning how forEach() works - how does it pass values to arrays?


var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
console.log(donut);
} );


console.log(donuts);
