/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    // Validation
    if (nums.length === 0) return [];


    const set = new Set(nums);

    const result = [];

    for (let i = 0; i < nums.length; i++) {

        if (set.has(i + 1)) {
            continue;
        } else {
            result.push(i + 1);
        }

    };
    // console.log('set', set);

    return result;


};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
