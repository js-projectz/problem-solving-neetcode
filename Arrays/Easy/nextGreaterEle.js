/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const res = [];

    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let nextGreater = -1;

        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {

                console.log('compare two arrays', i, j);

                found = true; // Found nums1[i] in nums2
            }
            if (found && nums2[j] > nums1[i]) {
                console.log('compare arrays', nums2[j], nums1[i]);

                nextGreater = nums2[j];
                break;
            }
        }
        res.push(nextGreater);
    }

    return res;
};


const nums1 = [1, 3, 5, 2, 4];
const nums2 = [6, 5, 4, 3, 2, 1, 7];
console.log(nextGreaterElement(nums1, nums2));
