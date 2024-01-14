"use strict";
// Question 45: Car Information Function
function carInfo(manufacturer, modelName, options) {
    const car = Object.assign({ manufacturer,
        modelName }, options);
    return car;
}
// Example Usage
const carDetails = carInfo('Toyota', 'Camry', { color: 'Blue', year: 2022 });
console.log(carDetails);
