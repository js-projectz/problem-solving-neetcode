/**
 * Here the problem I solve is to print a triangle of numbers where each row contains the same number repeated as many times as the row number. For example, if the input is 5, the output will be:
 * 
1
22
333
4444
55555


 */


function printRepeatedNumberTriangle(n) {

    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += (i + 1).toString() + ' ';
        }
        console.log(row);
    }

}

printRepeatedNumberTriangle(5);