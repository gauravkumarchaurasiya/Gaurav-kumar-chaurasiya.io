// ---------------portfolio mode switcher-------
// console.log("Hello i am gaurav ");
let pbody = document.body;
console.log(pbody);
let pmode = document.querySelector(".pMode1");
let pMode2 = document.querySelector(".pMode2");
let modeImage = document.getElementById("modeImage");

let link = document.querySelectorAll(".link");
console.log(link);
// console.log(link.style.color);
// console.log(pbody.classList.toggle(".pLight"));
pmode.addEventListener("click", function () {
  if (pbody.classList.toggle("pLight")) {
    modeImage.src = "/img/icons/dark.png";
    for (var i = 0; i < link.length; i++) {
      //     if(pbody.classList.toggle("pLight")){
      link[i].style.color = "var(--black-color)";
      // link[i].style.color="var(--white-color)";
    }
  } else {
    modeImage.src = "/img/icons/light.png";
    for (var i = 0; i < link.length; i++) {
      link[i].style.color = "var(--white-color)";
    }
  }
});

console.log(document.documentElement.style.setProperty);
pMode2.addEventListener("click",function(){
    document.documentElement.style.setProperty("--main-color","rgb(218, 48, 224)")
})
