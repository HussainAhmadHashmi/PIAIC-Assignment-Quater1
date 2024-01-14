// Question 39: make a function cityCountry and return at least three values

function cityCountry(cityName:string= "Lahore" , countryNmae:string= "Pakistan") {
    return `${cityName}, ${countryNmae}`;
}

const formatted1 = cityCountry()
console.log(formatted1);

// Call your function with at least three city-country pairs, and print the value that’s returned.


const formatted2 = cityCountry("Mumbai", "India");
const formatted3 = cityCountry("New York", "USA");
console.log(formatted2);
console.log(formatted3);
