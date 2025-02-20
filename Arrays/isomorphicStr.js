/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    // Validation
    if (!s.length || !t.length) return false;

    // add the first key and value in obj
    let obj = { [t[0]]: s[0] };
    console.log(obj);

    return true;
};

const s = 'egg';
const t = 'add';
console.log(isIsomorphic(s, t));
