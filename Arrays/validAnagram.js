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
        let i = 0;

        while (s.length > i) { 



        }
    };
}

const soln = new Solution;
const s = "racecar";
const t = "carrace";
console.log(soln.isAnagram(s, t));
