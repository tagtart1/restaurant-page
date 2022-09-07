import './styles.css';
import './menustyles.css';
import loadHomePage from './home';
import loadContactPage from './contact';
import loadMenuPage from './menu';

const content = document.querySelector('div#content');
const contactTab = document.querySelector('.contact-tab');
const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');



let currentTab = homeTab;


const linkBigBtns = () => {
    let orderBtn = document.querySelector('.contact-btn');
    let menuBtn = document.querySelector('.menu-btn');

    orderBtn.addEventListener('click', () => {
        loadTab(contactTab, loadContactPage);
    })

    menuBtn.addEventListener('click', () => {
        loadTab(menuTab, loadMenuPage);
    })
}

;

contactTab.addEventListener('click', () => {
    loadTab(contactTab, loadContactPage);
})

homeTab.addEventListener('click', () => {
    loadTab(homeTab, loadHomePage);

    linkBigBtns();
})

menuTab.addEventListener('click', () => {
    loadTab(menuTab, loadMenuPage);
})


const loadTab = (tab, pageToLoad) => {
    tab.classList.toggle('selected');
    currentTab.classList.toggle('selected');
    currentTab = tab;

    content.querySelector('div').remove();
    content.appendChild(pageToLoad());
}

content.appendChild(loadHomePage());
linkBigBtns();





