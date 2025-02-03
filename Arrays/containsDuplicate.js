/**
 * Here the problem is to find the
 * duplicate in nums array and if there
 * retrue or false
 * 
 * @author Meganathan
 * 
 */

const nums = [1, 2, 3, 3];

class Solution {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    static hasDuplicate(nums) {

        if (!nums.length) {
            return false;
        }

        const setNums = new Set(nums);

        return setNums.size !== nums.length;
    }
}
console.log(Solution.hasDuplicate(nums));
