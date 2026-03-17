/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {

    // validation
    if (matrix.length == 0 || matrix[0].length == 0) return false;


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > 0 && j > 0 && matrix[i][j] !== matrix[i - 1][j - 1]) return false;
        }
    }
    return true;

};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]));
