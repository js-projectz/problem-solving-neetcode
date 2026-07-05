/**
 * Here the problem is to move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.
 */


var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0; // Pointer to track the position of the last non-zero element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap the current non-zero element with the element at lastNonZeroFoundAt
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++; // Move the pointer to the next position
        }
    }

    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));



