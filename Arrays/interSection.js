/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    if (!nums1.length || !nums2.length) return [];

    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    console.log('num1', num1Set);
    console.log(num1Set[0]);

    console.log('num2', num2Set);


    const res = [];

    for (let num of num1Set) {
        if (num2Set.has(num)) {
            res.push(num);
        }
    };

    return res;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
