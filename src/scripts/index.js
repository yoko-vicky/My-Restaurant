import '../scss/styles.scss';
// import Icon from '../images/icon.jpg';

// const foo = (myName) => `Hello ${myName}`;

// console.log(foo('Yoko'));

// const myIcon = new Image();
// myIcon.src = Icon;

// document.querySelector('body').appendChild(myIcon);

const toggleMenu = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav')
toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('open');
  headerNav.classList.toggle('active')
})
