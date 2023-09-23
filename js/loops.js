let myNumber = 0;

// while(myNumber < 50){
//     console.log(myNumber);
//     myNumber++;
// }

let name =  ['shiran','kumarasingha'];

do{
    console.log("i am shiran");
    myNumber ++;
}while(myNumber<60);

for(let i=1 ; i <=10 ; i ++){
    console.log(i);
   // i++;
}

for(let i=0 ; i <name.length ;){
    console.log(name[i]);
   i++;
}

let myName = "Shiran";
let counter = 0;
let myLetter;

while(true){
    myLetter = myName[counter];
    console.log(myLetter);
    counter++;
    if(myLetter === "n"){
        break;
    }
}

