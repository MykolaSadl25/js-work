// const array = [12,24,36,48,51,67,72,89,95,1000,2000,3000,5000,10000000,400000000];
// console.log("length of array", array.length);

// array.length = 5;
// console.log(array);
// console.log(array[8]);

// array[0] = "qwerty"
// console.log(array[0]);

// console.log(array);
// console.log(array[array.length - 1]);

// for(let i = 0; i < array.length; i +=1){
//     console.log("position", i+ 1, "значення", array[i]);
// }

// for(const num of array){
//     if(num === 1000){
//         continue;
//     }
//     console.log(num)
// }

//  2. Пошук першого парного числа

// let numbers = [1, 3, 7, 4, 9];
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] % 2 !== 0){
//         continue;
//     }
//     console.log(numbers[i]);
// }

// 5. Порахувати тільки додатні числа

// let numbers = [5, -3, 8, -11, 10];
// let sum = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < 0) {
//         continue;
//     }
//     sum += numbers[i];  
// }
// console.log(sum);

//  const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//  cart[cart.length -1] = 50;
//  console.log(cart);
  
const arr = [1,3,5,6,7 ,"12", 5, "34"];
let result = 0;
for(let i = 0; i < arr.length; i += 1){
    if (typeof arr[i] === "string") {
        continue; 
    }
    result += arr[i];
} 
console.log(result);