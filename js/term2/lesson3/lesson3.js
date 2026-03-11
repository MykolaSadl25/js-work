// const imageObserver = new IntersectionObserver((item,observer)=>{
//     item.forEach((img)=> {
//         if (img.isIntersecting) {
//             const path = img.target.dataset.src;
//             img.target.src = path;
//             img.target.style.transform = "translateX(0)"
//             observer.unobserve(img.target);
//             console.log(path);
            
//         }
//     })
    
// },{
//     // rootMargin:"70px" - will show 70px before you see the image
//     // threshold:[0.5,0.8]
// });

// const allImagesRefArray = document.querySelectorAll("img");

// allImagesRefArray.forEach(img => imageObserver.observe(img));

const videoRef = document.querySelector("video")


const videoObserver = new IntersectionObserver(([video])=>{
     if (video.isIntersecting) {
        video.target.play()
     }
     else{
        video.target.pause()
     }
},{
    threshold:[0.2,0.8]
})

videoObserver.observe(videoRef)
