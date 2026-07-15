class RateLimiter {
    constructor(limit, windowSize) {
        this.limit = limit;             // Max requests
        this.windowSize = windowSize;   // Time window in seconds
        this.users = new Map();
    }

    allowRequest(userId, timestamp) {
        // First request by this user
        if (!this.users.has(userId)) {
            this.users.set(userId, []);
        }

        const requests = this.users.get(userId);

        // Remove expired requests
        while (
            requests.length > 0 &&
            timestamp - requests[0] >= this.windowSize
        ) {
            requests.shift();
        }

        // Check limit
        if (requests.length < this.limit) {
            requests.push(timestamp);
            return true;
        }

        return false;
    }
};

const limiter = new RateLimiter(3, 10);

console.log(limiter.allowRequest("user1", 1));
console.log(limiter.allowRequest("user1", 2));
console.log(limiter.allowRequest("user1", 5));
console.log(limiter.allowRequest("user1", 6));
console.log(limiter.allowRequest("user1", 12));
console.log(limiter.allowRequest("user1", 13));