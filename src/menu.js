import hamburgerImg from './images/hamburger.png';
import steakImg from './images/steak.png';
import grilledCheeseImg from './images/grilled-cheese.png';
import fryImg from './images/french-fries.png';
import saladImg from './images/caesar-salad.png';
import doubleBurger from './images/double-cheeseburger.png';

const loadMenuPage = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');


    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    menuContainer.appendChild(menuBox);

    menuBox.appendChild(createMenuItem(hamburgerImg, 'Hamburger', '$3.99', 'This the hamburger that contains, poop, lettuce, onions, poop'));
    menuBox.appendChild(createMenuItem(steakImg, "Daniel's Kidney", '$6.99', 'Pulled straight from daniel himself, only 2 in stock'));
    menuBox.appendChild(createMenuItem(grilledCheeseImg, 'Grilled Cheese', '$2.99', 'Take some bread and take some cheese, toast it and bam grilled cheese!'));
    menuBox.appendChild(createMenuItem(fryImg, "French Fries", "3.99", "You're probably like 'woah these fries cost more than the grilled cheese!' and you are right, they are." ));
    menuBox.appendChild(createMenuItem(saladImg, 'Caesar Salad', "$7.99", "If you wanted to eat healthy here, think again, this salad costs more than anything on the menu, ha!"));
    menuBox.appendChild(createMenuItem(doubleBurger, 'Double Cheese Burger', "$5.99", "Its our hamburger, but we added cheese and added an extra patty!"));

    return menuContainer;

}


const createMenuItem = (imgSrc, itemName, itemPrice, description) => {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item');

    const itemImg = new Image();
    itemImg.src = imgSrc;
    itemImg.alt = 'test';

    menuItem.appendChild(itemImg);

    const itemDiv = document.createElement('div');
    const divh4 = document.createElement('h4');
    const h4span = document.createElement('span');
    const descDiv = document.createElement('div');
    descDiv.textContent = description
    divh4.innerHTML = itemName;
    h4span.innerHTML = itemPrice;
    divh4.appendChild(h4span);
    
    itemDiv.appendChild(divh4);
    itemDiv.appendChild(descDiv);
   
    menuItem.appendChild(itemDiv);

    return menuItem;

}


export default loadMenuPage;



