let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-items");
let darkMode = document.getElementById("darkmode");
let body = document.querySelector("body");

menu.addEventListener("click", () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

darkMode.addEventListener("click", () => {
  body.classList.toggle('active');
})