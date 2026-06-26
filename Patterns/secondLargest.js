/**
 * Find the second largest number in an array.
 * 
 * 
 */


function secondLargest(arr) {

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;

};

console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
