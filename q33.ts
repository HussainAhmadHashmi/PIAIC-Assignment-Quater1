// Question : print an array with loop and output in ordinary numbers and every output in a seperate line

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of number) {
    let ordinary: string;

    if (num === 1) {
        ordinary = 'st';
    } else if (num === 2) {
        ordinary = 'nd';
    } else if (num === 3) {
        ordinary = 'rd';
    } else {
        ordinary = 'th';
    }

    console.log(`${num}${ordinary}`);
}
