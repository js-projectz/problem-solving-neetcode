/**
 * Here the problem i solve alphabet triangle pattern
 * 
 */

function printAlphabetTriangle(n) {

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(65 + j - 1) + ' ';

        }
        console.log(row);
    }

}

printAlphabetTriangle(5);