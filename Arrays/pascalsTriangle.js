/**
 * Here the problem is to find the
 * Pascal's Triangle
 * 
 * @param {number} numRows
 * @return {number[][]}
 * 
 * @author meganathan
 * 
 */


var generate = function (numRows) {

    if (numRows === 0) return [];

    const result = [];

    for (let i = 0; i < numRows; i++) {
        let row = [1]; // First element is always 1
        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j - 1] + result[i - 1][j]); // Middle elements are sum of previous row's j-1 and jth elements
        }
        if (i > 0) row.push(1); // Last element is always 1
        result.push(row);
    }

    return result;
};

const numRows = 5;
console.log(generate(numRows)); 