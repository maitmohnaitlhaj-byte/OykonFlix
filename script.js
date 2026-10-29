
const form = document.getElementById('leadForm');
const success = document.getElementById('success');

if (form && success) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    console.log('Tawjeeh Talib lead:', data);

    success.hidden = false;
    form.reset();

    success.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}

// Filtrer les établissements
const filters = document.querySelectorAll('.filter');
const schools = document.querySelectorAll('.school-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const selectedFilter = button.dataset.filter;

    schools.forEach((school) => {
      const types = (school.dataset.type || '').split(/\s+/);

      school.hidden =
        selectedFilter !== 'all' &&
        !types.includes(selectedFilter);
    });
  });
});

// Menu mobile
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.nav nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
