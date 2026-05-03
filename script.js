const modal = document.querySelector('[data-video-modal]');
const openButtons = document.querySelectorAll('[data-open-video]');
const closeButtons = document.querySelectorAll('[data-close-video]');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal?.setAttribute('aria-hidden', 'false');
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal?.setAttribute('aria-hidden', 'true');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal?.setAttribute('aria-hidden', 'true');
  }
});
