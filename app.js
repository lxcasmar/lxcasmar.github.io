'use strict'

const switcher = document.querySelector('.btn');
var className;

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')

    // update label on button
    className =  document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light";
        
    }
    else {
        this.textContent = "Dark";
        l
    }
    console.log('Current class (theme) name: ' + className);
});


const toggle = document.querySelector('.toggle input');

toggle.addEventListener('click',() => {
    document.body.classList.toggle('light-theme');
    const ld = toggle.parentNode.querySelector('.ld');
    ld.textContent = toggle.checked ? 'L' : 'D';
});