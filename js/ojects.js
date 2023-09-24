//objects

const myObg = {
    name : "Shiran kumarasingha"
};

console.log(myObg.name);

/////////////////////////////////////////b  
const anotherObj  = {  
    alive : true,
    answer : 42,
    cars : ["bmw","benz","nissan"],
    bevrage : {
        morning : "Coffe",
        afternoon : "icee tea"
    },
    action : function(){
        return `Time for ${this.bevrage.morning}`;
    }
};

console.log(anotherObj.cars[0]);
console.log(anotherObj.action());

/////////////////////////////////////////////////////////////

const band  ={
    vocal : "Robert Planet",
    guitar : "john paul john",
    drumd :"john Bonham"
};

console.log(Object.keys(band));


for(let job in band){
    console.log(`on ${job}, it's ${band[job]}!`);
    console.log(job);
}

////////////////////////////////////////////////////////////

const vehical = {
    wheels: 4,
    engine: function(){
        return "broom";
    }
};

const truck = Object.create(vehical);

truck.doors = 2;
truck.tyres = 4;

console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());


const car = Object.create(vehical);

car.door = 4;
car.tyres = 5;
car.engine = function (){
    return "car sound";
};

console.log(car);
console.log(car.engine());
