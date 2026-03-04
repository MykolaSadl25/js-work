const array = [1,2,3,4,5,6,7,8,9,0];
const copy = array.slice(2, array.length - 1);
console.log(array, copy);

// =======================================

const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];
const result = b.concat(a,c);
console.log(result);

// =======================================

const arr = [1,2,3,4,5,6,7,8,9,10];
const arrCopy = arr.slice();
// видалення елементів splice(початковий індекс, кількість елементів)
const deleteNumber = copy.splice(3,3);
console.log(deleteNumber);
console.log(copy);

const randomArray = [123,156,13212,411,45,666,452,1524,855,];
const findIndex = randomArray.indexOf(666);
randomArray.splice(findIndex,1)
console.log(randomArray);

// Додавання елементів в масив splice(початковий індекс , 0-нічого не видаляємо , те що хочемо додати 123,456,789)
randomArray.splice(5, 0,"qwerty",100000,50123,123);
console.log(randomArray);
// заміна з видаленням елементу-тів
randomArray.splice(2, 3, 10,20,30) 
console.log(randomArray);

//Задача 1 Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.

const styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles.splice(1,0,"Classic");
console.log(styles);

// Створіть масив фруктів, для якого:
// 1) За допомогою методів масиву видаліть спочатку та скінця по фрукту,
// на їхнє місце додати нові фрукти.
//  2) Видалити 3 елемент, та на його місце вставити декілька інших фруктів використовуючи метод splice;

const fruits = ["apple", "banana", "orange", "watermelon"];
fruits.pop();
fruits.push("kiwi")
fruits.shift();
fruits.unshift("Mango");
fruits.splice(3,1,"papaya")
console.log(fruits);
