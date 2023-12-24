let scrollContainer = document.querySelector(".gallery")
// arrows key
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")
// wheel srcoll
scrollContainer.addEventListener("wheel" ,(evt) =>{
evt.preventDefault()
scrollContainer.scrollLeft += evt.deltaY
scrollContainer.style.scrollBehavior ="auto";
} )

nextbtn.addEventListener("click" , ()=>{
 scrollContainer.style.scrollBehavior ="smooth";
 scrollContainer.scrollLeft += 900;
})
backbtn.addEventListener("click" , ()=>{
 scrollContainer.style.scrollBehavior ="smooth";
 scrollContainer.scrollLeft -= 900;
})
