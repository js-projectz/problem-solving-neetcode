const middleEleModify = (userInput) => {

//     convert the arr to str
    const str = userInput[0].split("");
    let mid = Math.floor(str.length / 2);
    // if user input is even
    if (str.length % 2 === 0) {
        // find the mid-value
        str[mid - 1] = "*";
    }
    str[mid] = "*"
    console.log(str.join(""));
};

middleEleModify(["sadsad"])