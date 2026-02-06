const vowelCheck = (userInput) => {
    const input = userInput[0];

    if (input === '') {
        console.log('Please enter valid input');
        return;
    }

    if (
        input.includes('a') ||
        input.includes('e') ||
        input.includes('i') ||
        input.includes('o') ||
        input.includes('u')
    ) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

vowelCheck(["codekata"]);
