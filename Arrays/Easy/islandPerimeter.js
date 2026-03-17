/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    if (grid.length == 0 || grid[0].length == 0) return 0;

    const DIRECTION = [[-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]];  // right

    let totalPerimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let perimeter = 4;

                for (let [dx, dy] of DIRECTION) {
                    let newRow = i + dx; // 0 + -1 = -1
                    let newCol = j + dy; // 0 + 0 = 0

                    if (inRange(newRow, newCol, grid) && grid[newRow][newCol] === 1) {
                        perimeter -= 1;
                    }
                }
                totalPerimeter += perimeter;
            }

        }
    }
    return totalPerimeter;
};
// helper function to check the range
function inRange(row, col, grid) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));
