//1
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }, retirementAge = 60) => {
    const age = calculateAge(year);
    const retirement = retirementAge - age;

    if (retirement > 0) {
        // Perbaikan pada line 9 dan 11: Menggunakan backticks untuk template literal
        console.log(${firstName} retires in ${retirement} years);
    } else {
        console.log(${firstName} is already retired.);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

//2
const addNumber = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    // Perbaikan pada line 20: Menggunakan backticks untuk template literal
    return The sum is ${sum};
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3
const phi = 3.14;

const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

// Perbaikan pada line 36: Menggunakan backticks untuk template literal
console.log(Area with 21 radius: ${area21}, and area with 7 radius: ${area7});

//4
const makeAjaxRequest = (url, method = 'GET') => {
    // Perbaikan pada line 40: Menggunakan backticks untuk template literal
    console.log(Requesting ${url} with method ${method});
};

makeAjaxRequest('www.google.com');
