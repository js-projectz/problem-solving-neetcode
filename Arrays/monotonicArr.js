/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {

    // validation
    if (!nums.length) return false;


    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) { //  1 3 2
            isDecreasing = false;
        }
        else {
            isIncreasing = false;
        }
    }

    return isDecreasing || isIncreasing;

};

console.log(isMonotonic([1, 3, 2]));