import mainImage from './images/BSB_home_main_image.jpg';
import secondaryImage from './images/BSB_home_secondary_image.jpg';
import footerLogo from './images/BSB_logo_yellow_outline.png';

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const mottoHeader = document.createElement('h1');
  mottoHeader.classList.add('mottoHeader');
  mottoHeader.textContent = 'Hand Crafted Burgers';

  const secondaryHomeImage = document.createElement('img');
  secondaryHomeImage.classList.add('secondaryHomeImage');
  secondaryHomeImage.src = secondaryImage;
  secondaryHomeImage.alt = 'Burger';

  const mottoFirstPart = document.createElement('h2');
  mottoFirstPart.classList.add('mottoFirstPart');
  mottoFirstPart.textContent = 'Made with 100% fresh Canadian Beef.';

  const mottoSecondPart = document.createElement('h2');
  mottoSecondPart.classList.add('mottoSecondPart');
  mottoSecondPart.textContent = 'From juicy burgers to incredible poutines.';

  const mottoThirdPart = document.createElement('h2');
  mottoThirdPart.classList.add('mottoThirdPart');
  mottoThirdPart.textContent =
    'At Big Smoke Burger we have something for everyone!';

  const mainHomeImage = document.createElement('img');
  mainHomeImage.classList.add('mainHomeImage');
  mainHomeImage.src = mainImage;
  mainHomeImage.alt = 'Burger';

  const invitation = document.createElement('h1');
  invitation.classList.add('invitation');
  invitation.textContent = 'Order online or visit us!';

  const homeFooterLogo = document.createElement('img');
  homeFooterLogo.classList.add('homeFooterLogo');
  homeFooterLogo.src = footerLogo;
  homeFooterLogo.alt = 'Big Smoke Burger Logo';

  home.appendChild(mottoHeader);
  home.appendChild(mainHomeImage);
  home.appendChild(mottoFirstPart);
  home.appendChild(mottoSecondPart);
  home.appendChild(mottoThirdPart);
  home.appendChild(secondaryHomeImage);
  home.appendChild(invitation);
  home.appendChild(homeFooterLogo);

  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
