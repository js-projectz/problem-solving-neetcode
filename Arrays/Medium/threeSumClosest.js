/**
 * 
 * @param {} nums 
 * @param {} target 
 * @returns 
 */

function threeSumClosest(nums, target) {
    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let currentSum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                    closestSum = currentSum;
                }
            }
        }
    }
    return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
