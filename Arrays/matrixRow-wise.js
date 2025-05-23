/**
 * you get the matrix and print it 
 * in the single row
 * 
 * Input: [[1, 2], [3, 4]]  
Output: 1 2 3 4  
 */


const matrixRowWise = (matrix) => {
    const result = [];


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j]);
        }

    }
    return result;
};

console.log(matrixRowWise([[1, 2], [3, 4]]));
