"use strict";
// Question 26: Make a function describe cites and print country name along with it and 1 city is in default 
function describeCites(cityName = "Lahore", countryNmae = "Pakistan") {
    console.log(`Such as "${cityName}" in ${countryNmae}`);
}
describeCites();
describeCites("Mumbai", "India");
describeCites("London", 'England');
