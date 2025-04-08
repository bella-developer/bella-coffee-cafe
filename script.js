// Smooth scrolling effect for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add fade-in animation on page load for hero section
window.addEventListener('load', function () {
  const hero = document.querySelector('.hero');
  hero.classList.add('fade-in');
});

// CSS class for fade-in effect
document.styleSheets[0].insertRule(`
  .fade-in {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }
`, 0);

document.styleSheets[0].insertRule(`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`, 0);
