/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {

    let m = img.length;
    let n = img[0].length;


    let result = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {


            let sum = 0;
            let count = 0;


            for (let r = i - 1; r <= i + 1; i++) {
                for (let c = j - 1; j <= j + 1; j++) {

                    // check the boundary cells
                    if (r >= 0 && r < m && c >= 0 && c < n) {

                        sum += img[r][c];
                        count++;

                    }

                }
            }

            result[i][j] = Math.floor(sum / count);

        }
    }

    return result;

};