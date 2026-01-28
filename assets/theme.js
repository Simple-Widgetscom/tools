// Shared day/night theme logic for all apps
// Light theme: 7:00 - 20:00, Dark theme: 20:00 - 7:00

function updateTheme() {
  const hour = new Date().getHours();
  const isDark = hour < 7 || hour >= 20;
  document.documentElement.classList.toggle('dark', isDark);
}

// Apply theme immediately
updateTheme();

// Check every minute for theme changes
setInterval(updateTheme, 60000);
