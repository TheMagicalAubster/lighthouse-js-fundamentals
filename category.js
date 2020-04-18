

var eatsPlants = false;
var eatsAnimals = true;

//var category = herbivore ? "eatsPlants" : "eatsAnimals";
// category = carnivore ? "eatsAnimals" : "eatsPlants";
//var category = omnivore ? "eatsAnimals":"eatsPlants"



//console.log(category)

Solution:

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

var category = variableTest1?(variableTest2? "category1":"category2"):(variableTest2? "category3":"undefined")