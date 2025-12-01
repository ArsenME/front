// Apply translations to all elements
function applyLanguage(lang) {
    localStorage.setItem("language", lang);

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-translate]").forEach(el => {
        let key = el.getAttribute("data-translate").split(".");
        let value = key.reduce((obj, k) => (obj ? obj[k] : null), dict);

        if (value) el.textContent = value;
    });
}

// Load language on page load
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("language") || "en";
    const select = document.getElementById("languageSelect");

    if (select) {
        select.value = saved;
        select.addEventListener("change", () => applyLanguage(select.value));
    }

    applyLanguage(saved);
});
