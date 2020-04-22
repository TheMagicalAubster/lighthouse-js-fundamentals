const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


function finalPosition (moves) {
  let i = 0;
  var x = 0;
  var y = 0;
  var position = [];

for (i of moves){

if (i === 'north'){
y = y+1;

}
else if ( i === 'south'){
y = y-1;

}
else if ( i === 'west'){
x = x-1;

}
else {
x = x+1;
}
}
position.push(x,y);
return position;
}

console.log(finalPosition(moves));
