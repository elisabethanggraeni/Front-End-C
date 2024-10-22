//1. IIFE
let hasilBMI = (function(berat, tinggi) {
    return berat / (tinggi * tinggi);
})(43, 1.53);

console.log(hasilBMI);

//2. Callback
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

let berat = 43;
let tinggi = 1.53;

hitungBMI(berat, tinggi, function(bmi) {
    console.log(bmi);
});