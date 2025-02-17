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

    if (numRows === 0) return [[]];

    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        var row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) { // first element is always 1 also last element
                row.push(1);
            }
            else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }
    return triangle;
};

const numRows = 5;
console.log(generate(numRows)); 