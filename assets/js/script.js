document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('.section');
  const sidebarBtn = document.querySelector('.info_more-btn');
  const sidebarInfoMore = document.querySelector('.sidebar-info_more');

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-nav-link');

      navbarLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
        }
      });
    });
  });

  sidebarBtn.addEventListener('click', () => {
    sidebarInfoMore.classList.toggle('active');
    sidebarBtn.querySelector('ion-icon').name = sidebarInfoMore.classList.contains('active') ? 'chevron-up' : 'chevron-down';
  });
});
