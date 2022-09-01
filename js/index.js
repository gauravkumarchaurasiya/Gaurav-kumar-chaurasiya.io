// Theme mode 
let mode=document.querySelector(".modeToggle");
let about=document.querySelector("#about");
let blog=document.querySelector("#blog");
let contact=document.querySelector("#contact");
let body=document.body;

// body.classList.toggle("dark")
mode.addEventListener("click",function(){
        
        body.classList.toggle("light");
        console.log(body);
    




    // about.style.backgroundColor="white";
    // about.style.color="black";
    // blog.style.backgroundColor="white";
    // blog.style.color="black";
    // contact.style.backgroundColor="white";
    // contact.style.color="black";
    // console.log("event activated")
})
// console.log(body);