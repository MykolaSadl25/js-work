// const spanRef = document.querySelector("span")

// let counter = 0;

// window.addEventListener("mousemove",_.throttle(moveBox,1500,{leading:false}));

// window.addEventListener("mousemove",_.debounce(moveBox,500));

// function moveBox() {
//     counter += 1;
//     spanRef.textContent = counter;
// }

// const inputRef = document.querySelector("input");

// inputRef.addEventListener("input",_.debounce((event)=>{
//     console.log(event.target.value);
    
// },250));

//Потрібно забезпечити виклик функції при завершенні введення тексту в поле input. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при завершенні введення тексту

const input = document.querySelector("input")

input.addEventListener("input",_.debounce((event)=>{
    console.log(event.target.value);
},500));

// Напишіть скрипт привітання користувача на сторінці. Коли користувач введе своє ім’я в інпут на екрані повино з’явитися текст “Вітаємо, ім’я!”. Текст повинен змінитися лише після того як користувач повністю ввів своє ім’я.

const inputRef = document.querySelector(".name");
const spanRef = document.querySelector(".span");
spanRef.textContent = "ім'я";

inputRef.addEventListener("input",_.debounce(substituteName,500));

function substituteName(){
    spanRef.textContent = inputRef.value
    if (inputRef.value === "") {
        spanRef.textContent = "ім'я";
    }
}

// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const boxRef = document.querySelector(".box");
const mouseBoxRef = document.querySelector(".mouse-box");
mouseBoxRef.addEventListener("mousemove", _.throttle(third, 1000, {

}))
function third(event) {
    let coordinateX = event.clientX;
    let coordinateY = event.clientY;
    mouseBoxRef.textContent = `Coordinate X ${coordinateX + "px"}, Coordinate Y ${coordinateY + "px"}`
    
}