// creating a HTML element in console
const title = document.createElement("h1");
title.textContent = "Lorem ipsum dolor";
title.classList.add("title");
// console.log(title);

const image = document.createElement("img");
image.src = "https://dlab.epfl.ch/wikispeedia/wpcd/images/462/46295.jpg";
image.alt = "sunset";
// console.log(image);
const bodyRef = document.querySelector("body");
console.log(bodyRef);

// add an element to empty HTML document AFTER the script(not good)
// bodyRef.append(title,image)

// add an element to empty HTML document BEFORE the script(good✅✅✅✅✅)
// bodyRef.prepend(title,image)

// example
const listRef = document.querySelector(".list");
const boxRef = document.querySelector(".box");
boxRef.prepend(title, image);
console.log(boxRef);

// elem.remove() = removes element from document

const names = ["mykola", "oleksandr", "maksim", "viktoriia", "dominika","vlad","Yarik"];

const items = names.map((item)=>{
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    return itemEl
})
listRef.append(...items)