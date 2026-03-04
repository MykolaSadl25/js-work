// const name = "Mykola";
// const qwerty = "age"

// const userInfo = {
//     name,
//     lastName: "Sadlii",
//     [qwerty]: 15,
//     isStudent: true,
//     friends: ["Vlad","Maksim","Yaroslav","Dominika","Lucas","Yotam","Soala"],
//     cityLocation:"London",
// };

// console.log(userInfo.name);
// console.log(typeof(userInfo));



// console.log(userInfo.pool);

// console.log(userInfo.lastName);


// adding keys to object
// userInfo.location = "Madrid";
// console.log(userInfo);


// ways to log the key into the console
// console.log(userInfo.age);
// console.log(userInfo["age"]);


// changing value of the key
// userInfo.age = 1000;
// console.log(userInfo.age);


// deleting the key from object
// delete userInfo.cityLocation
// delete userInfo["friends"]
// console.log(userInfo);

// practice tasks

// 1. Створити пустий об’єкт myArray. Додати в властивості name, age, city, occupation. Замінити на вибір значення властивостей.

// const myArray = {};
// myArray.name = "Mykola";
// myArray.age = 15;
// myArray.occupation = "Programmer";
// myArray.age = 25;
// console.log(myArray);

// Присвоїти змінній apartment об'єкт, який описує квартиру з
// наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr - опис, значення "Spacious apartment in the city center";
//rating - рейтинг, значення 4;
//price - ціна, значення 2153;
//tags - метаінформація, масив ["premium", "promoted", "top"].


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr:"Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
}
console.log(apartment);

//Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// з інформацією про власника.Додай йому наступні властивості:
//name - ім'я власника, значення "Henry";
//phone - телефон, значення "982-126-1588";
//email - пошта, значення "henry.carter@aptmail.com".

apartment.owner = {
    name:"Henry",
    phone:"982-126-1588",
    email:"henry.carter@aptmail.com",
}
console.log(apartment);

// / Доповни код, присвоївши оголошеним змінним вирази звернення
// до відповідних властивостей об'єкта apartment.
//aptRating - рейтинг;
//aptDescr - опис;
//aptPrice - ціна;
//aptTags - теги.
const aptRating = apartment.rating;
console.log(aptRating);
const aptDescr = apartment.descr;
console.log(aptDescr);
const aptPrice = apartment.price;
console.log(aptPrice);
const aptTags = apartment.tags;
console.log(aptTags);

const myInfo = {
    name:"Mykola Sadlii",
    age: 15,
    bornIn: "Ukraine",
    livesIn: "London",
    hobbies:["Drawing","Coding","Lego","Sports"],
    isStudent: true,
    favouriteSubjects:["Art","Maths","ICT","English","Biology","Chemistry"],
}
console.log(myInfo);
