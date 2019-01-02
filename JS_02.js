// 箭頭函式(Arrow Function)   ES6
//使用方法1： (參數列表)=>({)回傳值)

//傳統函式
let add = function (n1, n2) {
    return n1 + n2;
}
// or
function add(n1, n2) {
    return n1 + n2;
}

// 箭頭函式
let add = (n1, n2) => (n1 + n2);

//使用方法2：(參數列表)=>{函式內部程式}


//傳統函式
let add = function (n1, n2) {
    return n1 + n2;
}
// or
function add(n1, n2) {
    return n1 + n2;
}

// 箭頭函式
let add = (n1, n2) => {
    return n1 + n2;
}


//Example範例

//ex1.
let f=()=>(5);
let result=f();
//resulte變數中的資料是甚麼?
console.log(result);

//ex2.
let f=(message)=>{
    console.log(message);
};
//請問呼叫f函式之後的效果是?
f("Hello Arrow Function");

//-------------------------------------------------------
//匿名函式(Anonymous Function)

//在排程中使用「傳統方式」撰寫「匿名函式」
setTimeout(function(){    //一秒鐘之後執行此函式
    console.log('過了一秒鐘');
}, 1000);


//在排程中使用「箭頭函式」撰寫「匿名函式」
setTimeout(()=>{
    console.log('過了一秒鐘');
}, 1000);
