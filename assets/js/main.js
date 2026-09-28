(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      setMenu(!isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 760px)').matches) {
          setMenu(false);
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });

    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
