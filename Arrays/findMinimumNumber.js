
/**
 * 
 * @param {Array} userInput 
 */

const findMinimumNumber = (userInput) => {

    const result = Math.min(...userInput[0].split(' ').map(Number));

    return result;
}

console.log(findMinimumNumber(['1 2 3 -4 5']));
