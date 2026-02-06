const numberRangeCheck = (userInput) => {

    // ["3","2 6"];

    const N = parseInt(userInput[0]);
    const number = userInput[1].split(" ").map(Number);


    console.log(N);
    console.log(number);
    if (number <= 0) {
        console.log("Please enter valid " +
            "number");
        return false;
    }

    if (number[0] < N && number[1] > N) {
        console.log("yes");
    }

    console.log("no");
    return true;
}

numberRangeCheck(["3", "2 6"]);