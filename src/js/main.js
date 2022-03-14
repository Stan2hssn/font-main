const interrogation = document.querySelector('.help');
const cross = document.querySelector('.cross');
const explication = document.querySelector('.explication_page');
const footer = document.querySelector('.footer');

interrogation.addEventListener('click', () => {
    console.log('work')
    cross.style.display = 'flex';
    explication.style.transform = 'translateX(0px)';
/*
    explication.style.boxShadow= '-2px 0 20vw #959595FF';
*/

    interrogation.style.display = 'none';


    setTimeout( function () {
    footer.style.opacity = '1';

    }, 300)

})


cross.addEventListener('click', () => {
    console.log('work')
    footer.style.opacity = '0';


    setTimeout( function () {
        interrogation.style.display = 'flex';
        explication.style.transform = 'translateX(101vw)';
        cross.style.display = 'none';
    }, 500)
});

