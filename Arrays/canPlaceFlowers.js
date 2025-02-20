/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (!flowerbed) {
        return false;
    }

    for (let i = 0; i < flowerbed.length; i++) {

        if (n !== 0) {

            if (flowerbed[i] === 0) {

                // Check the pre and current with corner o's 
                let pre = i === 0 || flowerbed[i - 1] === 0;
                let next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

                if (pre && next) {
                    flowerbed[i + 1] = 1;
                    n--;
                    if (n === 0) return true;
                }
            }
        };
        return n === 0;
    }
};