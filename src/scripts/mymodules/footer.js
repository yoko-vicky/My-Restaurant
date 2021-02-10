const container = document.getElementById('content');

const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = '&copy; 2021 Sushi Taro Designed by <a href="https://github.com/yocosaka">Yoko Saka</a>';

const myFooter = () => {
  container.appendChild(footer);
};
export default myFooter;
