// function fo(parameters) {

// }

// fo(arguments)

// const add = function (a,b) {
//  return a+b
// }

// const arrowAdd = (a,b) => a + b;

// console.log(arrowAdd(12,46));

// const arr = [6,5,2,4,1,3,45,63,2];
// const sumArr = (array) => {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//        result += array[i]
//     }
//     return result
// }
// console.log(sumArr(arr));

// const logItems = () => {
//     return "hello world"
// }
// console.log(logItems());
// ;

// const testRes = array => array.reduce((acc,item)=> acc + item,0);
// console.log(testRes(arr));

// function fo() {
//   console.log(arguments);
// }
// console.log(fo(1, 3, 1, 4, 54, 6, 465, 4, 89, 49, 46, 54, 984, 6546, 456));

// const foo = (...args) => {
//   console.log(args);
// };
// console.log(foo(1, 3, 1, 4, 54, 6, 465, 4, 89, 49, 46, 54, 984, 6546, 456));

// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";
const findLogin = (loginList, login) => {
  let message = "";
  if (!loginList.includes(login)) {
    message = `Користувач ${login} не знайдено.`;
  } else if (loginList.includes(login)) {
    message = `Користувач ${login} знайдено.`;
  }

  return message;
};
console.log(findLogin(logins, loginToFind));

// Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).

const findSmallesNumber = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min;
}

const findSmallNum = (array) => Math.min(...array);

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
console.log(findSmallNum([3, 8, 12, -2, 15])); // -2
console.log(findSmallNum([100, 54, 8, 12, 47])); // 8
console.log(findSmallNum([7, 21, 84, 15, 4])); // 4