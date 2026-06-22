/**
 * Reverse Triangle Pattern
 * 
 * Write a function that takes in a positive integer N and console logs a reverse triangle pattern of N levels using the # character. For example, if N is 5, the pattern would look like this:
 * 
# #####
 ####
  ###
   ##
    #

 */


function printReverseTriangle(n) {

    for (let i = 0; i < n; i++) {

        let row = '';
        // inner loop to -print hash
        for (let j = 0; j < n - i; j++) {
            row += '#' + " ";
        }
        console.log(row);
    }
}

printReverseTriangle(5);