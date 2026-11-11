/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {

    if (m == 0 || n == 0 || ops[0].length == 0) {
        return 0;
    }

    let minRows = m;
    let minCols = n;


    for (let i = 0; i < ops.length; i++) {
        minRows = Math.min(minRows, ops[i][0]);
        minCols = Math.min(minCols, ops[i][1]);
    }

    return minRows * minCols;
};


