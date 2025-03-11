/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {


    if (students.length === 0 || sandwiches.length === 0) {
        return 0;
    }

    let count0 = 0;
    let count1 = 0;


    for (const num of students) {
        if (num === 0) count0++;
        else count1++;
    }

    for (const sandwich of sandwiches) {
        if (sandwich === 1 && count1 > 0) count1--;
        else if (sandwich === 0 && count0 > 0) {
            count0--;
        }
        else {
            break;
        }
    }

    return count0 + count1;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));

