/**
 * Here the prblm is to solve
 * find the target in the given array
 * 
 * @author Meganathan
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 * 
 * 
 * 
 * 
 */


const targetFound = (arr, target) => {
    // return the index 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log(targetFound([1, 2, 3, 4, 5], 3));