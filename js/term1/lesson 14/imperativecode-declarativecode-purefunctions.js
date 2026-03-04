// imperative code
// const filteredArray = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         filteredArray.push(arr[i]);
//     }
// }
//     console.log(filteredArray);

// declarative code
// const filteredArray = arr.filter((num)=> num > 5);
// console.log(filteredArray);

// array.method((item, idx, arr)=> item)

// const arr = [1, 3, 5, 7, 9, 11];

// methods
// array.forEach - перебирає кожен елемент масиву і виконує функцію для кожного елемента, але нічого не повертає
// arr.forEach((item,i,array)=>{
//     console.log("Array element:",item,"Array index:",i,"Outcome array:",array);
// });

// example
// const dataArray = [
//   {
//     id: 101,
//     name: "Олег",
//     isActive: true,
//   },
//   {
//     id: 102,
//     name: "Марія",
//     isActive: false,
//   },
//   {
//     id: 103,
//     name: "Віктор",
//     isActive: true,
//   },
//   {
//     id: 104,
//     name: "Тетяна",
//     isActive: true,
//   },
//   {
//     id: 105,
//     name: "Андрій",
//     isActive: false,
//   },
// ];


// dataArray.forEach((item)=> console.log(item));


// array.map - переберає, повертає новий масив де до кожного елементу шось застосує
// const arrMap = arr.map((item) => item*10);
// console.log(arrMap);

// example
// const namesArray = dataArray.map((item)=> {
//     return item.name
// })
// console.log(namesArray);


// array.filter - проходить по масиву і повертає новий масив тільки з тими елементами, які пройшли умову
// const arrFilter = arr.filter((item)=> item >= 5);
// console.log(arrFilter);

// example
// const activeFilter = arr.filter((item) => item.isActive);
// console.log(activeFilter);

// array.find() - шукає перший елемент, який задовольняє умову, і повертає саме його. Якщо нічого не знайде — поверне undefined.

// example
// const findElement = dataArray.find((item)=> item.name === "Віктор");
// console.log(findElement);
// const findNumber = arr.find((item)=> item === 3);
// console.log(findNumber);

// const users = [

//   {

//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',

//     name: 'Moore Hensley',

//     email: 'moorehensley@indexia.com',

//     eyeColor: 'blue',

//     friends: ['Sharron Pace'],

//     isActive: false,

//     balance: 2811,

//     skills: ['ipsum', 'lorem'],

//     gender: 'male',

//     age: 37,

//   },

//   {

//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',

//     name: 'Sharlene Bush',

//     email: 'sharlenebush@tubesys.com',

//     eyeColor: 'blue',

//     friends: ['Briana Decker', 'Sharron Pace'],

//     isActive: true,

//     balance: 3821,

//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],

//     gender: 'female',

//     age: 34,

//   },

//   {

//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',

//     name: 'Ross Vazquez',

//     email: 'rossvazquez@xinware.com',

//     eyeColor: 'green',

//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],

//     isActive: false,

//     balance: 3793,

//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],

//     gender: 'male',

//     age: 24,

//   },

//   {

//     id: '249b6175-5c30-44c6-b154-f120923736f5',

//     name: 'Elma Head',

//     email: 'elmahead@omatom.com',

//     eyeColor: 'green',

//     friends: ['Goldie Gentry', 'Aisha Tran'],

//     isActive: true,

//     balance: 2278,

//     skills: ['adipisicing', 'irure', 'velit'],

//     gender: 'female',

//     age: 21,

//   },

//   {

//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',

//     name: 'Carey Barr',

//     email: 'careybarr@nurali.com',

//     eyeColor: 'blue',

//     friends: ['Jordan Sampson', 'Eddie Strong'],

//     isActive: true,

//     balance: 3951,

//     skills: ['ex', 'culpa', 'nostrud'],

//     gender: 'male',

//     age: 27,

//   },

//   {

//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',

//     name: 'Blackburn Dotson',

//     email: 'blackburndotson@furnigeer.com',

//     eyeColor: 'brown',

//     friends: ['Jacklyn Lucas', 'Linda Chapman'],

//     isActive: false,

//     balance: 1498,

//     skills: ['non', 'amet', 'ipsum'],

//     gender: 'male',

//     age: 38,

//   },

//   {

//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',

//     name: 'Sheree Anthony',

//     email: 'shereeanthony@kog.com',

//     eyeColor: 'brown',

//     friends: ['Goldie Gentry', 'Briana Decker'],

//     isActive: true,

//     balance: 2764,

//     skills: ['lorem', 'veniam', 'culpa'],

//     gender: 'female',

//     age: 39,

//   },

// ];


const users = [

  {

    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',

    name: 'Moore Hensley',

    email: 'moorehensley@indexia.com',

    eyeColor: 'blue',

    friends: ['Sharron Pace'],

    isActive: false,

    balance: 2811,

    skills: ['ipsum', 'lorem'],

    gender: 'male',

    age: 37,

  },

  {

    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',

    name: 'Sharlene Bush',

    email: 'sharlenebush@tubesys.com',

    eyeColor: 'blue',

    friends: ['Briana Decker', 'Sharron Pace'],

    isActive: true,

    balance: 3821,

    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],

    gender: 'female',

    age: 34,

  },

  {

    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',

    name: 'Ross Vazquez',

    email: 'rossvazquez@xinware.com',

    eyeColor: 'green',

    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],

    isActive: false,

    balance: 3793,

    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],

    gender: 'male',

    age: 24,

  },

  {

    id: '249b6175-5c30-44c6-b154-f120923736f5',

    name: 'Elma Head',

    email: 'elmahead@omatom.com',

    eyeColor: 'green',

    friends: ['Goldie Gentry', 'Aisha Tran'],

    isActive: true,

    balance: 2278,

    skills: ['adipisicing', 'irure', 'velit'],

    gender: 'female',

    age: 21,

  },

  {

    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',

    name: 'Carey Barr',

    email: 'careybarr@nurali.com',

    eyeColor: 'blue',

    friends: ['Jordan Sampson', 'Eddie Strong'],

    isActive: true,

    balance: 3951,

    skills: ['ex', 'culpa', 'nostrud'],

    gender: 'male',

    age: 27,

  },

  {

    id: '150b00fb-dd82-427d-9faf-2879ea87c695',

    name: 'Blackburn Dotson',

    email: 'blackburndotson@furnigeer.com',

    eyeColor: 'brown',

    friends: ['Jacklyn Lucas', 'Linda Chapman'],

    isActive: false,

    balance: 1498,

    skills: ['non', 'amet', 'ipsum'],

    gender: 'male',

    age: 38,

  },

  {

    id: 'e1bf46ab-7168-491e-925e-f01e21394812',

    name: 'Sheree Anthony',

    email: 'shereeanthony@kog.com',

    eyeColor: 'brown',

    friends: ['Goldie Gentry', 'Briana Decker'],

    isActive: true,

    balance: 2764,

    skills: ['lorem', 'veniam', 'culpa',[1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15]],

    gender: 'female',

    age: 39,

  },

];

// Отримати користувача (не масив) по email (поле email, він унікальний).
const getUserWithEmail = (users, email) => users.find((item)=> item.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

const every = users.every((item)=> item.age >= 20);
console.log(every);

const some = users.some((item)=> item.age >= 50);
console.log(some);
const skill = users.flatMap((item) => item.skills).flat(2);
console.log(skill);

const usually = skill.filter((item,index,arr)=> arr.indexOf(item)=== index);
console.log(usually);

const a = usually.map((item)=>`<p>${item}</p>`);
console.log(a);
document.body.append(...a)
