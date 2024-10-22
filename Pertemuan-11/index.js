// String Literals, Arrow Function, Default Parameter   

// String Literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";

//Halo nama saya John Doe, umur saya 33 tahun dan saya
//tinggal di manado

kalimat = "Halo nama saya " + fullName + ", umur saya" + age + "dan saya tinggal di" + address + ".";
console.log(kalimat)

kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}`
console.log(kalimat2)

//Arrow Function

function sayGreetings(fullName){
    return `Hello ${fullName}`;
}

// Implict return value
const sayGreetings2 = (fullName) => `Hello $(fullName)`;

//arrow function pada IIFE 
let output1 = (() => `Hello`)();
console.log(output1)

//arrow pada callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);

//3. Default Parameter
const sayGreetings3 = (fullName) => {
    console.log(`Halo nama saya ${fullName}`);
};
sayGreetings();


