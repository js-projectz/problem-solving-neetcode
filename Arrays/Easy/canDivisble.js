
/**
 * 
 * @param {*} nums 
 * @returns String
 */

const canDivisble = (nums) => {

    // Check the number is divisble by 7
    if (nums.length === 0) return 0;

    const number = Number(nums[0]);

    return number % 7 === 0 ? 'Yes' : 'no';
}

console.log(canDivisble(['14'])); // Yes
console.log(canDivisble(['15']));