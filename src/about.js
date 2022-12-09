import headerLogo from './images/BSB_logo_letters_black_yellow_big.png';
import footerLogo from './images/BSB_logo_yellow_outline.png';

function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about');

  const ourMissionLogo = document.createElement('img');
  ourMissionLogo.classList.add('ourMissionLogo');
  ourMissionLogo.src = headerLogo;
  ourMissionLogo.alt = 'Big Smoke Burger Logo';

  const ourMissionHeader = document.createElement('h1');
  ourMissionHeader.classList.add('ourMissionHeader');
  ourMissionHeader.textContent = 'Gourmet burgers. Made fresh daily.';

  const ourMissionText = document.createElement('p');
  ourMissionText.textContent =
    'Our burgers feature gourmet ingredients that are sourced from top quality producers and local when possible.  Our menu features hand-cut French fries made fresh every day and cooked in trans fat-free canola oil.  Hand-spun milkshakes, house-made sauces, traditional poutine and a selection of unique beverages are also available.';

  const ourGoalsLogo = document.createElement('img');
  ourGoalsLogo.classList.add('ourGoalsLogo');
  ourGoalsLogo.src = headerLogo;
  ourGoalsLogo.alt = 'Big Smoke Burger Logo';

  const ourGoalsHeader = document.createElement('h1');
  ourGoalsHeader.classList.add('ourGoalsHeader');
  ourGoalsHeader.textContent = 'Grilled-to-order. Astonishingly perfect.';

  const ourStory = document.createElement('p');
  ourStory.textContent =
    'BIG SMOKE BURGER is on a mission to deliver the very best quality burger experience imaginable - exceeding guest expectations at every location, every visit, every single day! From its humble beginnings at a single sixteen seat restaurant location opened at King Street, Toronto in 2007, BIG SMOKE BURGER has taken the gourmet burger industry by storm. Today, the Big Smoke Burger brand is undeniably and powerfully differentiated from the rest of the burger pack - consistently exceeding guest expectations by delivering truly exceptional and distinctive burgers using only the freshest, highest quality ingredients. Recognizing the evolution of the Big Smoke Burger experience requires like-minded individuals who share our commitment to quality, we are now offering Big Smoke Burger franchise ownership opportunities in select Ontario and national markets.';

  const ourGoals = document.createElement('p');
  ourGoals.textContent =
    'At Big Smoke Burger our burgers are made fresh daily. We pride ourselves on serving only the freshest beef. Our ground chuck is made to our specifications and it is always fresh, never frozen.';

  const invitation = document.createElement('h1');
  invitation.classList.add('invitation');
  invitation.textContent = 'Order online or visit us!';

  const aboutFooterLogo = document.createElement('img');
  aboutFooterLogo.classList.add('aboutFooterLogo');
  aboutFooterLogo.src = footerLogo;
  aboutFooterLogo.alt = 'Big Smoke Burger Logo';

  about.appendChild(ourMissionLogo);
  about.appendChild(ourMissionHeader);
  about.appendChild(ourMissionText);
  about.appendChild(ourGoalsLogo);
  about.appendChild(ourGoalsHeader);
  about.appendChild(ourGoals);
  about.appendChild(ourStory);
  about.appendChild(invitation);
  about.appendChild(aboutFooterLogo);

  return about;
}

function loadAbout() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createAbout());
}

export default loadAbout;
