/**
 * Here the Another DSA concept called insertion sort , here 
 * we are picking the array[1] element and comparing with
 *  the previous value and front value and shifting the values with 
 * in the array
 * 
 * @author Meganathan
 */

function insertionSort(nums) {

    let n = nums.length;
    // [9,8,6,3,2,1]

    for (let i = 1; i < n; i++) {
        let key = nums[i] // array oda second element vanthu key eduthukurom asumme as small
        let j = i - 1; // always track the prev elemet
        while (key < nums[j] && j >= 0) { // 8 < 9

            // change the j element first
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key;
    }

    return nums;
};

console.log(insertionSort([9, 8, 6, 3, 2, 1]));


