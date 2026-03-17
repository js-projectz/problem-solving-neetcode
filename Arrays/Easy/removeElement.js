/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    var count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
            console.log(nums);

        }
    }
    return count;

};


const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
