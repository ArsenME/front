
    function getTranslatedName(name) {
        const lang = localStorage.getItem("language") || "en";
        if (lang === "en") return name;

        const map = lang === "ru" ? transliterate.toRu : transliterate.toHy;

        let result = "";
        for (let i = 0; i < name.length; i++) {
            const char = name[i];
            const isUpper = char === char.toUpperCase() && char !== char.toLowerCase();
            let translitChar = map(char.toLowerCase()) || char;
            result += isUpper ? translitChar.toUpperCase() : translitChar.toLowerCase();
        }
        return result;
    }

    function applyUserNames() {
        document.querySelectorAll(".user-name").forEach(el => {
            const original = el.getAttribute("data-name");
            el.textContent = getTranslatedName(original);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        applyUserNames();

        const languageSelect = document.getElementById("languageSelect");
        if (languageSelect) {
            languageSelect.addEventListener("change", () => applyUserNames());
        }
    });

   
document.addEventListener("DOMContentLoaded", () => {
        applyTranslations();

        const langSel = document.getElementById("languageSelect");
        const saved = localStorage.getItem("language") || "en";
        langSel.value = saved;

        langSel.addEventListener("change", (e) => {
            localStorage.setItem("language", e.target.value);
            applyTranslations();
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    const typeClassroom = document.getElementById("typeClassroom");
    const typeEquipment = document.getElementById("typeEquipment");
    const classroomFields = document.getElementById("classroomFields");
    const equipmentFields = document.getElementById("equipmentFields");

    function toggleBookingFields() {
        if (typeClassroom.checked) {
            classroomFields.style.display = "block";
            equipmentFields.style.display = "none";
        } else if (typeEquipment.checked) {
            classroomFields.style.display = "none";
            equipmentFields.style.display = "block";
        }
    }

    typeClassroom.addEventListener("change", toggleBookingFields);
    typeEquipment.addEventListener("change", toggleBookingFields);

    toggleBookingFields();
});   

  