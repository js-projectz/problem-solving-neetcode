/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {

    if (!s.length) return 0;

    let count1 = 0, count2 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '1') count1++;
            else count2++;
        }
        else {
            if (s[i] === '0') count1++;
            else count2++;
        }
    }
    console.log(count1);
    console.log(count2);



    return Math.min(count1, count2);
};

console.log(minOperations("0100"));
