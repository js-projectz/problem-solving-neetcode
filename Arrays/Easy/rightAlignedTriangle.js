/**
 * Here the function rightAlignedTriangle takes 
 * a number as an argument and returns a right-aligned
 * @author Meganathan
 */

function rightAlignedTriangle(n) {

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (j < n - i - 1) {
                str += ' ';
            } else {
                str += '*';
            }
        }
        console.log(str);

    }
};

rightAlignedTriangle(5);