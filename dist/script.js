const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

function updateClock() {
  const now = new Date();
  dateElement.textContent = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).format(now);
  timeElement.textContent = `Paris, ${new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(now)}`;
}

updateClock();
setInterval(updateClock, 1000);

const navLinks = [...document.querySelectorAll('.project-nav a[data-section]')];
const observedSections = navLinks.map((link) => document.getElementById(link.dataset.section)).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === visible.target.id));
}, { rootMargin: '-15% 0px -60% 0px', threshold: [0, .2, .5] });

observedSections.forEach((section) => observer.observe(section));
