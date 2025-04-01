/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {

    if (s.length === 0) return 0;

    let res = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let count = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        res += count;
    }

    return res;

};

console.log(scoreOfString('hello'));
