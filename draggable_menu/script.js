
const navigator = document.querySelector('.navigator');
const menu = document.querySelector('.toggle');

menu.addEventListener("dblclick", () => {
    menu.classList.toggle("active");
    navigator.classList.toggle("active");
});