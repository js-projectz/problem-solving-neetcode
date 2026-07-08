function calculateBill(cart) {
    let total = 0;

    for (const price of cart) {
        total += price;
    }

    let discount = 0;

    if (total >= 1000) {
        discount = total * 0.10;
    }

    return {
        total,
        discount,
        finalAmount: total - discount
    };
}

// Example
console.log(calculateBill([200, 300, 600]));
console.log(calculateBill([100, 200, 300]));