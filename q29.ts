// Question 29: : Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

const favoriteFruits: string[] = ['banana', 'apple', 'orange'];

if (favoriteFruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favoriteFruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favoriteFruits.includes('orange')) {
    console.log('You really like oranges!');
}
if (favoriteFruits.includes('grape')) {
    console.log('You really like grapes!');
} else {
    console.log('Grapes are not in your favorite fruits.');
}
if (favoriteFruits.includes('kiwi')) {
    console.log('You really like kiwis!');
} else {
    console.log('Kiwis are not in your favorite fruits.');
}
