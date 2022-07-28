const bg = document.getElementsByTagName('body')[0];
const buttonmode = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');
const darkModeClass = 'dark-mode';

buttonmode.addEventListener("click", changeMode);

function changeMode() {
    changeClass();
    changeText();
}

function changeClass(){
    buttonmode.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    bg.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(bg.classList.contains(darkModeClass)) {
        buttonmode.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    buttonmode.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}