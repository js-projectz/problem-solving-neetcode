const farmAreaCalculation = (userInput) => {

    let L = parseInt(userInput[0]);
    let W = parseInt(userInput[1]);

    let area = L * W;

    let ans = parseInt(area.toFixed(5));

    console.log(ans);
}

farmAreaCalculation(["1", 10]);