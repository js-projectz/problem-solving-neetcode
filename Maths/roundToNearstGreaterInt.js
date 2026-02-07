const roundToNearstGreaterInt = (userInput) => {

    const num = parseFloat((userInput[0]));

    console.log("num", num)

    console.log(Math.floor(num) + 1);
}

roundToNearstGreaterInt(["-2.3"]);

