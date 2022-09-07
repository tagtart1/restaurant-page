const loadHomePage = () => {

    const parent = document.createElement('div');

    
    const restaurantName = document.createElement('div');
    const buttonContainer = document.createElement('div');

    restaurantName.classList.add('restaurant-name-text');
    restaurantName.textContent = 'Adam Style Cafe!';

    buttonContainer.classList.add('middle-button-container');

    const contactBtn = document.createElement('button');
    const menuBtn = document.createElement('button');

    const contactp1 = document.createElement('p');
    const contactp2 = document.createElement('p');

    contactp1.textContent = 'Contact';
    contactp2.textContent = 'to order now';

    contactBtn.classList.add('contact-btn');
    contactBtn.appendChild(contactp1);
    contactBtn.appendChild(contactp2);

    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = "See Menu";

    contactBtn.classList.add('contactBtn');
    menuBtn.classList.add('menuBtn');

    buttonContainer.appendChild(contactBtn);
    buttonContainer.appendChild(menuBtn);

    parent.appendChild(restaurantName);
    parent.appendChild(buttonContainer);
    parent.classList.add('home-container');

    return parent;
};

export default loadHomePage;




