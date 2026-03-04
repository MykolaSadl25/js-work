// console.dir(String);
const myName = "Mykola dqasd";
console.log(myName[myName.length - 1]);
console.log(myName.length);

const userName = "Mykola";
const lastName = "Sadlii";
// no uses it lol
const fullName = userName + " " + lastName;
console.log(fullName);

const fullName2 = `Hello my name is ${userName}, my surname is ${lastName}.Nice to meet you`;
console.log(fullName2);

const message = "Hola,me IIamo Mykola tengo quince anos.Hablo por Espanol y me gusta sitios web de programación"; 
const lowerMessage = message.toLowerCase();
console.log(lowerMessage);
const upperMessage = message.toUpperCase();
console.log(upperMessage);

// const userLogIn = "mykola";
// const inputLogIn = prompt("Enter your log in details").toLowerCase().trim();
// console.log(userLogIn === inputLogIn);


const result = "I don't what to write man";
console.log(result[0]);
console.log(result.charAt(result.length - 1));


const iDontKnow = "Lorem ipsum dolor adipisicing sit amet consectetur adipisicing elit. Laborum, rem.";
console.log(iDontKnow.indexOf("adipisicing"));
console.log(iDontKnow.includes("jole"));
console.log(iDontKnow.startsWith("Lorem ipsum dolor"));
console.log(iDontKnow.endsWith(", rem."));

let number = "7";
const agent = number.padStart(10, "0");
console.log(agent);
const phoneNumber = "0931234567";
const formatingNumber =  phoneNumber.padStart(15, "+(38)");
// +(38)0931234567
console.log(formatingNumber);

const lastNames = "Sadliy";
const correctName = lastNames.replace(lastNames[5],"i");
console.log(correctName);

const language = "JavaScript";
const javaResult = language.substring(0,4);
console.log(javaResult);

const lorem = "Lorem ipsum dolor adipisicing sit amet consectetur";
const loremResult = lorem.slice(0,17);
console.log(loremResult);

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(), перетворити рядок у верхній регістр та вивести результат в консоль.

const myFullName = "Mykola Sadlii";
const upperName = myFullName.toUpperCase();
console.log(upperName);

// Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

// const niceMessage = prompt("Enter your name please");
// const trimmedMessage = niceMessage.trim();
// console.log(trimmedMessage);
// console.log(`Your name is ${trimmedMessage}`);

// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.

const yourFullName = "Mykola Sadlii";
const indexName = yourFullName.indexOf(" ");
console.log(indexName);

// Створити разом з учнями скрипт, який буде отримувати від користувача число (кількість хвилин) і буде виводити рядок в форматі часу як результат. Наприклад 80 виведе 01:20 450 - 07:30. Можете використати наступні формули
  const totalMinutes = Number(prompt("Enter amount of minutes"));
  const numberHours = totalMinutes / 60;
  const days = Math.floor(numberHours / 24);
  const hours = Math.floor(numberHours % 60);
  const modHours = String(hours).padStart(2, 0);
  const minutes = totalMinutes % 60;
  const modMinutes = String(minutes).padStart(2, 0);
  console.log(`${hours}:${minutes}`);
  
