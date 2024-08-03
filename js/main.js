document.addEventListener('DOMContentLoaded', function () {
  const navbarTogglers = document.querySelectorAll('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');
  const closeBtn = document.querySelector('.btn-close');

  navbarTogglers.forEach(toggler => {
    toggler.addEventListener('click', function () {
      this.classList.toggle('collapsed');
      navbarCollapse.classList.toggle('show');
    });
  });

  closeBtn.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
  });

  // Close navbar when a link is clicked (for single-page navigation)
  const navLinks = document.querySelectorAll('.navbar-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 991) {
        navbarCollapse.classList.remove('show');
        navbarTogglers.forEach(toggler => toggler.classList.remove('collapsed'));
      }
    });
  });
});
