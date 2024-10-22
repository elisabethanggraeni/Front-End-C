export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }, retirementAge = 60) => {
    const age = calculateAge(year);
    const retirement = retirementAge - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};