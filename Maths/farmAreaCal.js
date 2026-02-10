const farmAreaCalculation = (userInput) => {
    let data = userInput[0].split(" ");

    let L = parseFloat(data[0]);
    let W = parseFloat(data[1]);

    let area = parseFloat(L * W);
    let result = Math.floor(area * 100000) / 100000;

    console.log(result.toFixed(5));
}

farmAreaCalculation(["1", 10]);