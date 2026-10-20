/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {

    // distance = [1, 2, 3, 4], start = 0, destination = 3
    let totalDistance = 0;
    let clockwiseDistance = 0;

    for (let i = 0; i < distance.length; i++) {
        totalDistance += distance[i];
    }

    let current = start;
    while (current !== destination) { // 0 !== 3
        clockwiseDistance += distance[current];
        current = (current + 1) % distance.length; // this is to make sure that we are not going out of bounds of the array
    }
    return Math.min(clockwiseDistance, totalDistance - clockwiseDistance); // this is to make sure that we are returning the minimum distance
};
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
