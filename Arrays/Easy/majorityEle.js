/**
 * @param {number[]} nums
 * @return {number}
 * 
 * This soln pattern name is boyer-moore
 * voting alog 
 */
var majorityElement = function (nums) {

    let candidate = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            // Set the current number to the candidate
            candidate = nums[i];
        }

        // Other increase or decrease the count
        count += (nums[i] === candidate) ? 1 : -1;
        console.log('count', count);

    };

    return candidate;
};

const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr));

