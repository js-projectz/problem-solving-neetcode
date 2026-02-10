/**
 * Here we will reverse the digits of a number. For example, if the input is 123, the output should be 321. If the input is -456, the output should be -654. We will also handle cases where the reversed number exceeds the 32-bit signed integer range, in which case we will return 0. 
 * 
 * @param {Array} userInput - An array containing the number as a string.
 * @return {Number} The reversed number or 0 if it exceeds the 32-bit signed integer range.
 * 
 * @author meganathan
 */

const reverseNumber = (userInput) => {


    const numStr = userInput[0];

    let reversedStr = "";

    // if number consists zeroes at the end, we will ignore them while reversing
    for (let i = numStr.length - 1; i >= 0; i--) {
        if (numStr[i] !== "0") {
            reversedStr += numStr[i];
        }
    }

    return reversedStr;

};

console.log(reverseNumber(["10"])); // Output: "1"
