/**
 * Here the selection sort in the DSA concept you will the select the 
 * small or large value in array and compare with other then swap 
 * 
 * @author Meganathan
 */

function selectionSort(nums) {
    // [7,2,8,9,4,6]

    const n = nums.length;
    let temp = 0;
    let minIndex = -1;

    for (let i = 0; i < n - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) { // 2 < 7
                minIndex = j;
            }
        }

        // here we have to swap the elements
        temp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = temp;

        console.log(nums);

    }
    return nums;
}
console.log(selectionSort([7, 2, 8, 9, 4, 6]));
