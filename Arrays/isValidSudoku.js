/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            let num = board[i[j]];

            if (num === '.') continue;


            let rowKey = `row${i}${num}`;
            let colKey = `col${j}${num}`;
            let boxKey = `box${Math.floor(i / 3)}${Math.floor(j / 3)}${num}`;

            if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) return false;

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }

    return true;
};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));


