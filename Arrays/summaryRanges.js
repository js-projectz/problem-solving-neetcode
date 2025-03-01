/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    // Validation
    if (nums.length === 0) return [];

    const result = [];

    for (let i = 0; i < nums.length; i++) {

        let start = nums[i]; // set the inital number as start 

        while (nums[i + 1] - nums[i] === 1) {
            i++;
        }

        if (start === nums[i]) {
            result.push(start.toString());
        }
        else {
            result.push(start + '->' + nums[i]);
        }
    }
    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
