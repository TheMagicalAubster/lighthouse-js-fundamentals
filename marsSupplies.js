//Made to create a function called howManyHundreds to send maple syrup to Mars.

function howManyHundreds(count){

var units = count / 100;
var numberLeft = 100 - count % 100;
var wholeUnits = parseInt(units);
console.log(wholeUnits + " cases of hundreds.");
console.log(numberLeft + " left to reach 100 for this case" );
return wholeUnits;

}

howManyHundreds(123554);


