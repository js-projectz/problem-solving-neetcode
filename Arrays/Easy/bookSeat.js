/**
 * Processes multiple seat booking requests.
 *
 * @param {string[]} seats - Array representing seat status
 *                           ("available" or "booked").
 * @param {number[]} requests - Array of seat numbers to book.
 * @returns {void}
 */
function bookSeats(seats, requests) {
    for (const seatNumber of requests) {

        // Check if seat number is valid
        if (seatNumber < 1 || seatNumber > seats.length) {
            console.log(`Seat ${seatNumber}: Invalid seat number.`);
            continue;
        }

        // Check if already booked
        if (seats[seatNumber - 1] === "booked") {
            console.log(`Seat ${seatNumber}: Already booked.`);
            continue;
        }

        // Book the seat
        seats[seatNumber - 1] = "booked";
        console.log(`Seat ${seatNumber}: Booked successfully.`);
    }

    console.log("\nFinal Seat Status:");
    console.log(seats);
}

// Seats in theater
const seats = [
    "available",
    "booked",
    "available",
    "available",
    "booked",
    "available",
    "available",
    "booked",
    "available",
    "available"
];

// Customer requests
const requests = [1, 5, 7, 8, 10, 11];

bookSeats(seats, requests);