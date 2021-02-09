import '../scss/styles.scss';
// import Icon from '../images/icon.jpg';

// const foo = (myName) => `Hello ${myName}`;

// console.log(foo('Yoko'));

// const myIcon = new Image();
// myIcon.src = Icon;

// document.querySelector('body').appendChild(myIcon);

// MENU
const toggleMenu = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav')
toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('open');
  headerNav.classList.toggle('active')
})

// TABS
const items = document.querySelectorAll('menu__item')
const tabs = document.querySelectorAll('.menu__tab')

function openPage(id) {
  document.querySelectorAll('.menu__tab').forEach(tab => {
    tab.classList.remove('active')
  })
  document.querySelectorAll('.menu__item').forEach(item => {
    item.classList.remove('active')
  })

  document.getElementById(id).classList.add('active')
  document.querySelector(`div[data-id='${ id }']`).classList.add('active')
}

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    openPage(e.target.getAttribute('data-id'))
  })
})


document.getElementById("default-open").click();
