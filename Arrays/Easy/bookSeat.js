/**
 * Here the problem is to solve the problem of booking a seat in a theater. The function takes in an array of seats and a seat number to book. It checks if the seat is available and books it if it is, otherwise it returns a message indicating that the seat is already booked.
 * 
 * 
 */


function bookSeat(seats, seatNumber) {
    // Check if the seat number is valid
    if (seatNumber < 1 || seatNumber > seats.length) {
        return "Invalid seat number.";
    }

    // Check if the seat is already booked
    if (seats[seatNumber - 1] === "booked") {
        return "Seat " + seatNumber + " is already booked.";
    }

    // Book the seat
    seats[seatNumber - 1] = "booked";

    return "Seat " + seatNumber + " has been booked.";
}


const seats = ["available", "available", "available", "available", "available", "available", "available", "available", "available", "available"];
const seatNumber = 5;
const result = bookSeat(seats, seatNumber);
console.log(result);