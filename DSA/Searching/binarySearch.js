/**
 * Binary Search is simply for you are give the sorted array and k element 
 * you're task is to find the K element inside the array if there return the index
 * not return -1 
 * 
 * @author Meganathan
 */

class Binarysearch {

    /**
     * 
     * @param {Array} nums 
     * @param {number} k 
     */

    binarySearch(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {

            // we have to find the mid value
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) return mid;

            else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }
        return -1;

    }
};

const soln = new Binarysearch();
console.log(soln.binarySearch([1, 2, 3, 4, 5], 5));