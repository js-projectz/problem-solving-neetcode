
const checkDivisible = (userInput) => {

    if (userInput.length === 0) return 'no';

    const number = parseInt(userInput[0]);

    const res = number % 7 === 0 ? 'yes' : 'no';

    console.log(res);
    return res;
};
checkDivisible(["14"]);
