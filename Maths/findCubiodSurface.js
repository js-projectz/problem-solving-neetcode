/**
 * Find the surface area of a cuboid given its length, width and height.
 * @param {Array} userInput - An array containing the length, width and height of the cuboid as strings.
 * @returns {Number} The surface area of the cuboid.
 */

const findCuboidSurface = (userInput) => {

    const length = parseInt(userInput[0]);
    const width = parseInt(userInput[1]);
    const height = parseInt(userInput[2]);


    // formula for surface area of a cuboid is 2lw + 2lh + 2wh
    const surfaceArea = 2 * ((length * width) + (length * height) + (width * height));

    // formula for finding the volume of a cuboid is lwh
    const volume = length * width * height;

    return surfaceArea + " " + volume;

}

console.log(findCuboidSurface(["1", "2", "3"]));