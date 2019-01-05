// Static Method(靜態方法)
// 靜態方法：與類別綁定的方法

// 定義靜態方法： static 方法名稱(參數列表){ 內部程式碼 }
// 呼叫靜態方法：類別名稱.方法名稱(參數資料)


// 範例

class Car {
    constructor(color) {
        this.color = color;
    }
    run(){
        console.log("Car " + this.color + " Running");
    }
    static showColors(){ // 定義靜態方法
console.log("We support three colors: blue, red, green.");
    }
}

// 直接使用類別名稱，呼叫靜態方法
Car.showColors(); 
Car.run();  // 錯誤方法，run 非靜態方法，需先產生新物件實體才能呼叫

// 產生新物件實體
let carObj = new Car("blue");
carObj.run(); // 使用物件實體呼叫物件方法 run();
carObj.showColors(); // 錯誤方法，showColors 為靜態方法，必須由類別名稱呼叫
