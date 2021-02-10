import aboutPic from '../../images/sushi_07.jpg';
import menu01Pic from '../../images/sushi_01.jpg';
import menu02Pic from '../../images/sushi_05.jpg';
import menu03Pic from '../../images/sushi_10.jpg';

const menu = document.createElement('div');
menu.classList.add('menu');

const createMenuTab = (dataId, text) => {
  const tab = document.createElement('div');
  tab.classList.add('menu__tab');
  tab.setAttribute('data-id', dataId);
  tab.textContent = text;
  return tab;
};

const menuTabs = document.createElement('div');
menuTabs.classList.add('menu__tabs');
const tabMenu = createMenuTab('food-drink', 'Menu');
tabMenu.setAttribute('id', 'default-open');
const tabAbout = createMenuTab('about', 'About');
const tabContact = createMenuTab('contact', 'Contact');
menuTabs.innerHTML += tabMenu.outerHTML + tabAbout.outerHTML + tabContact.outerHTML;

const createMenuItem = (id, title) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu__item');
  menuItem.setAttribute('id', id);
  const heading = document.createElement('h3');
  heading.classList.add('menu__item__heading');
  heading.textContent = title;
  const content = document.createElement('div');
  content.classList.add('menu__item__content');
  menuItem.appendChild(heading);
  menuItem.appendChild(content);
  return [menuItem, content];
};

const menuContent = document.createElement('div');
menuContent.classList.add('menu__content');

const [aboutItem, aboutContent] = createMenuItem('about', 'About us');
const max80 = document.createElement('div');
max80.classList.add('max-80');

const aboutImg = document.createElement('img');
aboutImg.src = aboutPic;
aboutImg.setAttribute('alt', 'Sushi Taro Set');
aboutImg.classList.add('menu__item__image');
const aboutPara = document.createElement('p');
aboutPara.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam exercitationem debitis ipsam temporibus doloremque laboriosam fugiat dicta iste. Asperiores laudantium fugit ut maiores omnis quos perspiciatis eaque sequi architecto commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
max80.innerHTML += aboutImg.outerHTML + aboutPara.outerHTML;
aboutContent.appendChild(max80);
menuContent.appendChild(aboutItem);

const createMenuListItem = (img, title) => {
  const listItem = document.createElement('li');
  listItem.classList.add('menu__list__item');
  const listImg = document.createElement('img');
  listImg.src = img;
  listImg.setAttribute('alt', title);
  const listTitle = document.createElement('span');
  listTitle.textContent = title;
  listItem.appendChild(listImg);
  listItem.appendChild(listTitle);
  return listItem;
};

const [foodItem, foodContent] = createMenuItem('food-drink', 'Menu');
const menuList = document.createElement('ul');
menuList.classList.add('menu__list');
foodContent.appendChild(menuList);
const UmeItem = createMenuListItem(menu01Pic, 'Sushi Ume Set $30');
const TakeItem = createMenuListItem(menu02Pic, 'Sushi Take Set $50');
const MatsuItem = createMenuListItem(menu03Pic, 'Sushi Matsu Set $70');
menuList.innerHTML += UmeItem.outerHTML + TakeItem.outerHTML + MatsuItem.outerHTML;
menuContent.appendChild(foodItem);

const [contactItem, contactContent] = createMenuItem('contact', 'Contact');
const msg = document.createElement('p');
msg.textContent = 'Feel free to contact us:';
const tel = document.createElement('p');
tel.classList.add('tel');
const iconify = document.createElement('span');
iconify.classList.add('iconify');
iconify.setAttribute('data-icon', 'bi:telephone-fill');
iconify.setAttribute('data-inline', 'false');
tel.innerHTML = `${iconify.outerHTML} 000 - 111 - 0000`;
contactContent.innerHTML += msg.outerHTML + tel.outerHTML;
menuContent.appendChild(contactItem);

const myMenu = () => {
  menu.appendChild(menuTabs);
  menu.appendChild(menuContent);
  document.querySelector('.main').appendChild(menu);
};
export default myMenu;
