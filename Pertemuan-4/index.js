//javascript function

// cara 1

// function greetings1() {
//     console.log("Hello World");
// }
//  greetings1() //call function
// //cara 2.

// let greetings2 = function(){
//     console.log("Hello World");
// }
// greetings2() //call function


// parameter dan argumen
//dengan input (parameter) dan output ()
function greetings1(fullName){
    return "Hello" + fullName;
}

let output = greetings1("John Doe");
//cara 2.

let greetings2 = function (fulName){
    return "Hello" + fullName;
}
let output2 = greetings2("John Doe");
console.log(output2);

// Global & Local Scope

let x = 10 ; //Global
function foo(){
    let y = 20;
    let z = 30;
    console.log(x); //10
    console.log(z); //20
    if (z > x ){
        let a = 40; //black scope
        console.log(a); //40
    }
    console.log(a);  //error
}
