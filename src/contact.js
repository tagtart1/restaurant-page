import locationImg from './images/restaurant-location.png';

const loadContactPage = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    contactContainer.appendChild(contactBox);

    const phonePara = document.createElement('p');
    const addresspara = document.createElement('p');
    const addressImg = new Image();

    phonePara.textContent = '📞 Call (252)-481-1234 to reserve now';
    addresspara.textContent = '🏠 3210 Jimmy Blvd, Los Santos, California';
    addressImg.src = locationImg;
    addressImg.alt = "restaurant location";

    contactBox.appendChild(phonePara);
    contactBox.appendChild(addresspara);
    contactBox.appendChild(addressImg);

    return contactContainer;

}

export default loadContactPage;


