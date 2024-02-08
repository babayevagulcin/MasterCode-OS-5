let barIcon = document.querySelector(".fa-bars");
let xmarkIcon = document.querySelector(".fa-xmark");
let menu = document.querySelector(".dropdown__navbar");

barIcon.addEventListener("click", function () {
  menu.classList.add("dropdown__navbar--block");
});
xmarkIcon.addEventListener("click", function () {
  menu.classList.remove("dropdown__navbar--block");
});

