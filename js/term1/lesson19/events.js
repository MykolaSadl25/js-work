const btnRef = document.querySelector(".btn");
// adding event listener
                // type of event  function
// 1st way
// btnRef.addEventListener("click",changeColor)
// function changeColor() {
//     btnRef.style.backgroundColor = "blue";
//     btnRef.style.color = "red"; 
// }

// 2nd way
//btnRef.addEventListener("click",()=>{
//     btnRef.style.backgroundColor = "blue";
//     btnRef.style.color = "red"; 
//})
                             // object
// btnRef.addEventListener("click",(event)=>{
//     console.log(event.currentTarget);
//     // console.log(event.target);
// })

// const listRef =document.querySelector(".list")
// listRef.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log(event.currentTarget);
//     console.log(event.target);
// })

// =================== PRACTICE ================

const inputRef = document.querySelector(".input");
const titleRef = document.querySelector(".title");

inputRef.addEventListener("input",(event)=>{
    console.log(event.currentTarget.value);
    titleRef.textContent = event.currentTarget.value
})
//Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.



// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const minusBtnRef = document.querySelector(".minus");
const plusBtnRef = document.querySelector(".plus");
const spanRef = document.getElementById("value")

let counterValue = 0;

minusBtnRef.addEventListener("click",decrement)
plusBtnRef.addEventListener("click",increment)

function increment() {
    counterValue += 1
    spanRef.textContent = counterValue;
}
function decrement() {
    counterValue -=1
    spanRef.textContent = counterValue;
}

const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input",(event)=>{
    spanEl.style.fontSize = event.currentTarget.value+"px"
})