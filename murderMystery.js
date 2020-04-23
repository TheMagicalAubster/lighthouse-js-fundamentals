

//Matching the room, the weapon, and the person

var room = "billairds"; // other options include "ballroom" "gallery" "dining room"
var suspect = "Mrs. Sparr"; // other options include "Mr. Kalehoff" "Ms. Van Cleve" " Mr. Parkes"

var weapon = "pool stick"; //other options include "poison" "trophy" "knife"
var solved = false; //assuming that unless solved for sure, it is not solved

//the code below only evaluates as true when all three variables line up correctly

if (room === "billiards" && suspect === "Mrs. Sparr" && "pool stick"){
	solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff" && "poison"){
	solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve" && "trophy"){
	solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes" && "knife"){
	solved = true;
}

console.log(solved);


