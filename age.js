//function called ageCalculator - takes someone's name as a string, yearOfBirth, and currentYear and returns a string of their current age. 


function ageCalculator(name, yearOfBirth, currentYear){
var age = currentYear - yearOfBirth;
console.log(age);
return name + " is "+ age +" years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
