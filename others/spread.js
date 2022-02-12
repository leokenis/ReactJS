// ...spread operator
let arr = [1, 2, 3, 5, 8, 13, 21];

console.log (arr);
console.log (Math.max(arr));
console.log (Math.max(...arr));
console.log (...arr);

// Infinity
let array = [1, 2, 3, 5, 8, 13, Infinity, -Infinity];

console.log (array);
console.log (Math.max(array));
console.log (Math.max(...array));
console.log (...array);

// Create an object with spread
const obj = {
    ...arr,
}
console.log(obj);

// Concat array con spread
let numeros = [...arr, ...array];
console.log(numeros);