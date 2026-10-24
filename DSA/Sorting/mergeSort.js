/**
 * Here is a simple implementation of the merge sort algorithm in JavaScript. Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves back together.
 * 
 * 
 * @author Meganathan
 */


function mergeSort(arr, l, r) {

    if (l < r) {
        let mid = Math.floor((l + r) / 2);

        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);

        merge(arr, l, mid, r);
    }

    return arr;
}

function merge(arr, l, mid, r) {

    let n1 = mid - l + 1;
    let n2 = r - mid;

    let lArr = [];
    let rArr = [];

    for (let x = 0; x < n1; x++) {
        lArr[x] = arr[l + x];
    }

    for (let x = 0; x < n2; x++) {
        rArr[x] = arr[mid + 1 + x];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {

        if (lArr[i] <= rArr[j]) {
            arr[k] = lArr[i];
            i++;
        } else {
            arr[k] = rArr[j];
            j++;
        }

        k++;
    }

    while (i < n1) {
        arr[k] = lArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rArr[j];
        j++;
        k++;
    }
}

let arr = [50, 44, 55, 64, 1, 2, 4, 0];

console.log(mergeSort(arr, 0, arr.length - 1));