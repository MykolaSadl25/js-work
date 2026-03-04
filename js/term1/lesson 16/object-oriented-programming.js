const objC={
    z:5,   
}

const objB = Object.create(objC);
objB.y = 2
// console.log(objB);
// console.log(objB.z);

const objA = Object.create(objB);
objA.x=1;
console.log(objA.x);
console.log(objA.y);
console.log(objA.z);
console.log(objA.hasOwnProperty("x"));
console.log(objA.hasOwnProperty("y"));


// cars oop

// const Car = function({carModel,carPrice,carColor}){
//     this.model = carModel
//     this.price = carPrice
//     this.color = carColor

//     // this.changePrice= function(newPrice){
//     //     this.price = newPrice;
//     // }
// }

// Car.prototype.changePrice = function(newPrice){
//     this.price = newPrice;
// }
// Car.prototype.changeColor = function(newColor){
//     this.color = newColor;
// } 
// console.log(Car.prototype)

// const bmw1 ={
//     carModel: "BMW",
//     carColor: "Black",
//     carPrice: 132321,
// }

// const bmw = new Car(bmw1);
// console.log(bmw);
// bmw.changePrice(100000);
// bmw.changeColor("Red")
// console.log(bmw);


// const data ={
//     carModel: "toyota",
//     carPrice: 110000,
//     carColor: "Black"
// }


// const toyota = new Car(data);
// console.log(toyota);
// toyota.changePrice(999999);
// toyota.changeColor("White")
// console.log(toyota);

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function({login,email}){
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function(){
    console.log(`Your login is ${this.login} and email ${this.email}`);
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com