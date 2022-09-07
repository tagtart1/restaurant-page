import './styles.css';
import loadHomePage from './home';

const content = document.querySelector('div#content');
const contactTab = document.querySelector('.contact-tab');
const homeTab = document.querySelector('.home-tab');

let currentTab = homeTab;

content.appendChild(loadHomePage());

contactTab.addEventListener('click', () => {
    contactTab.classList.toggle('selected');
    currentTab.classList.toggle('selected');
    currentTab = contactTab;


    //clear the dom
    content.querySelector('div').remove();
    //append the correct loadfunction
})

homeTab.addEventListener('click', () => {
    homeTab.classList.toggle('selected');
    currentTab.classList.toggle('selected');
    currentTab = homeTab;
})


