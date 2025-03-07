/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {

    if (words.length === 1) return true;

    let wordMap = {};


    // this loop for set the freq of char

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (wordMap[word[j]]) {
                wordMap[word[j]]++;
            }
            else {
                wordMap[word[j]] = 1;
            }
        }
    };


    // get the keys
    let keys = Object.keys(wordMap);


    for (let i = 0; i < keys.length; i++) {
        if (wordMap[keys[i]] % words.length !== 0) {
            return false;
        }
    }
    return true;
};

console.log(makeEqual(["a", "a", "a"])); // true
