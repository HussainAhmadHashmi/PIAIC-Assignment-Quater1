"use strict";
// Question 25: if chaining of exercise 25, 26
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_color = void 0;
exports.alien_color = ['green', 'yellow', 'red'];
if (exports.alien_color[0]) {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (exports.alien_color[1]) {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (exports.alien_color[2]) {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Wrong Query!.");
}
