/**
 * Remove the first occurrence of a patient ID from the queue.
 *
 * @param {number[]} queue
 * @param {number} patientId
 * @returns {number[]}
 */
function removePatient(queue, patientId) {
    const result = [];
    let removed = false;

    for (let i = 0; i < queue.length; i++) {
        if (!removed && queue[i] === patientId) {
            removed = true;
            continue; // Skip the first occurrence
        }

        result.push(queue[i]);
    }

    return result;
}


console.log(removePatient([101, 102, 103, 104], 103));