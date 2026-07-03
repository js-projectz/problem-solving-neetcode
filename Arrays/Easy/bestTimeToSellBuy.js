/**
 * Here the problem is to find the best time to buy and sell a stock to maximize profit. The input is an array of prices where the index represents the day and the value represents the price of the stock on that day. The goal is to find the maximum profit that can be achieved by buying on one day and selling on another day after the buying day.
 */


var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
