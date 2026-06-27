/**
 * Here the probblem i solve print the same number as praymid
 */


function printSameNum(n) {

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}

printSameNum(5);