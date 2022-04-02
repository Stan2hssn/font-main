import '../styles/index.css';
import './giro.js'

const menu = document.querySelector('.menu');
const explication = document.querySelector('.explication_page');
const footer = document.querySelector('.footer');

menu.addEventListener('click', function () {
    if(menu.getAttribute('attributes')) {
        menu.removeAttribute('attributes')
        menu.classList.remove('active');
        footer.style.opacity ='0';
        explication.style.opacity ='0';
        console.log('oui')
        setTimeout(function() {
            explication.style.zIndex ='-1';
        }, 300)
    }
    else {
        menu.setAttribute('attributes', 'active');
        menu.classList.add('active');
        footer.style.opacity ='1';
        explication.style.opacity ='1';
        explication.style.zIndex ='1';
    }
})