// const grandpa = document.querySelector(".grandpa");
// const father = document.querySelector(".dad");
// const children = document.querySelector(".children");

// grandpa.addEventListener("click", onGrandPaClick);
// father.addEventListener("click", onDadClick);
// children.addEventListener("click", onChildrenClick);

// function onGrandPaClick(event) {
//   console.log("event.currentTarget:", event.currentTarget);
//   console.log("event.target:", event.target);
// }

// function onDadClick(event) {
//   console.log("event.currentTarget:", event.currentTarget);
//   console.log("event.target:", event.target);
// }

// function onChildrenClick(event) {
//     event.stopPropagation()
//   console.log("event.currentTarget:", event.currentTarget);
//   console.log("event.target:", event.target);
// }

// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector(".btn3")
// const btn4 = document.querySelector(".btn4")
// const btn5 = document.querySelector(".btn5")

// btn1.addEventListener("click",()=>{
//     console.log("clicked on btn 1");
    
// })
// btn2.addEventListener("click",()=>{
//     console.log("clicked on btn 2");
    
// })
// btn3.addEventListener("click",()=>{
//     console.log("clicked on btn 3");
    
// })
// btn4.addEventListener("click",()=>{
//     console.log("clicked on btn 4");
    
// })
// btn5.addEventListener("click",()=>{
//     console.log("clicked on btn 5");
    
// })

// const btnList = document.querySelectorAll("button")
// console.log(btnList);

// btnList.forEach(btn =>{
//     btn.addEventListener("click",(event)=>{
//         console.log("click on button");
//         console.log(event.target.dataset.action);
        
//     })
// })

// const listRef = document.querySelector(".list")
// listRef.addEventListener("click",(event)=>{
// if(event.target.nodeName !== "BUTTON"){
//     return
// }
// console.log(event.target.dataset.action);

// })

// const colors = [
//   { color: "#C71585" },
//   { color: "#FF8C00" },
//   { color: "#FFD700" },
//   { color: "#BDB76B" },
//   { color: "#FF00FF" },
//   { color: "#4B0082" },
//   { color: "#7FFF00" },
//   { color: "#00FFFF" },
//   { color: "#0000CD" },
//   { color: "#F4A460" },
//   { color: "#800000" },
//   { color: "#778899" },
//   { color: "#FFE4E1" },
//   { color: "#191970" },
// ];

// const listRef = document.querySelector(".js-list");
// const closeBtnRef = document.querySelector(".modal-close")
// const modalRef = document.querySelector(".modal")
// const backdropRef = document.querySelector(".box")

// function createItems(array) {
//     const item = array.map((elem)=>{
//         return `
//         <li class="js-item" style="background-color:${elem.color};">${elem.color}</li>`
        
//     }).join("");
//     listRef.innerHTML = item;
// }

// createItems(colors);

// listRef.addEventListener("click",(event)=>{
//     if(event.target.nodeName !== "LI"){
//         return;
//     }
//     const color = event.target.style.backgroundColor;
//     backdropRef.style.opacity = "1";
//     backdropRef.style.pointerEvents = "auto";
//     modalRef.style.backgroundColor = color;
// })

// closeBtnRef.addEventListener("click",(event)=>{
//     closeModal()
// })

// backdropRef.addEventListener("click",(event)=>{
//     if (event.target === event.currentTarget) {
//         closeModal()
//     }
// })

// window.addEventListener("keydown",(event)=>{
//     if (event.code === "Escape") {
//        closeModal() 
//     }
// })

// function closeModal(){
// backdropRef.style.opacity = "0";
//     backdropRef.style.pointerEvents = "none";
// }

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];