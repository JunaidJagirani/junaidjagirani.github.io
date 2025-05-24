function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');
  const trigger = window.innerHeight * 0.8;
  if (about.getBoundingClientRect().top < trigger) {
    about.classList.add('visible');
  }
});

function toggleTheme() {
  const root = document.documentElement;
  const isLight = getComputedStyle(root).getPropertyValue('--bg-color') === '#ffffff';
  if (isLight) {
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--text-color', '#ffffff');
  } else {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#111111');
  }
}
