const bg = document.getElementsByTagName('body')[0];
const buttonMode = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');

buttonMode.addEventListener("click", changeMode);

function changeMode() {
    bg.style.color="black";
}