function centimetersToKilometers(centimeters) {
    // 1 kilometer = 100,000 centimeters
    const kilometers = centimeters / 100000;
    return kilometers;
}

// Example usage:
const centimeters = 0.5; // 500,000 centimeters
const kilometers = centimetersToKilometers(centimeters);
console.log(centimeters + " centimeters" + " is equal to " + kilometers + " kilometers")

