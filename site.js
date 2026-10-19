// Zapamatuje si ručně zvolený jazyk, aby příště nepřesměrovávalo podle prohlížeče.
document.querySelectorAll('.lang a[hreflang]').forEach(function (a) {
  a.addEventListener('click', function () {
    try { localStorage.setItem('itisjaro.lang', a.getAttribute('hreflang')); } catch (e) {}
  });
});
