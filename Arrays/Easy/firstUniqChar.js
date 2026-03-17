/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    if (!s.length) return 0;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1
        }
        else {
            map[s[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(map)) {
        if (value === 1) {
            return s.indexOf(key);
        }
    }

    return -1;

};

console.log(firstUniqChar("loveleetcode"));
