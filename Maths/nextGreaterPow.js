

const nextGreaterPow = (userInput) => {

    const num = parseInt(userInput[0]);

    if (num <= 0) {
        return 1;
    }

    let power = 1;

    while (power <= num) { // 1 < 2
        power *= 2; // 
    }
    return power;
}

console.log(nextGreaterPow([1])); // 4
console.log(nextGreaterPow([8]));