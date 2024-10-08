AOS.init();

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon  = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");


if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    //show light icon
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

// onclick for toggle button to switch between light and dark mode
themeToggleBtn.addEventListener("click", toggleMode)

function toggleMode(){
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    //if it is set in local storage
    if(localStorage.getItem('color-theme')){
        //if light, make it dark and ave to localStorage
        if (localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    }
    else{
        //If not in localStorage, 
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
        else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
}