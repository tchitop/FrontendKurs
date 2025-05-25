// nav.js
fetch('/head/nav.html')
  .then(response => response.text())
  .then(data => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    navPlaceholder.innerHTML = data;

    // Warten bis DOM-Update abgeschlossen ist
    requestAnimationFrame(() => {
      const nav = navPlaceholder.querySelector('nav');
      if (nav) {
        const height = nav.offsetHeight;
        document.body.style.paddingTop = height + 'px';
      }
    });

    // Bei Fenstergrößenänderung erneut berechnen
    window.addEventListener('resize', () => {
      const nav = document.querySelector('nav');
      if (nav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      }
    });
  });
