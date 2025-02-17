/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {


    let uniqueEmails = new Set();

    for (const email of emails) {

        // spilt the local and domain
        var [local, domain] = email.split('@');

        // now check the + symbol
        if (local.includes('+')) {
            local = local.split('+')[0];
            // console.log('local----', local);
        }

        local = local.split('.').join('');
        uniqueEmails.add(local + '@' + domain);
    }
    console.log(uniqueEmails);

    return uniqueEmails.size;
};

const emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));
