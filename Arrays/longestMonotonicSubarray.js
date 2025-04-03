/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {

    let n = nums.length;
    let inc = new Array(n).fill(1);
    let dec = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] >= nums[i - 1]) inc[i] = inc[i - 1] + 1;
        if (nums[i] <= nums[i - 1]) dec[i] = dec[i - 1] + 1;
    }
    let res = 0;
    for (let i = 0; i < n; i++) res = Math.max(res, inc[i], dec[i]);
    return res;
};

console.log(longestMonotonicSubarray());
