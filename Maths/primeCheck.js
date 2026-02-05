
const isPrime = (num) => {
    // num is a array you to convert as a number
    const number = parseInt(num[0]);

    if (number <= 1 || number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return "no";
    }
    return "yes";
};

const result = isPrime(["99"]);
console.log(result);


