
//let sum = 0;
//for (const num of numbers) {
//     sum+=num;
// }
// console.log(sum);

// array.reduce((acc,item)=> {},0)
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const sum = numbers.reduce((acc,item)=>{
//     return acc+item;
// },0);
// console.log(sum);

// const salary = {
//     mango:50,
//     poly:100,
//     ajax:150,
// }
// const values =  Object.values(salary);
// console.log(values);
// const totalSalary = values.reduce((acc,item)=>acc+item,0);
// console.log(totalSalary);

// ------------------------------------ PRACTICE (reduce)----------------------

const students = [
  { name: "Anna", age: 20, gender: "female", grade: 85 },
  { name: "Ivan", age: 22, gender: "male", grade: 90 },
  { name: "Olena", age: 19, gender: "female", grade: 78 },
  { name: "Petro", age: 21, gender: "male", grade: 92 },
];

// порахувати загальну кількість балів
const totalMarks = students.reduce((acc,item)=>{
    return acc+=item.grade
},0)
console.log(totalMarks);

//рахуємо загальну вартість товарів в корзині

const cart = [
  { label: "apple", price: 100, quantity: 2, },
  { label: "banana", price: 70, quantity: 3, },
  { label: "lemons", price: 50, quantity: 5, },
];

const totalCost = cart.reduce((acc,{price,quantity})=>acc+=price*quantity,0)
console.log(totalCost);

//отримати масив усіх tags
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc,{tags})=>{
   acc.push(...tags); 
   return acc
},[])

console.log(allTags);
const allTags2 = tweets.map(({tags})=> tags);
console.log(allTags2);

const allTags3 = tweets.flatMap(({tags})=> tags);
console.log(allTags3);

const specialTags =allTags3.filter((item,i,array)=> array.indexof(item) === i);
console.log(specialTags);
