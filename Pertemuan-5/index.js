//IIFE & Callback 
//1. IIFE (Immidiately Invoked Function Expression)

//no params
// (function () {
//     console.log("Hello World");
// }) ();

// //with params & args
// let output = (function (fullName){
//     return "Hello" + fullName

// })

// console.log(output);


//Callback Function
function sayHello(callback){
    callback();
}

function greetings(){
    console.log("Hello World");
}
sayHello(greetings());