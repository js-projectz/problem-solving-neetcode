/**
 * Here the problem is to find the
 * subsequences of the given string
 * 
 * @author  Meganthan
 *  * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {

    if (!s.trim() || !t.trim()) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (j < t.length) {

        if (s[i] === t[j]) {
            i++;
        }

        // if length is same return true
        if (i === s.length) return true;

        j++;
    }

    return s.length === i;
}