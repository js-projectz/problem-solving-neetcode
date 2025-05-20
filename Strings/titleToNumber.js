/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    if (!columnTitle.length || typeof columnTitle !== "string") return 0;

    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + charValue; // 1 * 26 + 2 = 28 
    }

    return result;
};

console.log(titleToNumber('AA'));
