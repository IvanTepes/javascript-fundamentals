'use strict';

// console.log('');
// console.log('DEV TOOLS');

/* DEV TOOLS */
// ! PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, 'error'];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// calcTempAmplitude([3, 5, 8, 4, 2, 6, 45]);
// calcTempAmplitude(temperatures);

// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

// ! PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (temp1, temp2) {
//     const temps = temp1.concat(temp2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, [5, 6, 7, 8, 3, 5]);

// console.log(amplitudeNew);

// ! PROBLEM 3

// Function should return number of errors

// const calcTempAmplitude3 = function (temp1, temp2) {
//     const temps = temp1.concat(temp2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     let errors = [];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp === 'string') errors.push(curTemp);
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     // console.log(errors);
//     return max - min, errors.length;
// };

// const amplitude3 = calcTempAmplitude3(temperatures, [16, 6, 7, 8, 3, 5]);

// console.log(amplitude3);

// ! DEBUGGER
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: Number(prompt('Degrees celsius:')),
        value: 10,
    };

    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

// Using Debugger
const calcTempAmplitudeBug = function (temp1, temp2) {
    const temps = temp1.concat(temp2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
