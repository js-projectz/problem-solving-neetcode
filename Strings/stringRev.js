/**
 * Here the problem is reversing a string. The input is a string and the output is the reversed string.
 */


function stringReverse(str) {

    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;

}

console.log(stringReverse('hello'));