const checkDivisble = (userInput) => {

    const num = parseInt(userInput[0]);

    if (num % 13 === 0) console.log("yes");
    else console.log("no");
}
checkDivisble(["169"]);


