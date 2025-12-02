// language-manager.js
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = translations;
    }

    // Initialize language on page load
    init() {
        this.applyLanguage(this.currentLanguage);
        
        // Update language select dropdown
        $('#languageSelect').val(this.currentLanguage);
        
        // Set html lang attribute
        $('html').attr('lang', this.currentLanguage);
    }

    // Apply translations to all elements with data-i18n attribute
    applyLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update html lang attribute
        $('html').attr('lang', lang);
        
        // Get translations for current language
        const langTranslations = this.translations[lang];
        
        if (!langTranslations) {
            console.error(`Translations for language "${lang}" not found`);
            return;
        }

        // Update all elements with data-i18n attribute
        $('[data-i18n]').each((index, element) => {
            const $element = $(element);
            const key = $element.data('i18n');
            
            // Handle nested keys (e.g., "modal.reject.title")
            const value = this.getNestedValue(langTranslations, key);
            
            if (value !== undefined) {
                // Special handling for title tag
                if (element.tagName.toLowerCase() === 'title') {
                    $element.text(value);
                } 
                // Special handling for input placeholders
                else if ($element.is('input[placeholder]') || $element.is('textarea[placeholder]')) {
                    $element.attr('placeholder', value);
                }
                // Special handling for select options
                else if ($element.is('option')) {
                    $element.text(value);
                }
                // For all other elements
                else {
                    $element.text(value);
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // Update language select options
        this.updateLanguageSelectOptions(lang);
    }

    // Get nested value from object using dot notation
    getNestedValue(obj, key) {
        return key.split('.').reduce((o, k) => (o || {})[k], obj);
    }

    // Update language select dropdown text
    updateLanguageSelectOptions(currentLang) {
        $('#languageSelect option[value="en"]').text(currentLang === 'en' ? 'English' : 
            this.translations[currentLang]?.nav?.english || 'English');
        
        $('#languageSelect option[value="ru"]').text(currentLang === 'ru' ? 'Русский' : 
            this.translations[currentLang]?.nav?.russian || 'Русский');
        
        $('#languageSelect option[value="hy"]').text(currentLang === 'hy' ? 'Հայերեն' : 
            this.translations[currentLang]?.nav?.armenian || 'Հայերեն');
    }

    // Change language
    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.applyLanguage(lang);
            localStorage.setItem('language', lang);
            
            // Update server-side preference
            this.saveLanguagePreference(lang);
        } else {
            console.error(`Language "${lang}" is not supported`);
        }
    }

    // Save language preference to server
    saveLanguagePreference(language) {
        $.post('/Account/SaveLanguagePreference', { language: language }, function (response) {
            if (response.success) {
                console.log('Language preference saved');
            }
        }).fail(function() {
            console.warn('Could not save language preference to server');
        });
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get translation for a specific key
    translate(key) {
        const value = this.getNestedValue(this.translations[this.currentLanguage], key);
        return value || key;
    }
}

// Create global instance
const languageManager = new LanguageManager();

// Initialize when document is ready
$(document).ready(function() {
    languageManager.init();
});