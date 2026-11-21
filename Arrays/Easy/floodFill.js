/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    function dfs(row, col) {

        // check the boundary of the array
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
            return;
        }

        // check the original color
        if (image[row][col] !== originalColor) {
            return;
        }

        // change the current pixel
        image[row][col] = color;

        // visit the four directions
        dfs(row - 1, col); // up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // right

    }

    dfs(sr, sc);
    return image;

};


const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
const sr = 1;
const sc = 1;
const color = 2;

console.log(floodFill(image, sr, sc, color));

