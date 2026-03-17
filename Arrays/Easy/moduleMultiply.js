
/**
 * 
 * @param {Array} userInput 
 */

const moduleMultiply = (userInput) => {

    // Change to number
    let res = userInput[0].split(' ');

    return (res[0] * res[1]) % res[2];

}

console.log(moduleMultiply(['4 3 11']));
