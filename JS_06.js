// 類別繼承基本觀念
// 子類別：與父類別相同，加入額外的東西
// 類別繼承會使用到的關鍵字：extends, super

// 定義子類別
// 使用方法： class 子類別名稱 extends 父類別名稱 { }

// 建立子類別物件
// 使用方法： new 子類別名稱()

// 建立子類別建構式
// constructor() { //一定要先呼叫父類別建構式
//     super();  呼叫父類別建構式
// 子類別建構式中的其他程式碼
//}


// 注意事項： 子類別內宣告的方法與父類別相同名稱，會覆蓋掉父類別方法

// 實作1---------------------------------------------------------------

//定義一個類別
class Car {
    constructor() {
        console.log("執行父類別建構式，建立基本Car物件");
    }
}

// 定義子類別
class ElectricCar extends Car {
    constructor() {
        super(); //呼叫父類別建構式(Car)
        console.log("繼續執行子類別建構式，延伸出ElectricCar 物件");
    }
}

//產生子類別物件
let car = new ElectricCar();

// 實作2-----------------------------------------------------------------

// 定義一個類別
class Car {
    constructor(color) {
        this.color = color; // 定義 color 屬性在父類別中
    }
}

// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); //呼叫父類別建構式
    }
}

//產生子類別物件
let car = new ElectricCar("blue");
console.log("車子顏色：" + car.color);  //子類別物件同樣擁有父類別中定義的「屬性」

// 實作3-----------------------------------------------------------------

// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { // 定義 run 方法於父類別中
        console.log("Car " + this.color + "is Running.");
    }
}

// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); //呼叫父類別建構式
    }
}

//產生子類別物件
let car = new ElectricCar("blue");
car.run(); //子類別物件同樣擁有父類別中定義的「方法」

// 實作4-----------------------------------------------------------------

// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { // 定義 run 方法於父類別中
        console.log("Car " + this.color + "is Running.");
    }
}

// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); //呼叫父類別建構式
        this.battery = 100; //衍生更多子類別
    }
}

//產生子類別物件
let car = new ElectricCar("blue");
console.log("目前電量：" + car.battery); // 使用子類別中定義的「屬性」

// 實作5-----------------------------------------------------------------

// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { // 定義 run 方法於父類別中
        console.log("Car " + this.color + "is Running.");
    }
}

// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); //呼叫父類別建構式
        this.battery = 100; //衍生更多子類別
    }
    run(distance) { // 在子類別中定義 run 方法，覆蓋/取代父類別中的「同名方法」
        this.battery -= distance;
        console.log("Car " + this.color + " Runs " + distance + "KM");
    }
    charge() { // 子類別中定義專屬的「方法」
        this.battery = 100;
    }
}

//產生子類別物件
let car = new ElectricCar("blue");
car.run(10); // 使用子類別中定義的「方法」
car.charge(); // 使用子類別中定義的「方法」
console.log("目前電量：" + car.battery); // 使用子類別中定義的「屬性」  100