/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {

    if (paths.length === 0) return "";

    const s = new Set()

    for (const [from] of paths) {
        s.add(from)
    }

    for (const [, to] of paths) {
        if (!s.has(to))
            return to;
    }


};
console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
