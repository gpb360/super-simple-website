// Dark mode functionality
function initTheme() {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  return darkMode;
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('darkMode', !isDark);
  updateButtonText(!isDark);
}

function updateButtonText(isDark) {
  const button = document.querySelector('.theme-toggle');
  if (button) {
    button.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
}

// Add theme toggle button to the page
function addThemeToggle() {
  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.onclick = toggleTheme;
  document.body.appendChild(button);
  
  const isDark = initTheme();
  updateButtonText(isDark);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', addThemeToggle);

// Original functionality
console.log('Simple Web App is running');