// Manejador de cambio de tema con Bootstrap 5 y localStorage

const themeToggle = document.getElementById('themeToggle');
const htmlTag = document.documentElement;

// Al cargar la página, aplicar tema guardado
if (localStorage.getItem('theme') === 'dark') {
  htmlTag.setAttribute('data-bs-theme', 'dark');
  themeToggle.checked = true;
}

// Escuchar cambios en el switch
themeToggle.addEventListener('change', () => {
  const theme = themeToggle.checked ? 'dark' : 'light';
  htmlTag.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
});


//