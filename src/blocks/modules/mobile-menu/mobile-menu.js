const mobileMenu = document.querySelector('.mobile-menu');
const btnOpen = document.querySelector('.header__menu-btn');
const btnCLose = document.querySelector('.mobile-menu__close');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.header');

const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
const timeout = 400;

const bodyLock = () => {
  lockPadding.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
};

const bodyUnlock = () => {
  setTimeout(() => {
    lockPadding.style.paddingRight = '0px';
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
};

btnOpen.addEventListener('click', function (e) {
  e.preventDefault();
  mobileMenu.classList.add('open');
  bodyLock();
});

btnCLose.addEventListener('click', function (e) {
  e.preventDefault();
  mobileMenu.classList.remove('open');
  bodyUnlock();
});

mobileMenu.addEventListener('click', (e) => {
  if (!e.target.closest('.mobile-menu__panel')) {
    mobileMenu.classList.remove('open');
    bodyUnlock();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    mobileMenu.classList.remove('open');
    bodyUnlock();
  }
});
