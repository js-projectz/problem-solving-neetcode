/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {

    if (!num.length) return "";

    let max = '';

    for (let i = 0; i <= num.length - 3; i++) {
        // get the substring in string
        const triplet = num.substring(i, i + 3);
        console.log('triplet', triplet);

        if (triplet[0] === triplet[1] && triplet[1] === triplet[2]) {
            if (triplet > max) {
                max = triplet;
            }
            else if (triplet === max) max = triplet;
        }
    }
    return max;
};

console.log(largestGoodInteger("222"));
