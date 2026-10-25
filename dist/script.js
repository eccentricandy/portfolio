const projects = document.querySelectorAll('.project-summary');

projects.forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    const detail = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!isOpen));
    button.querySelector('.project-toggle').textContent = isOpen ? '+' : '−';
    detail.hidden = isOpen;
  });
});

const parisTime = document.getElementById('paris-time');
const updateClock = () => {
  parisTime.textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date());
};
updateClock();
setInterval(updateClock, 1000);
document.getElementById('year').textContent = new Date().getFullYear();
