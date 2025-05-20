/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {

    if (n === 0) return 0;

    const binary = n.toString(2);

    return binary.match(/1/g).length;

};

console.log(hammingWeight(11));
