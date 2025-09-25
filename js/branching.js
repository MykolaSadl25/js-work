// 6 значень які в boolean призводяться до false
// console.log(Boolean(""));
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(null));


// let number;
// console.log(Boolean(number));

// Логічний оператор і (&&) повертає: якщо всі значення приводяться до true повертає останнє значення.Якщо десь знаходить false на ньому і  зупиняється/повертає

// console.log(2 && 1 && "3");
// console.log(4 && 0 && 5);

// const input = prompt("Your name");
// const myName = "Mykola";
// const result = myName && input && "Перевірку пройшли!";
// console.log(result);
// console.log(input);

// Логічний оператор або(||) повертає: перше true яке зустрів якщо всі значення привелись до false повертає останній false

// console.log(20 || undefined);
// console.log(0 || undefined);

// const yourName = prompt("name");
// const yourAge = prompt("age");
// console.log(yourName || yourAge);
// console.log(88 && ""|| 50 || 0);

// Логічний оператор не(!) перетворює булеве значення на протилежне
// console.log(!Boolean(true));
// console.log(99 && 21 || 125 && !false);

// if (вираз який має визначати true або false){
// якщо вираз приведено до true то заходить в тіло if
// }

//  if (true){
//     console.log("yay");
//  }
 
//  if (false){
//     console.log("yay");
//  }

//  const age = 18;
//  const userAge = Number(prompt("How old are you?"));
//  console.log(userAge);
//  console.log(typeof userAge);

//  if (userAge >= age){
//     console.log("Access granted");
//  }
// else {
//     console.log("Access denied");
// }
 
// const userAge = Number(prompt("How old are you?"));
// let result = "";
// if (userAge < 18){
//     result = "You are too young:(";
// }
// else if (userAge >= 18 && userAge < 60){
//     result = "You are an adult,congrats!";
// }
// else{
//     result = "You are old";
// }
// console.log(result);

// const result2 = (5 > 10) ? "Yes":"No";
// console.log(result2);

// if ("0") {
//  console.log( 'Привіт' );
// }

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// if (!isOnline && !isDnd && isFriend){
//     console.log("access granted");
    
// }

// Напиши скрипт перевірки підписки користувачапід час доступу до контенту. Єтри типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.

// const userSubscription = prompt("What type of subscription fo you have(free, pro or vip)").trim() .toLowerCase();
// if (userSubscription === "free"){
//     console.log("You need to have Pro or VIP to access");
// }
// else{
//     console.log("Access granted");
// }

// Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).
// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount

//  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
//  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'

let totalSpent = 2000;
let payment = 100; 
let discount = 0;
if (totalSpent > 100 && totalSpent < 1000){
    discount = 2;
    console.log("Бронзовий партнер, знижка 2%");
}
else if( totalSpent >=1000 && totalSpent < 5000){
    discount = 5;
    console.log("Срібний партнер, знижка 5%");
}
else if(totalSpent >5000){
    discount = 10;
    console.log("Золотий партнер, знижка 10%");
}
else{
    discount = 0;
    console.log("У вас ще немає партнерської знижки");
}
console.log(totalSpent);
