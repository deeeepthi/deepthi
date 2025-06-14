document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump

    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Smooth scroll using scrollIntoView
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});