const homepage = document.querySelector('.homepage');
const header = document.querySelector('.header');
const homePreview = document.querySelector('.home-preview');

if (homepage) {
  header.classList.add('header-homepage');
}

window.addEventListener('scroll', () => {
  let homePreviewHeight = homePreview.clientHeight;
  let scrolled = window.scrollY;

  if (scrolled > homePreviewHeight) {
    header.classList.remove('header-homepage');
  } else {
    header.classList.add('header-homepage');
  }
});
