// Buatlah fungsi untik menghitung BMI (Body Mass Index)
// Rumus : BMI = berat / (tinggi * tinggi),
// berat badan dalam kg dan tinggi dalam meter 
// 170 cm =1.7 m 
// Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
// Dan mengmbalikanoutput berupa BMI 

function hitungBMI(berat,tinggi){
    let bmi = berat / (tinggi * tinggi );
    return bmi 
}

let berat = 43;
let tinggi = 1.53;

let hasilBMI = hitungBMI(berat, tinggi);

console.log(hasilBMI)


