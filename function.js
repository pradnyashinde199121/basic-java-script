function msg(){
    console.log("hello this id function");
}
msg();

function msga(number){
    console.log(number*number+number);
}
msga(10);

function msgar(){
    return"hello this return function";
    return "num=100"
}
console.log(msgar());

var add=new Function("num1","num2","return num1+num2");
console.log(add(10,20));