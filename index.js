 

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
      mobileMenu.classList.add('hidden');
  }
});

// Add active class to current section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - sectionHeight/3) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
      }
  });
});


// Dark Mode Toggle
// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     themeToggle.querySelector('i').classList.toggle('fa-moon');
//     themeToggle.querySelector('i').classList.toggle('fa-sun');
// });

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
 