/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    if (nums.length === 0) return 0;

    let totalSum = nums.reduce((a, b) => a + b, 0);
    var leftSum = 0;


    for (let i = 0; i < nums.length; i++) {

        var rightSum = totalSum - (leftSum + nums[i]); // 6 - 1 - 2 = 3
        // console.log('right-sum', rightSum);


        if (leftSum === rightSum) {
            return i; // found the pivot
        }

        leftSum = leftSum + nums[i];
        // console.log('left-sum', leftSum);
        // this code is update the next number in left
    }


    return -1;

};

const arr = [1, 2, 3];
console.log(pivotIndex(arr));
