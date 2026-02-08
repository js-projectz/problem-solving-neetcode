const primeFactorNumbers = (userInput) => {

//     extract the userinput
    const num = parseInt(userInput[0]);

    if (num === 0) return 0;
    if (num === 1) return 1;

    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    console.log(factors.join(" "));
};

primeFactorNumbers("6")