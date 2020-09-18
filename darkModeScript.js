// Toggle dark mode
function toggleDarkMode() {
    var darkModeOn = window.localStorage.getItem('darkMode') == 'on';
    window.localStorage.setItem('darkMode', darkModeOn ? 'off' : 'on');

    setDarkModeCss(!darkModeOn);
}

// Set dark mode
function setDarkModeCss(on) {
    if (on) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// Set initial dark mode
setDarkModeCss(window.localStorage.getItem('darkMode') == 'on');