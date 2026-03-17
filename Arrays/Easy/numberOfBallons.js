/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {

    if (text.trim().length === 0) return 0;

    let ballon = "balloon";

    let map = new Map();

    for (const ele of text) {
        map[ele] = (map[ele] || 0) + 1;
    };

    let min = Infinity;

    for (const ele of ballon) {

        const required = (ele === 'l' || ele === 'o') ? 2 : 1;
        const available = map[ele] || 0;
        const possible = Math.floor(available / required);

        if (possible === 0) return 0;
        min = Math.min(min, possible); // Infinity , 1;
    }

    return min;
};

console.log(maxNumberOfBalloons("loonbalxballpoon"));
