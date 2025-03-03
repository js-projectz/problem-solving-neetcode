/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    if (pattern.length === 0 || s.length === 0) return false;

    let words = s.split(' ');

    if (pattern.length !== words.length) return false;

    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if the character is already mapped to a different word
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // Check if the word is already mapped to a different character
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        // Add mappings
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;

};

console.log(wordPattern("abba", "dog cat cat dog"));
