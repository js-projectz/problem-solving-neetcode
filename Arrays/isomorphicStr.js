/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let mapST = {}; // Mapping from s -> t
    let mapTS = {}; // Mapping from t -> s

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check if s -> t mapping exists and is consistent
        if (mapST[charS] && mapST[charS] !== charT) return false;
        if (mapTS[charT] && mapTS[charT] !== charS) return false;

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("ab", "aa")); 
