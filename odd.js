//Take a parameter number and return true if it is odd and false otherwise


function isOdd(houseNum) {

if (houseNum % 2 === 0){
console.log("house is even");
return false;
}

else {
console.log("house is odd");
return true;
}
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

