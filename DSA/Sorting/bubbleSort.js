/**
 * Here the sorting method is one of the concepts of DSA we are given the 
 * unsorted arrray we have to sort the array using bubble sort algo
 * 
 * @author meganthan
 */

class BubbleSort {

    /**
     * 
     * @param {Array} nums 
     */
    bubbleSort(nums) {

        for (let i = 0; i < nums.length; i++) {
            let temp = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
        return nums;

    }

}
const soln = new BubbleSort();
console.log(soln.bubbleSort([10, 9, 7, 6, 3, 2, 1]));
