class Pizza{
    constructor(){
        this.size = "medium";
        this.crust = "original";
    }

    bake(){
        console.log(`Baking a ${this.size}  ${this.crust} crust pizza`); 
    }
}


class Pizza2{
    constructor(pizzaType , pizzaSize ){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "me";
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
         this.crust = pizzaCrust;
    }

    bake(){
        console.log(`Baking a ${this.size}  ${this.crust} crust pizza. pizza type is ${this.type}`); 
    }

}


const myPizza = new Pizza();
const myPizza2 = new Pizza2("Hot " , "medium");

//myPizza.bake();
myPizza2.setCrust("thim");
myPizza2.bake();
