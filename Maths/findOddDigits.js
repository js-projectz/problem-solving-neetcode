/**
 * Find the odd digit from the inpt arr and return the arr if odd not find return -1
 * @param userInput
 */

const findOddDigits = (userInput) => {

    const numArr = userInput[0].split("");
    console.log(numArr)

    let oddArr = [];

    for (let i = 0; i < numArr.length; i++) {
        if (parseInt(numArr[i]) % 2 !== 0) {
            oddArr.push(numArr[i]);
        }
    }
    if (oddArr.length === 0) console.log(-1);
    else console.log(oddArr.join(" "));
};

findOddDigits(["1234"]);