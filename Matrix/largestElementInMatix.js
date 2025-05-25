/**
 * Find the largest element in the matrix
 * 
 * @param {number[][]} matrix
 * @return {number}
 * 
 * @author Meganathan
 */

const largestElementInMatix = (matrix) => {
    let largest = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > largest) largest = matrix[i][j];
        }
    }
    return largest;
};

console.log(largestElementInMatix([[1, 2, 3]]));
