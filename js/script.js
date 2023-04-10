const menu = document.getElementById("menu");
const header = document.querySelector("header");

menu.addEventListener("click", ()=> menu.classList.toggle("active"), header.classList.toggle("toggle"));
window.addEventListener("load", ()=> menu.classList.remove("active"), header.classList.remove("toggle"));
window.addEventListener("scroll",()=>
     window.scrollY > 0
          ? document.querySelector(".gotop").classList.add("active")
          : document.querySelector(".gotop").classList.remove("active")
);