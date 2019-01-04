//Prototype Chain(原型鍊)
//原型物件：每個物件都有對應的原型物件

//取得原型物件
// 使用方法：Object.getPrototypeOf(物件)

//範例1-----------------------------------
class Car {
    constructor(color) {
        this.color = color;
    }
    run() {

    }
}

let car = new Car("blue");

let carProto = Object.getPrototypeOf(car); // Car 原型物件
console.log(carProto);
let objProto = Object.getPrototypeOf(carProto); // Object 原型物件
console.log(objProto);
let lastOneProto = Object.getPrototypeOf(objProto); // 原型鍊的終點 ： null
console.log(lastOneProto);

//範例2----------------------------------------

class Car { // 定義類別
    constructor(color) {
        this.color = color;
    }
    run() {

    }
}

class ElectricCar extends Car { // 定義子類別
    constructor(color) {
        super(color);
        this.battery = 100;
    }
}

let car = new ElectricCar("blue");
car.run();  // 會採用 Car的 run 方法
// 運作原理：電動車物件 → ElectricCar的原型物件(沒有run方法，所以往下) → Car的原型物件(裡面有run()) → Object的原型物件 → null
// 當不到最終會到達null

//範例3----------------------------------------

class Car { // 定義類別
    constructor(color) {
        this.color = color;
    }
    run() {

    }
}

class ElectricCar extends Car { // 定義子類別
    constructor(color) {
        super(color);
        this.battery = 100;
    }
    run(disatnce);
    charge(){}
}

let car = new ElectricCar("blue");
car.run(100);  // 會採用 ElectricCar 的 run 方法
//運作原理： 電動車物件 → ElectricCar的原型物件(裡面有run方法，會取代Car 的 run方法) → Car的原型物件 → Object的原型物件 → null
//------------------------------------------------------------------------

//範例4(在物件實體上，直接定義屬性或方法)----------------------------------------

class Car { // 定義類別
    constructor(color) {
        this.color = color;
    }
    run() {

    }
}

class ElectricCar extends Car { // 定義子類別
    constructor(color) {
        super(color);
        this.battery = 100;
    }
    run(disatnce);
    charge(){}
}

//產生子類別物件
let car = new ElectricCar("blue");
// 在物件實體上直接建立方法或屬性
car.name = "Bryant的車";
car.test = function(){
    console.log("建立物件後，在物件實體上新增方法");
    console.log(this.name); // 印出 Bryant的車
}
car.test();