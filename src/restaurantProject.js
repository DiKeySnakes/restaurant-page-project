import loadHome from './home';
import loadMenu from './menu';
import loadContacts from './contacts';
import loadAbout from './about';
import Big_Smoke_Burger_logo from './images/BSB_logo_yellow_outline.png';
import Big_Smoke_Burger_navbar_logo from './images/BSB_logo_letters_white_yellow_small.png';

function createHeader() {
  const headerWrapper = document.createElement('div');
  headerWrapper.classList.add('headerWrapper');

  const header = document.createElement('header');
  header.classList.add('header');

  const headerLogo = document.createElement('img');
  headerLogo.classList.add('headerLogo');
  headerLogo.src = Big_Smoke_Burger_logo;
  headerLogo.alt = 'Big Smoke Burger logo';

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Big Smoke Burger';

  header.appendChild(headerLogo);
  header.appendChild(restaurantName);
  header.appendChild(createNavbar());
  headerWrapper.appendChild(header);

  return headerWrapper;
}

function createNavbar() {
  const navWrapper = document.createElement('div');
  navWrapper.classList.add('navWrapper');

  const navbarLogo = document.createElement('img');
  navbarLogo.classList.add('navbarLogo');
  navbarLogo.src = Big_Smoke_Burger_navbar_logo;
  navbarLogo.alt = 'Big Smoke Burger Logo';

  const nav = document.createElement('div');
  nav.classList.add('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-nav');
  homeButton.textContent = 'HOME';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav');
  menuButton.textContent = 'MENU';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactsButton = document.createElement('button');
  contactsButton.classList.add('button-nav');
  contactsButton.textContent = 'CONTACTS';
  contactsButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactsButton);
    loadContacts();
  });

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('button-nav');
  aboutButton.textContent = 'ABOUT';
  aboutButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(aboutButton);
    loadAbout();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactsButton);
  nav.appendChild(aboutButton);
  navWrapper.appendChild(navbarLogo);
  navWrapper.appendChild(nav);

  return navWrapper;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footerDiv = document.createElement('div');
  footerDiv.setAttribute('id', 'footer');

  const footer = document.createElement('footer');

  const topReferenceDiv = document.createElement('div');
  topReferenceDiv.classList.add('topReference');

  const topReference = document.createElement('span');
  topReference.textContent = `Created by DiKeySnakes for `;

  const topReferenceLink = document.createElement('a');
  topReferenceLink.href = 'https://theodinproject.com/';
  topReferenceLink.target = '_blank';
  topReferenceLink.textContent = 'The Odin Project';

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('copyright');

  const copyright = document.createElement('span');
  copyright.textContent = `Copyright © DiKeySnakes 2022 `;

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/DiKeySnakes/restaurant-page-project';
  githubLink.target = '_blank';

  const githubIcon = document.createElement('i');
  githubIcon.setAttribute('id', 'icon');
  githubIcon.classList.add('fa-brands');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  topReferenceDiv.appendChild(topReference);
  topReferenceDiv.appendChild(topReferenceLink);
  copyrightDiv.appendChild(copyright);
  copyrightDiv.appendChild(githubLink);
  footer.appendChild(topReferenceDiv);
  footer.appendChild(copyrightDiv);
  footerDiv.appendChild(footer);

  return footerDiv;
}

function buildProject() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
}

export default buildProject;
