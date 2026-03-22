/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;

    const dfs = (i, j) => {
        // boundary check + water check
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === '0'
        ) return;

        // mark visited
        grid[i][j] = '0';

        // explore all 4 directions
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;      // new island found
                dfs(i, j);    // remove whole island
            }
        }
    }

    return count;
};