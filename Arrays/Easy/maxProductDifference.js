/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {

    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);

    console.log(nums);


    return Math.abs((nums[0] * nums[1]) - (nums[nums.length - 1] * nums[nums.length - 2]));

};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
