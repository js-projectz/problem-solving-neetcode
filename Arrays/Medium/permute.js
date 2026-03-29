/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    if (!nums.length) return [];

    let res = [];

    const backtrack = (arr) => {
        if (arr.length === nums.length) {
            res.push(arr.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (arr.includes(nums[i])) continue;
            arr.push(nums[i]);
            backtrack(arr);
            arr.pop();
        }
    }

    backtrack([]);
    return res;
};
console.log(permute([1, 2, 3]));