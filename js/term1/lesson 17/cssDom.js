// // get element by selector
// const titleRef = document.querySelector("#title");
// console.log(titleRef);

// // get element by ID
// const titleEl = document.getElementById("title")
// console.log(titleEl);
// titleEl.textContent = "Hi,how are you";

// titleRef.style.color = "red";
// titleRef.style.fontSize = "100px";
// titleRef.style.marginTop = "100px";

// const linkRef = document.querySelector(".link");
// console.log(linkRef);
// // check if element has a class. 
// console.log(linkRef.classList.contains("facebook"))
// // add a class to an element
// linkRef.classList.add("super-style")
// console.log(linkRef);

// // delete class
// linkRef.classList.remove("facebook")
// console.log(linkRef);

// // kinda obvious but it replaces class
// linkRef.classList.replace("super-style","nice-style")


// const btnRef = document.querySelector(".clicky-btn");

// btnRef.addEventListener("click",()=>btnRef.classList.toggle("toggle-btn"));


// ================================== PRACTICE ================================

// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.

const linkEl = document.querySelector("a");
linkEl.style.color = "orange";
// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
const linksRef = document.querySelectorAll("li > a");
linksRef[0].classList.add("first-link-style");
linksRef[5].classList.add("last-link-style");

const listRef = document.querySelector("ul");
console.log(listRef.firstElementChild);
//Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.

const titleRef = document.querySelector("h1");
titleRef.textContent = "Hello";
titleRef.classList.add("title-style");