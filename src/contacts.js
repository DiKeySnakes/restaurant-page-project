import restaurant from './images/BSB_restaurant_inside_view.jpg';
import restaurantOutsideImage from './images/BSB_restaurant_outside_view.jpg';
import restaurantReceptionImage from './images/BSB_reception_image.jpg';
import headerLogo from './images/BSB_logo_letters_black_yellow_big.png';
import footerLogo from './images/BSB_logo_yellow_outline.png';

function createContacts() {
  const contacts = document.createElement('div');
  contacts.classList.add('contacts');

  const contactsHeaderLogo = document.createElement('img');
  contactsHeaderLogo.classList.add('contactsHeaderLogo');
  contactsHeaderLogo.src = headerLogo;
  contactsHeaderLogo.alt = 'Big Smoke Burger Logo';

  const imageBlock = document.createElement('div');
  imageBlock.classList.add('imageBlock');

  const firstImage = document.createElement('img');
  firstImage.classList.add('firstImage');
  firstImage.src = restaurantOutsideImage;
  firstImage.alt = 'Big Smoke Burger restaurant view';

  const secondImage = document.createElement('img');
  secondImage.classList.add('secondImage');
  secondImage.src = restaurantReceptionImage;
  secondImage.alt = 'Big Smoke Burger restaurant view';

  imageBlock.appendChild(firstImage);
  imageBlock.appendChild(secondImage);

  const contactMessage = document.createElement('h1');
  contactMessage.classList.add('contactMessage');
  contactMessage.textContent = 'Need to get in touch with Big Smoke Burger?';

  const contactsHeader = document.createElement('h1');
  contactsHeader.classList.add('contactsHeader');
  contactsHeader.textContent = 'Contact us';

  const restaurantAddressCard = document.createElement('div');
  restaurantAddressCard.classList.add('restaurantAddressCard');

  const addressFirstLine = document.createElement('p');
  addressFirstLine.classList.add('addressFirstLine');
  addressFirstLine.textContent = 'CONTACT BIG SMOKE';
  restaurantAddressCard.appendChild(addressFirstLine);

  const addressSecondLine = document.createElement('p');
  addressSecondLine.classList.add('addressSecondLine');
  addressSecondLine.textContent = 'Contact our corporate office directly :';
  restaurantAddressCard.appendChild(addressSecondLine);

  const addressThirdLine = document.createElement('p');
  addressThirdLine.classList.add('addressThirdLine');
  addressThirdLine.textContent = 'Big Smoke Burger';
  restaurantAddressCard.appendChild(addressThirdLine);

  const addressFourthLine = document.createElement('p');
  addressFourthLine.classList.add('addressFourthLine');
  addressFourthLine.textContent = '149 Lakeshore Rd. E';
  restaurantAddressCard.appendChild(addressFourthLine);

  const addressFifthLine = document.createElement('p');
  addressFifthLine.classList.add('addressFifthLine');
  addressFifthLine.textContent = 'Suite 201,';
  restaurantAddressCard.appendChild(addressFifthLine);

  const addressSixthLine = document.createElement('p');
  addressSixthLine.classList.add('addressSixthLine');
  addressSixthLine.textContent = 'Oakville ON,';
  restaurantAddressCard.appendChild(addressSixthLine);

  const addressSeventhLine = document.createElement('p');
  addressSeventhLine.classList.add('addressSeventhLine');
  addressSeventhLine.textContent = 'Canada L6J 1H3.';
  restaurantAddressCard.appendChild(addressSeventhLine);

  const addressEighthLine = document.createElement('p');
  addressEighthLine.classList.add('addressEighthLine');
  addressEighthLine.textContent = 'Phone: 1-855-799-6757';
  restaurantAddressCard.appendChild(addressEighthLine);

  const restaurantView = document.createElement('img');
  restaurantView.classList.add('restaurantViewImg');
  restaurantView.src = restaurant;
  restaurantView.alt = 'Big Smoke Burger restaurant view';

  const invitation = document.createElement('h1');
  invitation.classList.add('invitation');
  invitation.textContent = 'Order online or visit us!';

  const contactsFooterLogo = document.createElement('img');
  contactsFooterLogo.classList.add('contactsFooterLogo');
  contactsFooterLogo.src = footerLogo;
  contactsFooterLogo.alt = 'Big Smoke Burger Logo';

  contacts.appendChild(contactsHeaderLogo);
  contacts.appendChild(imageBlock);
  contacts.appendChild(contactMessage);
  contacts.appendChild(contactsHeader);
  contacts.appendChild(restaurantAddressCard);
  contacts.appendChild(restaurantView);
  contacts.appendChild(invitation);
  contacts.appendChild(contactsFooterLogo);

  return contacts;
}

function loadContacts() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContacts());
}

export default loadContacts;
