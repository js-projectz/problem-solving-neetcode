/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {

    for (let i = 0; i < letters.length; i++) {

        if (letters[i] > target) //  > 97  
            return letters[i]; 
    }
    return letters[0];

};
const letters = ["c", "f", "j"];
const target = "c"; // > 97

console.log(nextGreatestLetter(letters, target));
