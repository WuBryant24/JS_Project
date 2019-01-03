//參數的預設值 (Default Parameter)

//傳統函式參數預設值
function show(message){
    if(typeof message === "undefined"){  //未給定 message 資料
        message = "預設值";
    }
    alert(message);
};

show("Hello");  // Hello
show();         // 預設值
//-------------------------------------------------------------------------
// ES6
//(name1 = 預設值, name2 = 預設值)
//若未給定 message 資料，直接採用 = 後方指定的資料
function show(message="預設值"){
    alert(message);
};

show("Hello");  // Hello
show();         // 預設值

// 箭頭函式
let show=(message = "預設值")=>{
    alert(message);
};
show("Hello"); // Hello
show();        //預設值

//Example範例

//ex1.

// 一般函式
function multiply(n1, n2=1){
    return n1*n2;
}
multiply(3, 4); //12
multiply(5);    //5 

// 箭頭函式
let multiply= (n1, n2=1)=>(n1*n2);
multiply(3, 4); //12
multiply(5);    //5 

//ex2.
//後面參數可使用前面參數名稱
function combine(first = "Kobe", last = "Bryant", name = first+" "+last){
    alert(name);
}

combine("Diane", "Liu"); //Diane Liu
combine("Kevin");        //Kevin Bryant
combine();               //Kobe Bryant
