// 🚗 ЗАДАЧА: Клас Машина і Клас Електромобіль
// Уявімо, що ми створюємо програму для автосалону. Є звичайні машини, а є спеціальні — електромобілі. Всі вони мають марку (назву) і колір, але електромобілі ще мають рівень заряду батареї.

// ✅ ВИМОГИ
// Створити клас Car, який має:

// публічні властивості brand (марка) і color

// метод describe() — який описує машину: "Це [brand] кольору [color]"

// Створити клас ElectricCar, який наслідує Car і додає:

// приватну властивість #batteryLevel

// геттер і сеттер для batteryLevel

// метод charge() — який додає заряд

// Клас звичайної машини

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  describe() {
    return `This is ${this.brand},color ${this.color}`
  }
}

class ElectricCar extends Car {
  //extends - наслідування класу
  #batteryLevel = 0; // # - синтаксис оголошення приватної змінної  # обов'язково оголушується перед конструкторі
  constructor(brand, color, batteryLevel) {
    super(brand,color) // виклик батьківського конструктора 
    this.#batteryLevel = batteryLevel;
  }
  get batteryLevel(){
    return this.#batteryLevel
    // get - отримати значення
  }
  set batteryLevel(newLevel){
    if (this.newLevel > 100) {
        console.log("You cannot charge more than 100%");
    }
    else{
     return this.#batteryLevel = newLevel
    }
    // set - змінити значення
  }
   charge(percentage){
    this.batteryLevel = this.#batteryLevel + percentage;
    return`${this.brand} is charged to ${this.#batteryLevel}%`
    
   }
}

const bmw = new Car("BMW","Black");
console.log(bmw.describe());


const tesla = new ElectricCar("Tesla","White",20);
tesla.batteryLevel = 100;
console.log(tesla.batteryLevel);
 



// 2

// Напиши клас User для створення користувача з наступними властивостями:



// name — рядок
// age — число
// followers — число


// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User{
    constructor({name,age,followers}={}){
        this.name = name;
        this.age = age;
        this.followers = followers
    }
    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`);
    }
}

const mango = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних


// const storage = new Storage([
//  'Нанітоіди',
//  'Пролонгер',
//  'Залізні жупи',
//  'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" 