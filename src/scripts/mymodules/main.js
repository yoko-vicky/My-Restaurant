const container = document.getElementById('content');

const main = document.createElement('main');
main.classList.add('main');

const mainVisual = document.createElement('div');
mainVisual.classList.add('main__visual');

const mainText = document.createElement('div');
mainText.classList.add('main__text');
mainVisual.appendChild(mainText);

const mainHeading = document.createElement('h1');
mainHeading.classList.add('main__heading');
mainHeading.textContent = 'SushiTaro';
mainText.appendChild(mainHeading);

const mainSubHeading = document.createElement('p');
mainSubHeading.classList.add('main__sub-heading');
mainSubHeading.textContent = 'Making sushi since 1960';
mainText.appendChild(mainSubHeading);

const myMain = () => {
  main.appendChild(mainVisual);
  container.appendChild(main);
};
export default myMain;
