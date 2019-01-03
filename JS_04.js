//類別與物件的基本觀念
//類別→設計圖  物件→根據設計圖製造出來的實體
//一個「類別的設計」，可以用來產生無數個「物件實體」

//基本類別設計會使用的關鍵字：class , constructor
//產生物件實體會使用的關鍵字：new

//------------------------------------------------------------
//先定義類別再產生物件 

//定義類別
//使用方法：class 類別名稱{ }

class Car{}

//建立物件
//使用方法：new 類別名稱()

//利用已經定義好的類別，產生新物件
// new Car() 產生新物件，並放進變數 car1 中。
let car1 = new Car();
// new Car() 產生新物件，並放進變數 car2 中。
let car1 = new Car();

//----------------------------------------------------------------
//建構式(Constructor)：建立新物件時被呼叫的函式
//定義建構式
//使用方法：constructor(參數列表){ 建構式的內部程式 }

//實作
//定義一個類別
class Car{
    // 在類別中，定義建構式
    constructor(){
        console.log("建構式被呼叫");
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car(); // new Car() 呼叫建構式，產生新物件
let car2 = new Car(); // new Car() 呼叫建構式，產生新物件

// 備註：若沒特別寫，內建空白建構式  constructor(){ } 不會有特殊效果


//-----------------------------------------------------------------


//屬性(Attribute)：用來描述物件的個別差異
//在建構式中建立屬性
//使用方法： constructor(參數列表){ this.屬性名稱 = 初始資料; }

//實作1.
//定義一個類別
class Car{
    // 在類別中，定義建構式
    constructor(){
        this.color = "red"; //建立新屬性 color, 指定資料為 "red"，當成初始資料。
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car(); // 新物件擁有 color 屬性,資料為 "red"
let car2 = new Car(); // 新物件擁有 color 屬性,資料為 "red"


//實作2.
//定義一個類別
class Car{
    // 在類別中，定義建構式
    // 建立新屬性 color ，資料透過參數傳入
    constructor(color){
        this.color = color; 
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car("blue"); // 新物件擁有 color 屬性,資料為 "blue"
let car2 = new Car("black"); // 新物件擁有 color 屬性,資料為 "black"


//-------------------------------------------------------------
//存取物件屬性
//使用方法： 物件.屬性名稱  (取得)
//使用方法： 物件.屬性名稱 = 新的資料 (更新資料)

//實作1

class Car{
    constructor(color){
        this.color = color; 
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car("blue"); // 新物件擁有 color 屬性,資料為 "blue"
console.log(car1.color);    // 取得屬性資料，印出 "blue"
car1.color = "red";         // 更新屬性資料
console.log(car1.color);    // 取得屬性資料，印出 "red"
