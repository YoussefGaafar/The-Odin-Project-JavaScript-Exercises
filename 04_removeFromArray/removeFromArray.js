/**
 * Type Annotations.
 * @param {number[]} array - Input Array of Numbers
 * @returns {number[]} - The Function returns Array of numbers except the Removed Number
 */

// [1, 2, 3, 4], 3, 2)).toEqual([1, 4]

const removeFromArray = function () {
    let array = Array.from(arguments[0]);
    let nums = Array.from(arguments).slice(1); //Gets the rest of the Function Parameters and stores them in nums
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let check = false; //Checks if array[i] is in nums to be used as a flag, by default I consider the num is not in array.
        nums.forEach((num) => {
            if (array[i] === num) {
                check = true;
            }
        });
        if (check === false) {
            result.push(array[i]);
        }
    }
    return result;

    // return array.filter(val => !nums.includes(val)) //Advanced and Optimized Approach
}
// Do not edit below this line
module.exports = removeFromArray;
