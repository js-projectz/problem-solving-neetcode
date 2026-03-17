/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let x = 1; x <= n; x++) {
        let count = nums.filter(num => num >= x).length;
        console.log(count);

        if (count === x) return x;
    }

    return -1;
};


console.log(specialArray([3, 5]));
