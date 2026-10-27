const themeButton = document.getElementById('switchmode');
const currentYear = document.getElementById('current-year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (themeButton) {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    const updateThemeButton = () => {
        const isLightMode = document.body.classList.contains('light-mode');
        themeButton.setAttribute(
            'aria-label',
            isLightMode ? 'Aktifkan tema gelap' : 'Aktifkan tema terang'
        );
        themeButton.innerHTML = isLightMode
            ? '<span aria-hidden="true">☾</span>'
            : '<span aria-hidden="true">☼</span>';
    };

    updateThemeButton();

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem(
            'theme',
            document.body.classList.contains('light-mode') ? 'light' : 'dark'
        );
        updateThemeButton();
    });
}
