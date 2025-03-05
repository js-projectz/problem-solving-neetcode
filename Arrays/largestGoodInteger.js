/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {


    if (!num.length) return "";

    let ans = "";
    for (let i = 0; i < num.length; i++) {
        let str = "";

        if (num[i] === num[i + 1]) {
            if (num[i + 1] === num[i + 2]) {
                str += num.slice(i, i + 3);

            }
            ans = str;
            break;
        }

    }
    return ans;
};

console.log(largestGoodInteger("1221000"));
