//var 
//使用方法： var 變數名稱; 
//變數的Scope是以函式呈現

var x; //宣告變數
var y = 3; //宣告變數並指定資料

for (let k = 0; k < 10; k++){
    console.log(k);
}
console.log(k);  // 9

//let  ES6
//使用方法： let 變數名稱;
//變數的Scope會以程式區塊(大括號)為界線
let x; //宣告變數
let y = 3; //宣告變數並指定資料

for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);  //<-- Error 找不到 i

//const
//使用方法 const 常數名稱 = 常數資料;
    // const的變數為常數，常數的資料無法被更動
    const PI = 3.1415926; // 宣告常數PI，一定要指定資料