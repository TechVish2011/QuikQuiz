// --- Dark Mode / Light Mode Logic ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icons = document.querySelectorAll('#theme-toggle i, #theme-toggle-dash i');
    icons.forEach(icon => {
        if(theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Attach event listeners
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-dash');
themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});

// Mock Actions for the new buttons
const actionButtons = document.querySelectorAll('.action-trigger, .highlight-card .btn');
actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cardText = e.target.parentElement.innerText.split('\n')[0]; 
        alert(`Opening module for: ${cardText}. (Data will be loaded from backend later!)`);
    });
});
