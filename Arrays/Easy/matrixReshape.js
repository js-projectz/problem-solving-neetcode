/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {

    let rows = mat.length;
    let cols = mat[0].length;

    if (rows * cols !== r * c) return mat;


    // let solve the older way
    let result = [];
    let temp = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            temp.push(mat[i][j]); // [1,2,3,4]
            // this if is checking the given colum in the question
            if (temp.length === c) { // 4 === 4
                result.push(temp);
                temp = [];
            }

        }
    }
    return result;
};