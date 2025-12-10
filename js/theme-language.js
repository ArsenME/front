$(document).ready(function () {

    /* ------------------ THEME ------------------ */

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    updateThemeIcon(savedTheme);

    $('#themeToggle').click(function () {
        const currentTheme = $('html').attr('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        applyTheme(newTheme);
        updateThemeIcon(newTheme);
        saveThemePreference(newTheme);
    });

    function applyTheme(theme) {
        $('html').attr('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function updateThemeIcon(theme) {
        const icon = $('#themeToggle i');
        icon.removeClass('fa-moon fa-sun');
        icon.addClass(theme === 'dark' ? 'fa-sun' : 'fa-moon');
    }

    function saveThemePreference(theme) {
        $.post('/Account/SaveThemePreference', { theme: theme }, function (response) {
            if (response.success) {
                console.log('Theme preference saved');
            }
        });
    }


    /* ------------------ LANGUAGE ------------------ */

    const savedLanguage = localStorage.getItem('language') || 'en';
    $('#languageSelect').val(savedLanguage);
    applyLanguage(savedLanguage);

    $('#languageSelect').change(function () {
        const selectedLanguage = $(this).val();

        localStorage.setItem('language', selectedLanguage);
        applyLanguage(selectedLanguage);
        saveLanguagePreference(selectedLanguage);
    });

    function saveLanguagePreference(language) {
        $.post('/Account/SaveLanguagePreference', { language: language }, function (response) {
            if (response.success) {
                console.log('Language preference saved');
            }
        });
    }

});
