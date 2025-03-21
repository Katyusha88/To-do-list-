gsap.to("h1", {y:50, duration:2, ease:"bounce"});

const text = document.querySelector("#input");
const btn = document.querySelector("#btn");
const parents=document.querySelector(".container");

btn.addEventListener("click", function(){
 const boxs =document.createElement("li");
 boxs.innerText=input.value;
 boxs.classList.add("stulyBox");
 parents.appendChild(boxs);
 input.value="";
 boxs.addEventListener("click", function(){
     boxs.classList.add("stulyBoxs");
 })
boxs.addEventListener("dblclick", function(){
    parents.removeChild(boxs);

})
})
