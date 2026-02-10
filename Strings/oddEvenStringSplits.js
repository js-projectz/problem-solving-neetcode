/**
 * split the string into odd and even indexed characters
 * @param {Array} userInput
 * @returns {String} the string with odd and even indexed characters separated by a space
 * 
 */

const oddEvenStringSplits = (userInput) => {

    const strArr = userInput[0].split("");

    let oddArr = [];
    let evenArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) { 
            evenArr.push(strArr[i]);
        } else {
            oddArr.push(strArr[i]);
        }
    }
    return evenArr.join("") + " " + oddArr.join("");

}

console.log(oddEvenStringSplits(["XCODE"]));