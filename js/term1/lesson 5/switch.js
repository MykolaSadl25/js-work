// let myName = "Mykola";
// if (10 > 5){
//     let myName = "Sadlii";
//     console.log(myName);
// }

// console.log( myName);

// if (10 > 5){
//     let myName = "Sadlii";
// }
// console.log( myName);

// let myName = "Sadlii";

// if (10 > 5){
//     console.log( myName);
// }

// let myName = "Sadlii";
// if (10 > 5){
//     myName = "Nazar";
// }
// console.log( myName);

// let myName = "Sadlii";
// if (10 > 5){
//     myName = "Karina"
//     myName = "Nazar";
//     console.log(myName);

//     if (10 > 3) {
//         let myName = "Bogdan";
//         myName = "Alina"
//         console.log(myName);

//     }
// }
// console.log( myName);

// let count = 0;
// count = 10;
// if (true) {
//     count = 1;
//     count = 20;
//     console.log(count);
// }
// console.log(count);

// let name = "rrrrrr";
// name = "ssssss"
// if (name) {
//     const name ="tttttttttttt"
//     name = "ffffffff";
//     console.log(name);
// }
// console.log(name);
// console.log(uraaa);

// створіть зміну type не призначая їй нічого
// створіть зміну age і призначте їй 21
// перевірте age більше 18, якщо так призначте змінній type рядок adalt, у інакшому випадку призначте змінній type рядок child.
// виведіть у консоль type

// let type;
// let age = Number(prompt("Enter your age..."));
// if (age > 18){
//     type = "adult";
// }
// else{
//     type = "child";
// }
// console.log(type);

// let type = "child";
// let age = Number(prompt("Enter your age..."));
// if (age > 18){
//     type = "adult";
// }
// console.log(type);

// // Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.

// const userStars = Number(prompt("Виберіть кількість зірок"));
// switch (userStars) {
//     case 1:
//         alert("Вартість номеру 20$")
//         break;
//     case 2:
//         alert("Вартість номеру 30$")
//         break;
//     case 3:
//         alert("Вартість номеру 50$")
//         break;
//     case 4:
//         alert("Вартість номеру 70$")
//         break;
//     case 5:
//         alert("Вартість номеру 120$")
//         break;
//     default:
//         alert("Такої кількості зірок немає")
//         break;
// }

//1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:

// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонит менеджер'.

// const userOption = Number(prompt("Оберіть тип доставки товару:"));
// const collect = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
// const delivery = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
// const post = "Посилка буде відправлена сьогодні";
// const contact = "Вам передзвонит менеджер";
// switch (userOption) {
//     case 1:
//         console.log(collect);
//         break;
//     case 2:
//         console.log(delivery);
//         break;
//     case 3:
//         console.log(post);
//         break;
//     default:
//         console.log(contact);
//         break;
// }

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

// const day = prompt("Enter day of the week").toLowerCase().trim();
// switch (day) {
//     case "monday":
//         alert("It's a working day,unfortunately")
//         break;
//     case "tuesday":
//         alert("It's a working day,unfortunately")
//         break;
//     case "wednesday":
//         alert("It's a working day,unfortunately")
//         break;
//     case "thursday":
//         alert("It's a working day,unfortunately")
//         break;
//     case "friday":
//         alert("It's a working day,unfortunately")
//         break;
//     case "saturday":
//         alert("It's a weekend,yaaay")
//         break;
//     case "sunday":
//         alert("It's a weekend,yaaay")
//         break;
//     default:
//         alert("Wrong day mate")
//         break;
// }

// const day = prompt("Enter day of the week").toLowerCase().trim();
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     alert("It's a working day,unfortunately");
//     break;
//   case "saturday":
//   case "sunday":
//     alert("It's a weekend,yaaay");
//     break;
//   default:  
//     alert("Wrong day mate");
//     break;
// }

// //Змінна lang може приймати 4 значення: 'ua', 'en', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// let lang = "ua".toLowerCase();
// let result = "";
// switch (lang) {
//     case "fr":
//         result = "Janvier";
//         break;
//     case "ua":
//         result = "Січень";
//         break;
//     case "en":
//         result = "January";
//         break;    
//     default:
//         result = "Не правильна мова" 
//         break;
// }
// console.log(result);

const a = Number(prompt("Перше число:"));
const b = Number(prompt("Друге число:"));
const op = prompt("Операція (+ - * /):");
switch (op) {
    case "+":
        console.log(`${a} + ${b} = ${a+b}`);
        break;
    case "-":
        console.log(`${a} - ${b} = ${a-b}`);
        break;
    case "*":
        console.log(`${a} * ${b} = ${a*b}`);
        break;
    case "/":
        if(b === 0){
            console.log("You cannot devide by zero");
            break
        }
        console.log(`${a} / ${b} = ${a/b}`);
        break;
    default:
        console.log("Error");
        break;
}