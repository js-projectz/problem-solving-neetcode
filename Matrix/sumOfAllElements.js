/**
 * problem is sum of all elements in the array
 * 
 * @author Meganathan
 */


const sumOfAllElementsInMatrix = (matrix) => {

    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j];
        }
    };

    return result;
};

console.log(sumOfAllElementsInMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
