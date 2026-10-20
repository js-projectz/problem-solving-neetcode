/**
 * Here the we learn the quick sort of DSA concept that contains the 
 * divide and conquer like partition the array and doing the recurison and 
 * compare the values and swap it 
 * 
 * @author Meganathan
 */


function quickSort(arr, low, high) {

    if (low < high) {

        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1); // left side 
        quickSort(arr, pi + 1, high) //  right side
    }


}

function partition(arr, low, high) {


    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {

            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // ithu ethuku potu irukom means pivot high uh ore place la meet panure apo pivot irukure element vanthu change akum so

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;

}

let nums = [9, 5, 6, 7, 8, 2];
const soln = quickSort(nums, 0, nums.length - 1);
console.log(nums);
