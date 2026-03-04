// document.addEventListener("keydown",(event)=>{
//     console.log(event.key, "key");
//     console.log(event.code ,"code");
// });

const backdropRef = document.querySelector(".backdrop");

const openBtnRef = document.querySelector(".open-btn");

const closeBtnRef = document.querySelector(".modal-close");

openBtnRef.addEventListener("click",openModal);

closeBtnRef.addEventListener("click",closeModal)

backdropRef.addEventListener("click",(event)=>{
    if (event.target === event.currentTarget) {
        closeModal()
    }
})

document.addEventListener("keydown",(event)=>{
    if (event.code ==="Escape") {
        closeModal()
    }
})

function closeModal() {
    backdropRef.classList.add("is-active")
}
function openModal() {
    backdropRef.classList.remove("is-active")
}