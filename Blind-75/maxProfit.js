class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // find the min prices
        let minPrice = prices[1]; // 1
        let minPriceIdx = 0;
        let maxProfitDay = 0;
        // = [[3, 4, 1]]
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) { // 2 < 3
                minPrice = prices[i];
                // set the min price index
                minPriceIdx = prices.indexOf(minPrice);
            }

        }
        if (minPrice === 0) {
            if (i === prices.length - 1) {
                minPrice = prices[prices.length - 1];
                minPriceIdx = prices.length - 1;
            }
        }

        console.log('minprice', minPrice);
        console.log('minpriceidx', minPriceIdx);


        // check the boundry before goes to the logic
        if (prices.length - 1 > minPriceIdx) {
            for (let j = minPriceIdx; j < prices.length; j++) {
                if (prices[j + 1] > prices[j]) {
                    maxProfitDay = prices[j + 1];
                    console.log("maxprf", maxProfitDay);

                }
            }
        }

        return maxProfitDay === 0 ? minPrice : maxProfitDay - minPrice;
    }
}


const soln = new Solution();
let input = [7, 6, 4, 3, 1]
console.log(soln.maxProfit(input));

