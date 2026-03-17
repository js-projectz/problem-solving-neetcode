/**
 * @param {string[]} words
 * @return {string[]}
 */ 
var findWords = function (words) {

    if (!words.length) return [];

    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    return words.filter(word => {
        const lowerCaseWord = word.toLowerCase();

        return rows.some(row => [...lowerCaseWord].every(char => row.includes(char)));
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
