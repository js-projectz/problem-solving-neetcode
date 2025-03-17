/**
 * We have to encode the array of string
 * and return the array of str 
 * 
 * @author Meganathan
 *  
 */

/**
     * @param {string[]} strs
     * @returns {string}
     */

function encode(strs) {

    if (!strs.length) return "";

    let encodedStr = "";


    for (let str of strs) {
        encodedStr += str.length + "#" + str;
    }
    // now we have to call the decode function here
    return encodedStr;
}


// this function for decode the str
function decode(str) {


    let decoded = [];

    let i = 0;

    while (i < str.length) {

        let j = i;
        while (str[j] !== '#') j++; // '5#hello6#'

        let length = parseInt(str.substring(i, j)); // 0 , 1
        i += j + 1;

        let word = str.substring(i, i + length); //  2 , 7

        decoded.push(word);

        i += length;
    }

    return decoded;

};

console.log(encode(['neet', 'code']));
