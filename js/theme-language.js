// Theme and Language Management
$(document).ready(function () {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    updateThemeIcon(savedTheme);

    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    $('#languageSelect').val(savedLanguage);

    // Theme toggle
    $('#themeToggle').click(function () {
        const currentTheme = $('html').attr('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyTheme(newTheme);
        updateThemeIcon(newTheme);
        saveThemePreference(newTheme);
    });

    // Language change
    $('#languageSelect').change(function () {
        const selectedLanguage = $(this).val();
        localStorage.setItem('language', selectedLanguage);
        saveLanguagePreference(selectedLanguage);
        
        // Reload page to apply new language
        window.location.href = window.location.pathname + '?culture=' + selectedLanguage;
    });

    function applyTheme(theme) {
        $('html').attr('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function updateThemeIcon(theme) {
        const icon = $('#themeToggle i');
        if (theme === 'dark') {
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    }

    function saveThemePreference(theme) {
        $.post('/Account/SaveThemePreference', { theme: theme }, function (response) {
            if (response.success) {
                console.log('Theme preference saved');
            }
        });
    }

    function saveLanguagePreference(language) {
        $.post('/Account/SaveLanguagePreference', { language: language }, function (response) {
            if (response.success) {
                console.log('Language preference saved');
            }
        });
    }
});