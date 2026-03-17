
// Concat the two arrays

const arr = [1, 2, 1];

const getConcatenation = (nums) => {
    return [...nums, ...nums];
}

console.log(getConcatenation(arr)); // [1, 2, 1, 1, 2, 1]