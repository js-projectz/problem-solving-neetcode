/**
 * Here the problem i solve is print the floyed triangle of number 
 * 
 * 1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

 */


function printFloyedTriangle(n) {

    let count = 1;

    for (let i = 0; i < n; i++) {
        let num = '';
        for (let j = 0; j <= i; j++) {
            num += count + " "; // " " = 1 + " " = num = 1
            count++;
        }
        console.log(num);

    }

}

printFloyedTriangle(5);