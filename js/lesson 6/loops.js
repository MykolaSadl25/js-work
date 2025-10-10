// for

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

// for(let i = 0; i <= 10; i += 1){
//     if (i === 5) {
//         continue; // пропуск ітерації
//     }
//     console.log(i);
// }

// const message = "i love frontend";
// console.log(message[0]);
// for (let i = 0; i < message.length; i += 1){
//     console.log(message[i]);
// }

// for(let i = 0; i <= 10; i += 1){
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// const message = "i love java script";
// for(let a = 0; a < message.length; a += 1){
//     if (message[a] === " ") {
//         continue;
//     }
//     console.log(message[a]);
// }

// Сума чисел від 1 до 100
// let sum = 0;
// for(let i = 1; i <= 100; i += 1){
//     sum += i;
//     console.log(sum);
// }

// for(let i = 0; i <= 10; i += 1){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// 6. Зворотній відлік від 10 до 1

// for(let i = 10; i >= 1; i -= 1){
//     console.log(i);
// }

// while

//Задача 1: Вивести числа від 1 до 5 (while)

// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i -= 1;
// }

// for(let i = 0; i < 18; i += 1){
//     console.log(i);
    
// }

//Задача 3: Порахувати суму чисел від 1 до 10 (while)

// let i = 0;
// let sum = 0;
// while (i <= 10){
//     sum += i;
//     console.log(i += 1); 
// }
// console.log(sum);

// Задача 4: Ввести число більше 10 (do...while)

// let num;
// do{
//     num = Number(prompt("Enter number bigger than 10"));
// } while(num <= 10){
//     console.log(num);
// }
//Задача: Запросити у користувача число більше 0 та зробити перевірку на не число

// let number;
// do{
//     number = Number(prompt("Enter number bigger than 0"));
// } while(number <= 0 ||  isNaN(number)){
//     console.log(number);
// }

// попросити у користувача ввести номер телефону і якщо довжина номеру телефону менша, або більша за 10, обробити помилки

let userPhone;
do {
     userPhone = prompt("Enter your phone number").trim();
      if (userPhone === null) {
        alert("Error:Cancelled");
        break;
     }
     if (userPhone.length < 10 || userPhone.length > 10) {
        alert("Error: Number is too long or short");
        break;
     }
     if (userPhone.length === 10 && !isNaN(userPhone)) {
        alert("Phone number verified");
        break;
     }
} while (true)
    console.log(userPhone);
    

// let user = prompt("Enter number");
// console.log(user);
