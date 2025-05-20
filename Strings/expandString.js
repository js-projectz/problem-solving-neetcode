function expandString(input) {

    if (!input.length) return '';

    let result = '';
    let char = '';

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (isNaN(current)) {
            // it's a letter
            char = current;
        } else {
            // it's a digit, repeat the last seen letter
            result += char.repeat(Number(current));
        }
    }

    return result
}

console.log(expandString('3abc'));
