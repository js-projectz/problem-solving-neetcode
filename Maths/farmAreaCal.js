const farmAreaCalculation = (userInput) => {

    let L = parseInt(userInput[0]);
    let W = parseInt(userInput[1]);

    let area = L * W;

    console.log(Number(area.toFixed(5)));
}

farmAreaCalculation(["1", 10]);