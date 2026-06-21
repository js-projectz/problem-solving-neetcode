/**
 * Here the I solve the problem of printing a square pattern of asterisks.  
 * 
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * 
 */


// create a separate function to print the pattern

function printSquarePattern(n) {

    for (let i = 0; i < n; i++) { // i = 0, 1, 2, 3, 4
        let row = '';
        for (let j = 0; j < n; j++) { // j = 0, 1, 2, 3, 4
            row += '* ';
        }
        console.log(row);

    }
}

// call the function with the desired size of the square pattern
printSquarePattern(5);