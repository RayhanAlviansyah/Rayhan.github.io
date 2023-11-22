document.getElementById('exp').addEventListener('click', function () {
    var slideInContent = document.getElementById('slide-in');
    slideInContent.classList.toggle('exp');
    slideInContent.style.transform = slideInContent.classList.contains('exp') ? 'translateX(100%)' : 'translateX(0)';
  });
  