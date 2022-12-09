import Copycat_Big_Mac from './images/burgers/100001-002.png';
import Chili_Cheese_Burger from './images/burgers/100001-003.png';
import Giant_Party_Cheeseburger from './images/burgers/100001-004.png';
import Bang_Bang_Burger from './images/burgers/100001-005.png';
import Avocado_Shrimp_Burger from './images/burgers/100001-006.png';
import Beer_Can_Burger from './images/burgers/100001-007.png';
import Portobello_Mushroom_Burger from './images/burgers/300001-001.png';
import Cheesy_Breakfast_Burger from './images/burgers/300001-003.png';
import Garlic_Lovers_Burger from './images/burgers/400001-001.png';
import Taco_Stuffed_Burger from './images/burgers/1200001-002.png';
import Bloody_Mary_Burger from './images/burgers/300001-002.png';
import menuImage from './images/BSB_menu_main_image.jpg';
import footerLogo from './images/BSB_logo_yellow_outline.png';

function createMenu() {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menuWrapper');

  const menuSlogan = document.createElement('h1');
  menuSlogan.classList.add('menuSlogan');
  menuSlogan.textContent = 'We Serve Passion';

  menuWrapper.appendChild(menuSlogan);

  const menuMainImage = document.createElement('img');
  menuMainImage.classList.add('menuMainImage');
  menuMainImage.src = menuImage;
  menuMainImage.alt = 'Burger Wallpaper';

  menuWrapper.appendChild(menuMainImage);

  const menuHeader = document.createElement('h1');
  menuHeader.classList.add('menuHeader');
  menuHeader.textContent = 'Our Menu';

  menuWrapper.appendChild(menuHeader);

  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuCard(
      Copycat_Big_Mac,
      'Copycat Big Mac',
      'Our favorite part of the iconic Big Mac? That Mac sauce. Once a trade secret, all it takes is whisking together mayonnaise, sweet pickle relish, yellow mustard, and ketchup (for that trademark pink color) with vinegar, garlic powder, onion powder, and paprika. It is a versatile condiment that you can put on anything from french fries to eggs.'
    )
  );
  menu.appendChild(
    createMenuCard(
      Chili_Cheese_Burger,
      'Chili Cheese Burger',
      "Sometimes when you're craving something indulgent, the drive-thru just ain't gonna cut it. Sure, nothing can beat the convenience, but these saucy, cheesy burgers will be worth the extra effort. Simmering the patties in chili infuses them with the spicy sauce and makes them super tender."
    )
  );
  menu.appendChild(
    createMenuCard(
      Giant_Party_Cheeseburger,
      'Giant Party Cheeseburger',
      'A large loaf of French-style boule bread, which comes in a rounded loaf, was destined to become a crusty yet airy giant burger bun. We baked the XXL burger patty in the oven to make sure it cooks evenly and stays super juicy. Trust us, this burger is not for the faint of heart.'
    )
  );
  menu.appendChild(
    createMenuCard(
      Bang_Bang_Burger,
      'Bang Bang Burger',
      "Bang Bang shrimp gets all the hype, but we are here to tell you that you should absolutely be making a bangin' version of your burgers. The sweet-spicy sauce is perfect over almost anything and will spice up any patty you're serving up."
    )
  );
  menu.appendChild(
    createMenuCard(
      Avocado_Shrimp_Burger,
      'Avocado Shrimp Burger',
      'This tender shrimp patty is herby (thanks to cilantro), light, and truly tastes like a summer beach day. Not a fan of mayo? With a nice tang, full-fat Greek yogurt is a great (lighter) substitute.'
    )
  );
  menu.appendChild(
    createMenuCard(
      Beer_Can_Burger,
      'Beer Can Burger',
      "Just when you thought burgers couldn't get any better...enter beer can burgers. No, there isn't any beer in these burgers, but using a can to create a crater in the bacon-wrapped patties means all the room to stuff with your favorite toppings. Cheese, caramelized red onions, extra pickles?! The sky is the limit."
    )
  );
  menu.appendChild(
    createMenuCard(
      Portobello_Mushroom_Burger,
      'Portobello Mushroom Burger',
      "Marinating and roasting the portobellos makes them extremely flavorful and brings out all of their juices. (Bonus that there's no smoky grills to deal with for these burgers. 🙌) We love ours simply topped with honey mustard and some veggies, but a slice of white cheddar would be killer."
    )
  );
  menu.appendChild(
    createMenuCard(
      Cheesy_Breakfast_Burger,
      'Cheesy Breakfast Burger',
      "Everything's just so much better when you put an egg on it. You'll be frying both the patties and egg for this deluxe burger (and hangover cure), so we definitely love to bake the bacon to crispy perfection and less time on the stove top."
    )
  );
  menu.appendChild(
    createMenuCard(
      Garlic_Lovers_Burger,
      "Garlic Lover's Burger",
      "There are few foods in this world garlic won't improve, and burgers definitely aren't one of them. We drew inspiration from some of our favorite garlicky foods (garlic bread, bruschetta) to make a burger brimming with flavor. Make it for the garlic lover in your life—they won't be disappointed."
    )
  );
  menu.appendChild(
    createMenuCard(
      Taco_Stuffed_Burger,
      'Taco Stuffed Burger',
      "Oozing with cheese, these taco stuffed burgers are nothing short of magical. Add a big scoop of guacamole and spicy pico de gallo and we're in burger heaven."
    )
  );
  menu.appendChild(
    createMenuCard(
      Bloody_Mary_Burger,
      'Bloody Mary Burger',
      "We've all seen a lot of crazy brunch recipes. One obvious trend: garnishing a bloody mary with a cheeseburger. But have you ever met a bloody mary burger? Neither had we...until we decided it was pretty important that we make a really good one. The patty is seasoned with hot sauce and Worcestershire, while the special sauce is made with mayo, bloody mary mix, lemon juice, and vodka. Yeah, it's pretty epic."
    )
  );
  menu.appendChild(
    createMenuCard(
      Copycat_Big_Mac,
      'Teriyaki Burger',
      'This salty, sweet, tangy marinade is sure to upgrade your burger game all year long. Charring a juicy pineapple ring adds a whole other dimension of flavor, and we love topping this with a sriracha-mayo mix when we need a bit of extra kick.'
    )
  );
  menu.appendChild(
    createMenuCard(
      Chili_Cheese_Burger,
      'Bacon-Beef Burger',
      "This 50/50 burger is 50% beef and 50% bacon, inspired by Scott Slater's legendary patty. Simple toppings round it out: crunchy, refreshing iceberg lettuce in place of bready buns, a dollop of homemade special sauce with all your favorite condiments, and a few thin slices of naturally sweet and spicy yellow onions."
    )
  );
  menu.appendChild(
    createMenuCard(
      Giant_Party_Cheeseburger,
      'Italian Turkey Burger',
      'You know those Italian sausage-and-pepper sandwiches that always seem to be at outdoor festivals? This is our version of the classic sandwich, but in saucy burger form.'
    )
  );
  menu.appendChild(
    createMenuCard(
      Bang_Bang_Burger,
      'French Onion Soup Burger',
      'We could write entire poems about French onion soup and all the ways we love to eat this rich, umami-packed classic. This burger has all that caramelized flavor we love—no spoons required.'
    )
  );

  const invitation = document.createElement('h1');
  invitation.classList.add('invitation');
  invitation.textContent = 'Order online or visit us!';

  const menuFooterLogo = document.createElement('img');
  menuFooterLogo.classList.add('menuFooterLogo');
  menuFooterLogo.src = footerLogo;
  menuFooterLogo.alt = 'Big Smoke Burger Logo';

  menuWrapper.appendChild(menu);
  menuWrapper.appendChild(invitation);
  menuWrapper.appendChild(menuFooterLogo);

  return menuWrapper;
}

function createMenuCard(source, title, description) {
  const menuCard = document.createElement('div');
  menuCard.classList.add('menuCard');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  const cardImage = document.createElement('img');
  cardImage.src = source;
  cardImage.alt = `${source}`;

  menuCard.appendChild(cardImage);
  menuCard.appendChild(cardTitle);
  menuCard.appendChild(cardDescription);

  return menuCard;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
