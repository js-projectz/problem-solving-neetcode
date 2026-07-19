/**
 * Remove duplicate patient IDs
 */

function removeDuplicatePatients(patientIds) {
    const seen = new Set();
    const uniquePatients = [];

    for (const id of patientIds) {
        if (!seen.has(id)) {
            seen.add(id);
            uniquePatients.push(id);
        }
    }

    return uniquePatients;
}

const patients = [101, 205, 101, 330, 205, 410];

console.log(removeDuplicatePatients(patients));