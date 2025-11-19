const works = [
     {name:"Photo By Arsen",link:"https://www.instagram.com/arsen_photo.6973/"},
     {name:"ArsenKids",link:"https://arsenkids.vercel.app/"},
     {name:"Angular Samples",link:"https://github.com/ArsenGabrielyan/ng-sample-projects"},
     {name:"Հանգիստ Տրամադրություն",link:"https://calm-mood.vercel.app/"},
     {name:"Գիտաֆիզիկա",link:"https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3"},
     {name:"Անիմացիաներ",link:"https://www.youtube.com/playlist?list=PLSI6KSDJfq-IcQ4ld9W1m_f8hnJTNe7gJ"},
     {name:"Կարճ Գիտաֆիզիկա",link:"https://www.youtube.com/playlist?list=PLSI6KSDJfq-L9RWw-WC6AbqRFDoXjFQEw"},
     {name:"Կարճ Անիմացիաներ",link:"https://www.youtube.com/playlist?list=PLSI6KSDJfq-JzSO9110zkT-7GgfP7-__5"},
];
const header = document.querySelector("header"),loader = document.querySelector(".loader-container"),toggle=()=>header.classList.toggle("active");
const addWorks=()=>works.map(work=>{
     const el = document.createElement("div");
     el.className = "work";el.innerHTML = `<a href="${work.link}"><h2>${work.name}</h2></a>`;
     document.querySelector(".workBx").append(el);
});
window.addEventListener("scroll",()=>header.classList.toggle("sticky",window.scrollY>0));
document.getElementById("year").innerHTML=(new Date).getFullYear();addWorks();