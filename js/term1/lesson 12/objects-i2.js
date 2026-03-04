// // примітивні типи даних
// let a = 5;
// let b = a;


// b = 1000 
// console.log(a);
// console.log(b);

// // складний тип даних
// const c = {
//     a:5,
// }
// const objD = c;

// objD.a = 4440000;

// console.log(c);
// console.log(objD);

// const objA = {
//     a: 5,
//     b: 10,
//     c: 15,
//     g:{
//         ttt:555,
//     }
// }
// const objB = {
//     d: 50,
//     e: 100,
//     f: 150,
// }

// const objC = {
//     ...objA,
//     ...objB,
// }

// objC.g.ttt = 7777777777777;
// console.log(objC);
// console.log(objA);

// const aaaa = [1,2,3,4,5,6,7,8,9];
// const bbbb = [10,11,12,14,15,16];
// const cccc = [...aaaa, ...bbbb];
// console.log(cccc);

// function numbers(...a) {
//     console.log("a:", a);
//     // console.log("b:", b);
// }
// numbers([5,10,15,20,25,30,35,40,45,50])

// const arr = [4,5,2,1,3,4,563,1,2,4,5,32,0,522,0,321,0,321,321,321,32,1]
// console.log(Math.max(...arr));

const name = ["Vlad","Maks"];
const copyNames = [...name];
const copy2 = name.slice();
copyNames.push("Yaroslav");
console.log("original",name);
console.log("spread ...",copyNames);
console.log("slice",copy2);

const objA = {
    name:"Mykola",
}

const copyObj = Object.assign(objA);
console.log(copyObj);

// =========== practice =====================================

// Напиши скрипт, який, для об'єкта user, послідовно:



// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user1 = {
    hobby:"Hobby Horsing",
    premium:true,
}
user.mood = "happy";
user.hobby = 'skydiving';
user.premium = false;
const key = Object.keys(user);
for (const element of key) {
    console.log(element,user[element]);
    
}

//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const user = {
    name:"Mykola",
    age:14,
    isStudent:true,

}
function countProps(obj){
let key = Object.keys(obj);
console.log(key);
return key.length;
}

countProps(user);

//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const people ={
    yaroslav:20,
    mykola:50,
    vlad:40,
    mariia:0,
}

function findBestEmployee(employees) {
    let best = "";
    let maxPurpose = 0;
    const entries = Object.entries(employees);
    for (const element of entries) {
     if (element[1] > maxPurpose) {
        maxPurpose = element[1];
        best = element[0];
     }   
    }
    return `${best}:${maxPurpose}`
}

console.log(findBestEmployee(people));
