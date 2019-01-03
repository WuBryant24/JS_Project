//在類別中定義、呼叫方法(Method)
//方法：用來描述物件可以做的事


// 定義 物件方法
// 使用方法： 方法名稱(參數列表){ 內部的程式碼 }

//實作
// 定義一個類別
class Car {
    constructor(color) { // 定義建構式
        this.color = color;
    }
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性 與 run 方法
let car1 = new Car("blue");
//----------------------------------------------------------------------------

// 呼叫 物件方法
// 使用方法： 物件.方法名稱(參數資料)

//實作
// 定義一個類別
class Car {
    constructor(color) { this.color = color; } // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性 與 run 方法
let car1 = new Car("blue");
car1.run(); // 呼叫 run 方法，執行 run 內部的程式，印出 "Running"

//----------------------------------------------------------------------------

//物件方法中使用 this 代表 綁定物件

//實作
// 定義一個類別
class Car {
    constructor(color) { this.color = color; } // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Car " + this.color + "Running");  //this代表car1 物件
    }
}
// 產生新物件，物件擁有 color 屬性 與 run 方法
let car1 = new Car("blue");
car1.run(); // 印出 "Car blue Running"

//----------------------------------------------------------------------------

//物件屬性、方法的綜合操作

class Car { // 定義一個類別
    constructor(color) {
        this.color = color;
        this.speed = 0; // 車子的初始速度固定為 0
    }
    run(speed) {
        this.speed = speed; // 更新車子的速度
        console.log("Car " + this.color + " Running at " + this.speed + "  KM/HR");
    }
    stop() {
this.speed = 0; //更新車子的速度
console.log("Car " + this.color + " Stopped");
    }
}
// 產生新物件，物件擁有 color ， speed 屬性 與 run ， stop 方法
let car1 = new Car("blue");
car1.run(50); // 印出 "Car blue Running at 50 KM/HR"
car1.stop();  // 印出 "Car blue Stopped"