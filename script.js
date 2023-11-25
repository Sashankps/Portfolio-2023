const card = document.querySelector('.group');

card.addEventListener('mouseenter', () => {
  card.querySelector('p').classList.remove('translate-y-full');
});

card.addEventListener('mouseleave', () => {
  card.querySelector('p').classList.add('translate-y-full');
});

// const sections = [
//   document.querySelector('#about'),
//   document.querySelector('#projects'),
//   document.querySelector('#skills'),
//   document.querySelector('#contact'),
// ];
// const animatedEls = document.querySelectorAll('[data-animate]');

// const animateCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const isSection = sections.includes(entry.target);
//     if (isSection) {
//       // Logic for section
//       if (entry.isIntersecting) {
//         entry.target.classList.remove('invisible');
//       }
//     } else {
//       // Logic for animated elements
//       if (entry.isIntersecting && window.innerWidth >= 768) {
//         entry.target.classList.remove('invisible');
//         entry.target.classList.add(entry.target.dataset.animate);
//       }
//     }
//   });
// };

// const observer = new IntersectionObserver(animateCallback, {
//   threshold: 0.5,
// });

// sections.forEach((section) => {
//   observer.observe(section);
// });

// animatedEls.forEach((el) => {
//   observer.observe(el);
// });

console.log('Hey, Welcome!')

document.addEventListener("DOMContentLoaded", function () {
  // Load More functionality
  const loadMoreButton = document.getElementById("load-more-button");
  const hiddenProject = document.getElementById("project-9");

  loadMoreButton.addEventListener("click", function () {
    hiddenProject.classList.toggle("hidden");
    loadMoreButton.style.display = "none";
  });
});