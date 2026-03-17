/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {

    if (!words.length || !chars.length) return 0;

    let total = 0;



    for (let word of words) {

        let charMap = new Map();

        for (let char of chars) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }

        let isValid = true;
        for (let ch of word) {
            if (!charMap.has(ch) || charMap.get(ch) === 0) {
                isValid = false;
                break;
            }
            charMap.set(ch, charMap.get(ch) - 1);
        }

        if (isValid) {
            total += word.length;
        }
    }

    return total;


};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
