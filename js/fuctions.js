
//functions

function sum(){
    return 2+2;
}

function sum2(num1 , num2){

    if(num2 === "undefined"){
        return num1 + num1;
    }

    // console.log(num1);
  //  console.log(num2);
   return num1 + num2;
}

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}


function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(getUserNameFromEmail("Shirankumarasingha@gmail.com"));
console.log(toProperCase("ShIrAn"));