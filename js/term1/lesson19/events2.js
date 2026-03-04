const inputRef = document.querySelector(".input");
inputRef.addEventListener("focus", () => {
  inputRef.classList.add("active")
});

inputRef.addEventListener("change",(event)=>{
    console.log(event.currentTarget.value.trim());
})

inputRef.addEventListener("blur",()=>{
    inputRef.classList.add("inactive")
})

// const checkRef = document.querySelector("[name='check']");
// checkRef.addEventListener("change",(event)=>{
//     console.log(event.currentTarget.checked);
    
// })

const formRef =document.querySelector(".form");
formRef.addEventListener("submit",(event)=>{
    event.preventDefault()
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
    const nameValue = event.currentTarget.elements.name.value;
    const data={
        email:emailValue,
        password:passwordValue,
        username:nameValue,
    }
    console.log(data);
})