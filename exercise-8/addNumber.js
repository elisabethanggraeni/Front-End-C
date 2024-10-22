export const addNumber = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return The `sum is ${sum}`;
};