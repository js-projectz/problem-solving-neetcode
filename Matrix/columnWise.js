/**
 * print the number in column wise
 * 
 * @author Meganathan
 */


const matrixColumnWise = (matrix) => {

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[j][i]); // 0 1 , 1 ,0
        }
    }

    return result;
};

console.log(matrixColumnWise([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
