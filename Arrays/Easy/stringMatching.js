/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {

    // validation
    if (words.length === 0) return [];

    const res = new Set();

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i].includes(words[j])) res.add(words[j]);
        }

    };
    return Array.from(res);

}
console.log(stringMatching(["mass", "as", "hero", "superhero"]));