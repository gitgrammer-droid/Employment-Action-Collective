const customCursor = document.querySelector('.custom-cursor');
const navLinks = document.querySelectorAll('.navbar a');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    customCursor.classList.add('hovered-link');
  });

  link.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hovered-link');
  });
});