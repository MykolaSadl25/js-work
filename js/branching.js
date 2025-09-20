// 6 значень які в boolean призводяться до false
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(null));


let number;
console.log(Boolean(number));

// Логічний оператор і (&&) повертає: якщо всі значення приводяться до true повертає останнє значення.Якщо десь знаходить false на ньому і  зупиняється/повертає

console.log(2 && 1 && "3");
console.log(4 && 0 && 5);

// const input = prompt("Your name");
// const myName = "Mykola";
// const result = myName && input && "Перевірку пройшли!";
// console.log(result);
// console.log(input);

// Логічний оператор або(||) повертає: перше true яке зустрів якщо всі значення привелись до false повертає останній false

console.log(20 || undefined);
console.log(0 || undefined);

const yourName = prompt("name");
const yourAge = prompt("age");
console.log(yourName || yourAge);
console.log(88 && ""|| 50 || 0);

// Логічний оператор не(!) перетворює булеве значення на протилежне
console.log(!Boolean(true));
console.log(99 && 21 || 125 && !false);
