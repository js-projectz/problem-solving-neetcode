/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {


    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    const nums = [];

    for (let i = 0; i <= rowIndex; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            }
            else {
                row.push(nums[i - 1][j - 1] + nums[i - 1][j]);
            }
        }
        nums.push(row);
    }
    console.log(nums);

    return nums[rowIndex];

};

console.log(getRow(3));
