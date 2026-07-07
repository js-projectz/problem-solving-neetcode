/**
 * 
 * Here the problem is to find the
 * first non repeating character of the given string
 * 
 * @author  Meganthan
 *  * @param {string} s
 * @return {char}
 */


function firstNonRepeatingChar(str) {
    if (str.length === 0) {
        return null;
    }

    const frequency = {};

    // Count frequency
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Find first non-repeating character
    for (const char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
};


console.log(firstNonRepeatingChar("leetcode"));
console.log(firstNonRepeatingChar("loveleetcode"));