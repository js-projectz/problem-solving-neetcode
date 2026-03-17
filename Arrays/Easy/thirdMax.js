/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {


    // Validation
    if (!nums.length) return 0;

    // Return the third max distinct number
    let distinct = [...new Set(nums)].sort((a, b) => b - a);
    if (distinct.length < 3) return distinct[0];

    return distinct[2];
};