/**
 * Here the Linear Search is nothing but one of the DSA concepts that
 * Searching algo you are given the sorted array and find the element present 
 * in the array if present return the index not return -1
 * 
 * @author Meganathan
 */

class LinearSearch {

    /**
     * 
     * @param {Array} nums 
     * @param {number} k 
     * 
     * 
     */
    linearSearch(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === k) return i;
        }
        return -1;

    }
};

const soln = new LinearSearch();
console.log(soln.linearSearch([1, 2, 3, 4, 5], 5));
