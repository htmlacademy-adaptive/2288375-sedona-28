
if (document.querySelector('.main-nav')) {
  const nav = document.querySelector('.main-nav')
  const burger = nav.querySelector('.main-nav__toggle')

  nav.classList.remove('main-nav--nojs')

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    nav.classList.toggle('main-nav--opened')
  })
}
