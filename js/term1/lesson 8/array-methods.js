// console.dir(Array)

// const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum libero pariatur nostrum quod eos. Quas recusandae, perferendis, dignissimos aut delectus facilis vel distinctio mollitia, cupiditate at officiis esse reiciendis";

// // const newString = string.split("");
// const newString = string.split("");
// console.log(newString);
// const fullString = newString.join("");
// console.log(fullString);

//Задача

//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуємо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework
// const title = "Top 10 Benefits Of React Fremework";
// const slugTitle = title.toLowerCase().split(" ").join("-")
// const smallTitle = title.toLowerCase();
// const arrayTitle = smallTitle.split(" ")
// const dashedTitle = arrayTitle.join("-");
// console.log(slugTitle);

// const arr = [1, 2, 3, 4, 5, 5, 5, 8, 9, 10];
// const findIndex = arr.indexOf(11);
// console.log(findIndex);
// const findCharacter = arr.includes(1);
// console.log(findCharacter);

//Задача 3
// створити масив гравців, додати до кожного гравця N, де n це порядковий номер.
// Наприклад "Polly" => "Polly-1"
// const userGames = ["Mango", "Polly", "Ajaks"];
// for (let i = 0; i < userGames.length; i+= 1) {
//     console.log(`${userGames[i]} - ${i + 1}`);
    
// }

// Умова: У масиві є слова. Потрібно знайти індекс першого входження слова "яблуко".
// const fruits = ['банан', 'яблуко', 'груша', 'яблуко'];
// const index = fruits.indexOf('яблуко');
// console.log(index);

// Умова: Якщо в масиві немає заданого елемента, поверни повідомлення "Не знайдено".

// const colors = ["червоний", "зелений", "синій"];
// const colorToFind = "жовтий";
// const isColor = colors.includes(colorToFind);
// if (!isColor) {
//     alert("Не знайдено");
    
// }
const array = [1, 2, 3, 4, 5];
array.push(180,1,2,3,4,5);
array.unshift("hello");
const firstElem = array.shift();
array.shift()
array.shift()
const lastElem = array.pop();
array.pop()
array.pop()
console.log(firstElem);
console.log(lastElem);
console.log(array);
