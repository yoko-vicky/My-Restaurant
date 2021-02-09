import '../scss/styles.scss';


// TABS

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

document.querySelectorAll('.menu__tab').forEach(tab => {
  tab.addEventListener('click', e => {
    openPage(e.target.getAttribute('data-id'))
  })
})


document.getElementById("default-open").click();
