class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let maxProfit = 0;
        let minPrice = Infinity;

        for (let i = 0; i < prices.length; i++) {
            let profit = prices[i] - minPrice; 

            maxProfit = Math.max(maxProfit, profit);
            minPrice = Math.min(minPrice, prices[i]);
        }
        return maxProfit;
    }
}


const soln = new Solution();
let input = [7, 6, 4, 3, 1]
console.log(soln.maxProfit(input));

