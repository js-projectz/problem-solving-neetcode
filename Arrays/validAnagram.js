/**
 * Here the problem is check the arrays
 * is angram or not and return boolean value
 * true or false
 * 
 * @author meganathan
 */



// create a class
class Solution {

    /**
         * @param {string} s
         * @param {string} t
         * @return {boolean}
         */
    isAnagram(s, t) {
        // Validation
        if (!s.length || !t.length || s.length !== t.length) {
            return false;

        }


        // Create a hashmap 
        var map = {};

        // Loop through the first string
        for (let char of s) {
            map[char] = (map[char] || 0) + 1;
        }

        for (let char of t) {
            if (!map[char]) {
                return false;
            }
            map[char] -= 1;
        }
    };
}

const soln = new Solution;
const s = "racecar";
const t = "carrace";
console.log(soln.isAnagram(s, t));
