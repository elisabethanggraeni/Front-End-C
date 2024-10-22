export const addNumber = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return The `sum is ${sum}`;
};

//addnumber
import { addNumber } from './addNumber.js';

console.log(addNumber(1, 2, 3, 4,5,6,7));

//calculatearea
import { calculateArea } from './calculateArea.js';

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//make a jax request
import { makeAjaxRequest } from './MakeAjaxRequest.js';

makeAjaxRequest('www.google.com');