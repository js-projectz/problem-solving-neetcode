/**
 * Here the problem is to find the
 *  longest common prefix
 * 
 * @author meganathan
 * @param {string[]} strs
 * @return {string}
 * 
 */

var longestCommonPrefix = function (strs) {

    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            console.log('prefix', prefix);
        }
    }

    return prefix;

};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); 