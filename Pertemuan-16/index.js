//Asynchronous JS

//synchronous -> single thread -> blocking
console.log("proses 1");
console.log("proses 2");
console.log("proses 3");
console.log("proses 4");

//Asynchronous JS
//1. Parallel
setTimeout (() => {
    console.log("proses 1");
}, 3000);
console.log("proses 2");
setTimeout (() => {
    console.log("proses 3");
}, 3000);
console.log("proses 4");

//2. Concurent
setTimeout (() => {
    console.log("proses 1");
    setTimeout (() => {
        console.log("proses 2");
        setTimeout (() => {
            console.log("proses 3");
            setTimeout (() => {
                console.log("proses 4");
            },3000);
        },3000);
    },3000);
},3000);


//Promise
let condition = true;
let newPromise= newPromise ((resolve, reject) => {
    if (condition){
        resolve ("berhasil");   
    } else {
        reject ("gagal");
    }
    
});

//Pakai Promise
//1. then - catch
newPromise
    .then  ((result)=> result)
    .then  ((result2)=> console.log(result2))
    .then  ((error)=> console.log(error));

//2. Async - await
 
const consumePromise = async () => {
    let result = newPromise;
    console.log(result);
};

consumePromise ();

//memakai promise yang sudah ada
//1. Fetch 
fetch("https://jsnoplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then ((json) => console.log(json));

(async())