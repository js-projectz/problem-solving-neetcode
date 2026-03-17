// Here the problem to solve find the all missing number in an array of n-1 numbers

const nums = [1, 2, 4, 5, 6, 8];

let n = nums.length + 1;

const findMissingNumber = (nums, n) => {
    const missingNumber = [];

    for (let i = 1; i <= n; i++) {
        if (!nums.includes(i)) {
            missingNumber.push(i);
        }
    }
    if (missingNumber.length === 1) return missingNumber[0];
    return missingNumber;

};

console.log(findMissingNumber(nums, n)); // 3