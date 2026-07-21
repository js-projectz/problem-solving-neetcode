class RestaurantQueue {
    constructor() {
        this.queue = [];
    }


    arrive(name) {
        this.queue.push(name);
    }

    seatCustomer() {
        if (this.queue.length === 0) {
            return "No customers waiting";
        }

        return this.queue.shift();
    }

    nextCustomer() {
        if (this.queue.length === 0) {
            return "No customers waiting";
        }

        return this.queue[0];
    }
}

const restaurant = new RestaurantQueue();

restaurant.arrive("John");
restaurant.arrive("Alice");
restaurant.arrive("Bob");

console.log(restaurant.nextCustomer()); 
console.log(restaurant.seatCustomer()); 
console.log(restaurant.nextCustomer()); 