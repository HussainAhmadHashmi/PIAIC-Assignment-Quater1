"use strict";
// Question 44: Write a function, orderSandwich(items: string[]), to summarize sandwich orders. Call it three times with different item arrays summary.
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please choose some items.");
    }
    else {
        console.log("Sandwich Summary:");
        for (const sandwich of items) {
            console.log(`- ${sandwich} `);
        }
        console.log("Enjoy your sandwich!");
    }
}
// Calling
orderSandwich();
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
