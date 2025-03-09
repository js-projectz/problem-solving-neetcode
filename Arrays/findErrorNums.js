/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

    // validation
    if (!nums.length) return [];

    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                res = nums[i];
                break;
            }
        }
    };
    return [res, res + 1];
};

console.log(findErrorNums([1, 2, 2, 4]));
  
