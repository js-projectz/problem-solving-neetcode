/**
 * Here the I solve the problem of printing a right triangle pattern of asterisks.
*
* *
* * *
* * * *
* * * * *

*/


function printRightTrianglePattern(n) {

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }

}

printRightTrianglePattern(5);

