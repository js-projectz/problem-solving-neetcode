/**
 * Here the problem is to find the
 * Same number triangle
 * 
 * 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
 * 
 * @param {number} numRows
 * @return {number[][]}
 * 
 * @author meganathan
 * 
 * 
 */

function printSameNumberTriangle(numRows) {

    for (let i = 1; i <= numRows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

printSameNumberTriangle(5);