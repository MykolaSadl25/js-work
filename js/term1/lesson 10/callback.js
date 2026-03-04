function calc(callback, a, b) {
  return callback(a, b);
}

function add(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

function substract(a, b) {
  return `${a} - ${b} = ${a - b}`;
}

function multiply(a, b) {
  return `${a} x ${b} = ${a * b}`;
}

function divide(a, b) {
  return `${a} / ${b} = ${a / b}`;
}

console.log(calc(add, 151, 4));
console.log(calc(substract, 151, 4));
console.log(calc(multiply, 151, 4));
console.log(calc(divide, 153, 3));

// Колбек: найкорочше слово у масіві

let names = ["Mykola", "Nazar", "Maksim", "Vlad", "Yaroslav"];

function convertArray(array, callback) {
  return callback(array);
}
function findSmallestWord(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < array[0].length) {
      min = array[i];
    }
  }
  return `Shortest name is ${min}`;
}
console.log(convertArray(names, findSmallestWord));

//// Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції

function transformArray(callback,array,number) {
    return callback(array,number);
}

const number = [1,2,3,4,5,6,7,8,9,10];
const multiplier = 3;

function multiplyArray(array,multiplyBy) {
    const multipliedNumbers = []
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = array[i] * multiplyBy;
        multipliedNumbers.push(result);
    }
    return multipliedNumbers;
}
console.log(transformArray(multiplyArray,number,multiplier));
