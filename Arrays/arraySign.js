/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {

    if (!nums.length) return 0;

    let sign = -1;

    for (let num of nums) {
        if (num === 0) return 0;
        if (num > 0) sign *= 1;
        if (num < 0) sign *= -1;
    }

    return sign;
};

console.log(arraySign([1, 5, 1, 2, -3]));
