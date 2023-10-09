const card = document.querySelector('.group');

card.addEventListener('mouseenter', () => {
  card.querySelector('p').classList.remove('translate-y-full');
});

card.addEventListener('mouseleave', () => {
  card.querySelector('p').classList.add('translate-y-full');
});

//User interaction animations using animate css
// Select elements
// Get section and animated elements
const sections = [
  document.querySelector('#about'),
  document.querySelector('#projects'),
  document.querySelector('#skills'),
  document.querySelector('#contact'),
];
const animatedEls = document.querySelectorAll('[data-animate]');

// Callback for both section and elements
const animateCallback = (entries, observer) => {
  entries.forEach((entry) => {
    const isSection = sections.includes(entry.target);
    if (isSection) {
      // Logic for section
      if (entry.isIntersecting) {
        entry.target.classList.remove('invisible');
      }
    } else {
      // Logic for animated elements
      if (entry.isIntersecting && window.innerWidth >= 768) {
        entry.target.classList.remove('invisible');
        entry.target.classList.add(entry.target.dataset.animate);
      }
    }
  });
};

// Create a single observer
const observer = new IntersectionObserver(animateCallback, {
  threshold: 1,
});

// Observe sections
sections.forEach((section) => {
  observer.observe(section);
});

// Observe animated elements
animatedEls.forEach((el) => {
  observer.observe(el);
});
