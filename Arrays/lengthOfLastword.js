/**
 * Here the problem is find the 
 * length of last world 
 * 
 * @author Meganathan
 *  * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {

    let t = s.replace(/\s+/g, ' ').trim();
    return t.split(' ').pop().length;
    
    
};

const s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
