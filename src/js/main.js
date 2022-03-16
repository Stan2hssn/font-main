import '../styles/index.css';

const menu = document.querySelector('.menu');
const Explication = document.querySelector('.explication_page');
const footer = document.querySelector('.footer');

menu.addEventListener('click', function () {
    if(menu.getAttribute('attributes')) {
        menu.removeAttribute('attributes')
        menu.classList.remove('active');
        footer.style.opacity ='0';
        Explication.style.opacity ='0';
        Explication.style.zIndex ='-1';
        console.log('oui')
    }
    else {
        menu.setAttribute('attributes', 'active');
        menu.classList.add('active');
        footer.style.opacity ='1';
        Explication.style.opacity ='1';
        Explication.style.zIndex ='1';
    }
})