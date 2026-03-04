// console.dir(Math)

// const max = Math.max(1, 2, 3, 4, 5);
// console.log(max);

// const min = Math.min(1, 2, 3, 4, 5);
// console.log(min);

// const squareNumber = Math.pow(25, 3);
// console.log(squareNumber);

// const decimal = Math.floor(12.34);
// console.log(decimal);

// const ceil = Math.ceil(12.9);
// console.log(ceil);

// const round = Math.round(12.34);
// console.log(round);

// const squareRoot = Math.sqrt(36);
// console.log(squareRoot);

// const maxNumber = 100;
// const minNumber = 10;
// const random = Math.round(Math.random()* (maxNumber - minNumber) + minNumber);
// console.log(random);

// const btnRef = document.querySelector("button");
// console.log(btnRef);
// btnRef.addEventListener("click", ()=>{
//     const r = Math.round(Math.random()* (255 - 1) + 1);
//     const g = Math.round(Math.random()* (255 - 1) + 1);
//     const b = Math.round(Math.random()* (255 - 1) + 1);
//     console.log(r, g, b);
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// });

// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних.  Значення площі повинно зберігається в числовій змінній.

const height = "23cm";
const width = "10cm";
const area = parseInt(height) * parseInt(width); 
console.log(area);
const isEqual1 = 0 == false;
console.log(isEqual1);
const isEqual2 = 0 !== false;
console.log(isEqual2);
const isEqual3 = '12' == 12;
console.log(isEqual3); 
const isEqual4 = '12' === 12;
console.log(isEqual4);
// 3. За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)

const bigNumber = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
console.log(bigNumber);
const smallNumber = Math.min(2, 34, 99, 3, 22, 36, 733, 18)
console.log(smallNumber);


