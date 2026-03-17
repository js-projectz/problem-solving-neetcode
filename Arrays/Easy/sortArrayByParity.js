/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    if (!nums) return [0];


    // two pointer approach
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        while (left < right && nums[left] % 2 === 0) left++;
        while (left < right && nums[right] % 2 === 1) right--;

        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++, right--;
    }

    return nums;

};


console.log(sortArrayByParity([3, 1, 2, 4]));