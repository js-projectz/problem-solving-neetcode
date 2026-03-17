/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {

    if (!path.length) return false;

    const visited = new Set();
    let x = 0; y = 0;

    visited.add(`${x},${y}`);

    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
            case 'E':
                x++;
            case 'W':
                x--;
        }

        if (visited.has(`${x}, ${y}`)) return true;
        visited.add(`${x},${y}`)

    }
    return false;
};

console.log(isPathCrossing("NES"));
