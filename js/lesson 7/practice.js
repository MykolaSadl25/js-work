// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr[2][0]);

// Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// console.log(smallestNumber);
// for(let i = 0; i < numbers.length; i += 1){
//    if (smallestNumber > numbers[i]) {
//     smallestNumber = numbers[i];
//    }
// }
// console.log(smallestNumber);

// const phoneNumbers = [
//   "(+380) 50 123 45 67",
//   "(+380) 67 111 22 33",
//   "(+380) 93 123 48 90",
//   "(+380) 99 100 20 30",
//   "(+380) 66 123 49 99",
//   " 73 123 45 55",
//   "(+380) 68 111 22 55",
//   "(+380) 95 123 43 21",
//   "(+380) 97 123 48 76",
//   " 63 123 47 65",
//   "(+380) 96 123 45 43",
//   "(+380) 98 123 42 10",
//   " 67 123 46 78",
//   "(+380) 91 234 56 78",
//   "(+380) 92 345 67 89",
// ];
// for(let i = 0; i < phoneNumbers.length; i += 1){

//     if (phoneNumbers[i].length < 19) {
//         phoneNumbers[i]= phoneNumbers[i].padStart(19, "(+380)");
//         console.log(phoneNumbers[i]);
//     }
// }

// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let result = 0;
// for (let i = 0; i < array1.length; i += 1) {
//     result += array1[i] 
// }
// for (let i = 0; i < array2.length; i += 1) {
//     result += array2[i] 
// }
// console.log(result);


const mixedArray = [
  42,
  "Hello",
  123,
  "World",
  7,
  "JavaScript",
  2025,
  "Ukraine",
  56,
  "Phone",
  999,
  "Array",
  18,
  "Code",
  77
];

let result2 = 0;
for (let i = 0; i < mixedArray.length; i += 1) {
    if (typeof(mixedArray[i]) === "string") {
        continue;
    }
    else{
        result2 += mixedArray[i]
    }
}
console.log(result2);