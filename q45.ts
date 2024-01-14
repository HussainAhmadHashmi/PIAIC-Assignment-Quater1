// Question 45: Car Information Function
function carInfo(manufacturer: string, modelName: string, options: Record<string, any>): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer,
        modelName,
        ...options
    };
    return car;
}

// Example Usage
const carDetails = carInfo('Toyota', 'Camry', { color: 'Blue', year: 2022 });
console.log(carDetails);
