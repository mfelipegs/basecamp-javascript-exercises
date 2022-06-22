const bg = document.getElementsByTagName('body')[0];
const buttonMode = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');

buttonMode.addEventListener("click", changeMode);

function changeMode() {
    changeClass();
}

function changeClass(){
    buttonMode.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    bg.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}