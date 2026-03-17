/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {

    let ans1 = new Set(nums1);

    nums2.forEach(val => ans1.delete(val));

    let ans2 = new Set(nums2);

    nums1.forEach(val => ans2.delete(val));

    return [[...ans1], [...ans2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
