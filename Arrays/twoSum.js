/**
 * Here the problems is to find the two 
 * numbers in the array whose sum is equal
 *  to the target.
 * 
 *  @author meganathan
 *  @param {number[]} nums
    @param {number} target
    @return {number[]}
 * 
 */

var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j];
            }
        }
    }

    return [];
};

const nums = [3, 4, 5, 6];
const target = 9;
console.log(twoSum(nums, target)); // [0, 3]
