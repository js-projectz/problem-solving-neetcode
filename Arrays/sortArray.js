/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    /**
     * Here we have to solve the problem in
     * O(nlog(n))
     */

    if (!nums.length) return [];

    quickSort(nums, 0, nums.length - 1);
    return nums;

};


function quickSort(nums, start, end) {

    if (start < end) { // this is the base conditon
        let pivot = randomPartition(nums, start, end);

        // we have to call twice the quick sort method for left and right once
        quickSort(nums, start, pivot - 1); // this if ro left 
        quickSort(nums, pivot + 1, end); // this is for right

    }
}

function randomPartition(arr, start, end) {
    // Select a random pivot and swap it with the last element
    let pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return partition(arr, start, end);
}

function partition(arr, start, end) {

    let pivot = arr[end];
    let i = start - 1; // i always start in -1

    for (var j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++; // move to the current element

            // and swap the numbers
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // if nothing is greater than pivot then change the pivot value
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];

    return i + 1; // this means we say that pivot is the right position choose next pivot and send that

};
console.log(sortArray([5, 2, 3, 1]));
