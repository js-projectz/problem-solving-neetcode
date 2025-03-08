/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {

    if (!s.length) return 0;


    let max = -1;

    for (let i = 0; i < s.length; i++) {
        let firstIndex = s.indexOf(s[i]);
        let lastIndex = s.lastIndexOf(s[i]);
        if (firstIndex !== lastIndex) {
            max = Math.max(max, lastIndex - firstIndex - 1);
        }
    }

    return max;
};

console.log(maxLengthBetweenEqualCharacters("abca"));
