/**
 * Here the problem i sovle is print the sum of digits of the number
 * 
 * 123 = 1 + 2 + 3 = 6
 */


function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // add the last digit of the number to the sum
        num = Math.floor(num / 10); // remove the last digit from the number
    }
    return sum;
}   