/**
 * Here the problem is to find the
 *  count of even numbers in an array
 * 
 * @author meganathan
 * @param {number[]} nums
 * @return {number}
 *
 * */

var countEvent = function (nums) {
    return nums.filter(num => num % 2 === 0).length;
}

console.log(countEvent([1, 2, 3, 4, 5, 6]));