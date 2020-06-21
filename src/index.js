'use strict';

/**
 * A function that takes in a base and a power and raises the base to the power of power
 * @param {number} base The base number
 * @param {number} power The exponent number
 * @returns {number} Base raised to the power of power
 */
function exp(base, power) {
    if (power === 0) return 1; // Check for simple base cases
    if (base === 0) return 0;
    let returnValue = 1;
    if (power > 0) {
        while (power > 0) {
            returnValue *= base;
            power--;
        }
        return returnValue;
    } else {
        while (power < 0) {
            returnValue *= base;
            power++;
        }
        return 1/returnValue;
    }
}

/**
 * Takes in an array and returns a copy, but in reverse order
 * @param {any[]} array And array of any type of variables
 * @returns {any[]} The copy of the array
 */
function copyAndReverse(array) {
    let arrayCopy = [];
    for (let item of array) arrayCopy.unshift(item);
    return arrayCopy;
}

/**
 * Takes in an array and reverses the order of items in place
 * @param {any[]} array And array of any type of variables
 */
function reverse(array) {
    for (let i=0; i<array.length/2; i++) {
        let temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
}

module.exports = {
    exp,
    copyAndReverse,
    reverse
};