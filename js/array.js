

// Arrays 
const myArary = [];

//add element to an erra

myArary[0] = "Dave";
myArary[1] = 1001;
myArary[2] = false;

//refer to an array

console.log(myArary);

//length property

console.log(myArary.length);

//last element of the array

console.log(myArary[myArary.length -1 ]);

myArary.push("School");

console.log(myArary);

const lastItem = myArary.pop();

console.log(lastItem);




// ---------------


const sport1 = ["cricket" , "football" , "volley ball"];
const sport2= ["long jump" , "run" , "hgh jump"];

const clothes1 = ["tank top" , "t shirt" , "jersey"];
const clothes2 = ["sweet top" , "sweat pants" , "hoodles"];


const eqisport  = [sport1,sport2];
const eqiclothes = [clothes1 , clothes2];

console.log(eqisport[0][1]);
