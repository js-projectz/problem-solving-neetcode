/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {


    // Validation
    if (!nums.length) return 0;
    let n = nums.length;

    const sortArr = nums.sort();

    for (let i = 0; i <= nums.length; i++) {
        // check if the number is in the range of o to n
        if (sortArr[i] !== i) {
            return i;
        }
    }

    return -1;
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
