const chooseAns = prompt("Виберіть напій(кава, чай, сік)").trim().toLowerCase();
if (chooseAns === "кава") {
    console.log("Ви вибрали каву 🍵");
}
else if(chooseAns === "чай"){
    console.log("Ви вибрали чай 🫖");
}
else if(chooseAns === "сік"){
    console.log("Ви вибрали сік 🧃");
}
else{
    console.log("Ви не вибрали напій ❌");
}

const monthQuestion = prompt("Введіть номер місяця").trim();
if (monthQuestion >= 12 && monthQuestion <=2) {
    console.log("Зима ❄️");
}
else if (monthQuestion >= 3 && monthQuestion <= 5){
    console.log("Весна 🌷");
}
else if (monthQuestion >= 6 && monthQuestion <= 8){
    console.log("Літо ☀️");
}
else if (monthQuestion >= 9 && monthQuestion <= 11){
    console.log("Осінь 🍂");
}
else{
    console.log("Неправильний номер місяця ❌");
}

const dayQuestion = prompt("Введіть номер дня").trim();
if (dayQuestion >=1 && dayQuestion <=5) {
    console.log("Робочий день");
}
else if(dayQuestion >=6 && dayQuestion <= 7) {
    console.log("Вихідний");
}
else{
    console.log("Неправильний номер дня ❌");
    
}

const nameQuestion = prompt("Enter your name").trim().toUpperCase();
console.log(`Your name is ${nameQuestion}`);

const year = Number(prompt("Enter your year of birth"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Високосний рік");
} 
else {
  console.log("Звичайний рік");
}
