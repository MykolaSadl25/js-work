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

