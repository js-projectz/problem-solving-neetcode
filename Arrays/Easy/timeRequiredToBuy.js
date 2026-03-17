/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {

    if (!tickets.length || k < 0) return 0;

    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], tickets[k]);
        } else {
            time += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return time;
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
