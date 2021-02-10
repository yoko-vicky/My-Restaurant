const container = document.getElementById('content');

const header = document.createElement('header');
header.classList.add('header');

const headerWrap = document.createElement('div');
headerWrap.classList.add('header__wrap');

const headerLogo = document.createElement('span');
headerLogo.classList.add('header__logo');
headerLogo.textContent = 'Sushi Taro';

const myHeader = () => {
  headerWrap.appendChild(headerLogo);
  header.appendChild(headerWrap);
  container.appendChild(header);
};
export default myHeader;
