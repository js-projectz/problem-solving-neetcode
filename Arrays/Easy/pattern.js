/**
 * Here the problem is find the pattern
 * *  
* *  
* * *  
* * * *  
* * * * *  
*/

function pattern(n) {

    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(i + 1));
    }

};

pattern(5);