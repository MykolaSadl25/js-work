// const paragraphRef = document.querySelector(".text");
// console.log(paragraphRef.textContent);

// console.log(paragraphRef.innerHTML);
// paragraphRef.innerHTML = `<h1>Hello world</h1>`
// console.log(paragraphRef);

const names = [
  "Андрій",
  "Олександр",
  "Максим",
  "Дмитро",
  "Іван",
  "Михайло",
  "Артем",
  "Владислав",
  "Назар",
  "Богдан"
];

const listRef = document.querySelector(".list");

 const nameItem = names.map((item)=>{
    return `<li><a>${item}</a></li>`
}).join('')
listRef.innerHTML = nameItem;
console.log(listRef);

let friends = [
    "Аня",
    "Максим",
    "Оля", 
    "Данило"
];

const friendItem = friends.map((item)=>{
    return `<li><a>${item}</a></li>`
}).join("")

listRef.insertAdjacentHTML("beforeend",friendItem)
console.log(listRef);

const students = [
  { name: "Anna", age: 20, gender: "female", grade: 85 },
  { name: "Ivan", age: 22, gender: "male", grade: 90 },
  { name: "Olena", age: 19, gender: "female", grade: 78 },
  { name: "Petro", age: 21, gender: "male", grade: 92 },
];

const studentsItem = students.map((item)=>{
    return `
        <li>
            <p>Name:${item.name}</p>
            <p>Age:${item.age}</p>
            <p>Gender:${item.gender}</p>
            <p>Grade:${item.grade}</p>
        </li>`
}).join("")
listRef.insertAdjacentHTML("beforeend",studentsItem)

console.log(listRef);

const formRef = document.querySelector("form");
console.log(formRef.elements.name.dataset.action);

