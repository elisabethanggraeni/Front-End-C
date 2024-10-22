//Array & Object
// 1. Array
//deklarasi variable array

//cara 1. array literal
// let numbers = [1,2,3,4,5];
// console.log(numbers);

//cara 2. kata kunci new
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

//tipe data dalam array
// let numbers = [1,2,3,4,5]; //numbers
// let students = ["john", "jane", "Bobi"]; //string
// let john = ["John", 30, true, [80,90,100]]; //campuran
// console.log(john)

// //array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// // mengakses element tertentu dalam array
// // melalui index. index selalu dimulai dari 0
// console.log(numbers[2]); //3
// console.log(students[1]); //jane
// console.log(john[3]); // 80, 90, 100
// console.log(john[3][1]); //90

//mengakses element terakhir dalam array
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers[numbers.length -1]);

//array method
let array= [1,2,3, "halo", false, true];
console.log(array);
//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join(" "));
console.log(array.join("-"));
//3. pop()
array.pop();
console.log(array);
//4. push
array.push("selamat pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. Unshift()
array.unshift("selamat pagi");
console.log(array);
//7. splice(
array.splice(3,0,4,5);
console.log(array);
