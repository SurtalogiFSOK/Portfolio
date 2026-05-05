const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
  const fadeInClass = 'reveal';
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add(fadeInClass);
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
