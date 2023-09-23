
// var , let and const

//gloabal scope

var y = 1;
let x = 2 ;
const z = 3;

//local scope

{
    let y = 4;
}

//local scope

function myFunction(){
    const z =5;
}

///global scope

var x1 =13;
var x2 =12;
var x3 =44;

console.log(`global :   ${x}`);
console.log(`global :   ${x2}`);
console.log(`global :   ${x3}`);

function myFun(){

    var x1 =13;
    var x2 =121;
    var x3 =442;

    console.log(`funtion :   ${x1}`);
    console.log(`funtion :   ${x2}`);
    console.log(`function :   ${x3}`);
{
    var x1 =1;
    var x2 =2;
    var x3 =4;

    console.log(`block :   ${x1}`);
    console.log(`block :   ${x2}`);
    console.log(`block :   ${x3}`);   
    
}
}

myFun();
