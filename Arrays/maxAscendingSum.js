const maxAscendingSum = (nums) => {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = 0;
        }
        currentSum += nums[i];
    }
    return Math.max(maxSum, currentSum);
}

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // Output: 65
