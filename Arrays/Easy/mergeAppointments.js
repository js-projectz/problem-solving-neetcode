/**
 * Merge two sorted appointment lists
 * Time: O(n + m)
 * Space: O(n + m)
 */

function mergeAppointments(online, phone) {
    let i = 0;
    let j = 0;
    const merged = [];

    while (i < online.length && j < phone.length) {
        if (online[i] <= phone[j]) {
            merged.push(online[i]);
            i++;
        } else {
            merged.push(phone[j]);
            j++;
        }
    }

    while (i < online.length) {
        merged.push(online[i]);
        i++;
    }

    while (j < phone.length) {
        merged.push(phone[j]);
        j++;
    }

    return merged;
}

const online = [9, 11, 15, 18];
const phone = [10, 12, 16, 20];

console.log(mergeAppointments(online, phone));