const userInfo = {
    name: "Mykola",
    lastName:"Sadlii",
    age: 14,


    getName(){
        return this.name
    },

    changeName(newName){
        return this.name = newName
    },
    findAge(){
        return this.age
    },

    setAge(){
        return this.age = newAge
    }
}

console.log(userInfo.changeName("Vlad"));


// PRACTICE TIMEEEE

//Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// const person = {
//     name:"Maksim Pocoyogolic",
//     age: 14,
//     gender:"male",

//     getInfo(){
//         return `${this.name} is ${this.age} year old ${this.gender}`
//     },
//     changeName(){
//         const newName = prompt("Enter name of your pocoyogolic friend :)")
//         this.name = newName;
//         this.age = 12;
//         this.gender = "female"
//         return `${this.name} Pocoyogolic is ${this.age} year old ${this.gender}`
//     }
// }
// console.log(person.getInfo());
// console.log(person.changeName());

// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

const book = {
    title:"Математика 10 клас",
    author:"І. В. Гавриш, С. О. Доценко, О. А. Горьков, С. Б. Скиба",
    year: 2025,
    genre: "Пекло для школяра",
    updateDetails(newTitle,newAuthor,newYear,newGenre){
        this.title = newTitle;
        this.author = newAuthor;
        this.year = newYear;
        this.genre = newGenre;
    }
}
book.updateDetails("Macbeth","William Shakespeare",1623,"Tragedy")
console.log(book);

// // Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating", зробіть перевірку на змінення рейтингу, рейтинг у межах від 0 до 5.

const restaurant = {
    name: "La Piazza",
  cuisine: "італійська",
  address: "вул. Смаколиків, 12, м. Київ",
  rating: 4.7,
  changeDetails(newAddress,newRating){
    this.address = newAddress;
    if (newRating >=0 && newRating <= 5) {
        this.rating = newRating;
    }
  }
}
restaurant.changeDetails("вул.Лесі Українки 25, м. Хмельницький", 5);
console.log(restaurant);

const car = {
    brand: "bmw",
    model: "m3",
    year: 2015,
    color: "black", 
    updateCar(){
        const newBrand = prompt("Enter car brand");
        if (newBrand) {
            this.brand = newBrand;
        }
        const newModel = prompt("Enter model");
        if (newModel) {
            this.model = newModel;
        }
        const newYear = prompt("Enter year");
        if (newYear) {
            this.year = newYear;
        }
        const newColor = prompt("Enter color");
        if (newColor) {
            this.color = newColor;
        }

    }
}
car.updateCar()
console.log(car);
