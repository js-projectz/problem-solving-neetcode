
/**
    * @param {number[]} nums
    * @param {number} k
    * @return {number[]}
    */
function topKFrequent(nums, k) {

    if (!nums.length || k < 0) {
        return [];
    }

    let freqNum = {};


    for (let num of nums) {
        freqNum[num] = (freqNum[num] || 0) + 1;
    }

    let sortedByValueDesc = (Object.entries(freqNum).sort((a, b) => b[1] - a[1]));

    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(Number(sortedByValueDesc[i][0]));
    }
    return res;


}

console.log(topKFrequent([1, 2], 2));
