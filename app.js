'use strict'

const switcher = document.querySelector('.btn');
var className;

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')

    // update label on button
    className =  document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light";
        localStorage.setItem('dark-theme','enabled');
    }
    else {
        this.textContent = "Dark";
        localStorage.setItem('dark-theme','disabled');
    }
    console.log('Current class (theme) name: ' + className);
});

if (localStorage.getItem('dark-theme') == 'disabled'){
    className  = document.body.className;
    document.body.classsList.toggle('light-theme');
    if (className == "dark-theme")
        switcher.textContent = "light";
    else
        switcher.textContent = "Dark";
}
