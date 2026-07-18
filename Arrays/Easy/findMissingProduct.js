function findMissingProduct(products) {
    let left = 0;
    let right = products.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Expected value at index mid
        if (products[mid] === mid + 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left + 1;
}

const products = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(findMissingProduct(products)); // 6