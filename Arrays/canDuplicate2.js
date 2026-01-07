/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    if (nums.length == 0 || k <= 0) return false;

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {


        // if the map has the value and the diff between the index and the value is less than or equal to k
        if (map.has(nums[i]) && i - map.get(nums[i] <= k)) {
            return true;
        }

    }

    return false;
    
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); 