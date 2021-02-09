import '../scss/main.scss';
import Icon from '../images/icon.jpg';

// const foo = (myName) => `Hello ${myName}`;

// console.log(foo('Yoko'));

const myIcon = new Image();
myIcon.src = Icon;

document.querySelector('body').appendChild(myIcon);
