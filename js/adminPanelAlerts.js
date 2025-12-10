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

 
        
        document.addEventListener("click", function(e) {
            let btn = e.target.closest(".status-btn");
            if (!btn) return;
            
            const lang = localStorage.getItem("language") || "en";
            const span = btn.querySelector("span");
            
            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
                btn.classList.add("inactive");
                span.setAttribute("data-translate", "equipment.inactive");
                span.textContent = translations[lang].equipment.inactive;
            } else {
                btn.classList.remove("inactive");
                btn.classList.add("active");
                span.setAttribute("data-translate", "equipment.active");
                span.textContent = translations[lang].equipment.active;
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

        document.getElementById("editUserForm").addEventListener("submit", function (e) {
            e.preventDefault();
    
            const errors = [];
    
            const id = document.getElementById("userId").value;
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const role = document.getElementById("role").value;
    
            if (!firstName) errors.push(translations[getCurrentLang()].user.firstName + " " + "is required.");
            if (!lastName) errors.push(translations[getCurrentLang()].user.lastName + " " + "is required.");
            if (!email) errors.push(translations[getCurrentLang()].user.email + " " + "is required.");
    
            const errorBox = document.getElementById("validationErrors");
    
            if (errors.length > 0) {
                errorBox.classList.remove("d-none");
                errorBox.innerHTML = errors.join("<br>");
                return;
            } else {
                errorBox.classList.add("d-none");
            }
            console.log({
                id,
                firstName,
                lastName,
                email,
                role
            });
    
            alert(translations[getCurrentLang()].user.alertUpdated || "User updated!");
        });
    
        function getCurrentLang() {
            return localStorage.getItem("language") || "en";
        }
    
        document.getElementById("languageSelect").addEventListener("change", function() {
            localStorage.setItem("language", this.value);
            location.reload();
        });

        const languageSwitcher = document.getElementById('languageSwitcher');

        function translatePage(lang) {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const keys = el.getAttribute('data-translate').split('.');
                let text = translations[lang];
                keys.forEach(k => {
                    if (text) text = text[k];
                });
                if (text) el.innerText = text;
            });
        }
    
        languageSwitcher.addEventListener('change', function() {
            translatePage(this.value);
        });
    
        translatePage('en');
    
        document.getElementById("createUserForm").addEventListener("submit", function (e) {
            e.preventDefault();
    
            const errors = [];
    
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const role = document.getElementById("role").value;
    
            if (!firstName) errors.push(translations[languageSwitcher.value].user.firstName + " is required.");
            if (!lastName) errors.push(translations[languageSwitcher.value].user.lastName + " is required.");
            if (!email) errors.push(translations[languageSwitcher.value].user.email + " is required.");
            if (!password) errors.push(translations[languageSwitcher.value].user.password || "Password is required.");
    
            const errorBox = document.getElementById("validationErrors");
    
            if (errors.length > 0) {
                errorBox.classList.remove("d-none");
                errorBox.innerHTML = errors.join("<br>");
                return;
            } else {
                errorBox.classList.add("d-none");
            }
    
            console.log({ firstName, lastName, email, password, role });
    
            alert(translations[languageSwitcher.value].user.alertUpdated);
        });



        const form = document.getElementById("equipmentForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const equipment = {
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            quantity: parseInt(document.getElementById("quantity").value)
        };

        console.log("New Equipment:", equipment);
        const lang = localStorage.getItem("language") || "en";
        alert(translations[lang].equipment.alertCreated);
        window.location.href = "Equipment.html";
    });

    document.addEventListener("DOMContentLoaded", () => {
        const langSel = document.getElementById("languageSelect");
        const saved = localStorage.getItem("language") || "en";
        langSel.value = saved;
        applyTranslations();

        langSel.addEventListener("change", (e) => {
            localStorage.setItem("language", e.target.value);
            applyTranslations();
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const langSel = document.getElementById("languageSelect");
        const saved = localStorage.getItem("language") || "en";
        langSel.value = saved;
    
        langSel.addEventListener("change", (e) => {
            localStorage.setItem("language", e.target.value);
            if (typeof applyTranslations === "function") applyTranslations();
        });
    
        if (typeof applyTranslations === "function") applyTranslations();
    });


    document.getElementById("addEquipmentBtn").onclick = function () {
        const name = document.getElementById("equipmentName").value.trim();
        const count = document.getElementById("equipmentCount").value;
    
        if (!name || !count) {
            alert(translations[lang].classrooms.alertMissingEquipment);
            return;
        }
    
        const table = document.getElementById("equipmentTable");
        const tbody = table.querySelector("tbody");
    
        table.style.display = "table";
    
        const row = document.createElement("tr");
    
        row.innerHTML = `
            <td>${name}</td>
            <td>${count}</td>
            <td>
                <button type="button" class="btn btn-danger btn-sm delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
    
        tbody.appendChild(row);
    
        // Clear input fields
        document.getElementById("equipmentName").value = "";
        document.getElementById("equipmentCount").value = "";
    };
    
    // Remove equipment row
    document.addEventListener("click", function (e) {
        if (e.target.closest(".delete-btn")) {
            e.target.closest("tr").remove();
    
            const tbody = document.querySelector("#equipmentTable tbody");
            if (tbody.children.length === 0) {
                document.getElementById("equipmentTable").style.display = "none";
            }
        }
    });
    
    // Submit form
    document.getElementById("classroomForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const classroom = {
            name: document.getElementById("name").value,
            capacity: document.getElementById("capacity").value,
            location: document.getElementById("location").value,
            equipment: []
        };
    
        // Read equipment table
        document.querySelectorAll("#equipmentTable tbody tr").forEach(row => {
            const cols = row.querySelectorAll("td");
            classroom.equipment.push({
                name: cols[0].innerText,
                count: cols[1].innerText
            });
        });
    
        console.log("Sending classroom data:", classroom);
    
        // Send to backend
        fetch("/CreateClassroom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(classroom)
        })
        .then(res => res.json())
        .then(() => {
            alert(translations[lang].classrooms.alertCreated);
    
            window.location.href = "./Classrooms";
        })
        .catch(err => {
            console.error(err);
            alert(translations[lang].classrooms.alertError);
        });
    });
    
    // Cancel button
    document.getElementById("cancelBtn").onclick = function () {
        window.location.href = "./Classrooms";
    };

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


    const classrooms = [
        { roomNumber: "101", building: "Main", capacity: 40, isActive: true, features: ["Projector", "AC", "Whiteboard"] },
        { roomNumber: "204", building: "Science Block", capacity: 60, isActive: false, features: ["Smart TV", "Sound System"] }
    ];

    const container = document.getElementById("classroom-list");

    const featureKeys = {
"Projector": "feature_projector",
"AC": "feature_ac",
"Whiteboard": "feature_whiteboard",
"Smart TV": "feature_smarttv",
"Sound System": "feature_sound"
};

classrooms.forEach(c => {
const card = document.createElement("div");
card.className = "col-md-4";

card.innerHTML = `
    <div class="card h-100">
        <div class="card-header bg-metaclass-blue text-white">
            <h5 class="mb-0">
                <i class="fas fa-door-open"></i>
                <span data-translate="classrooms.room"></span> ${c.roomNumber}
            </h5>
        </div>

        <div class="card-body">
            <p>
                <i class="fas fa-building"></i>
                <strong data-translate="classrooms.building"></strong>: ${c.building}
            </p>

            <p>
                <i class="fas fa-users"></i>
                <strong data-translate="classrooms.capacity"></strong>: ${c.capacity}
            </p>

            <div class="mb-2">
                <strong data-translate="classrooms.features"></strong>:
            </div>

            <ul>
                ${c.features.map(f => `
                    <li data-translate="classrooms.${featureKeys[f]}"></li>
                `).join("")}
            </ul>
        </div>

        <div class="card-footer">
            <button class="status-btn btn ${c.isActive ? "btn-success" : "btn-danger"}"
                    data-translate="classrooms.${c.isActive ? "active" : "inactive"}">
            </button>
        </div>
    </div>
`;

container.appendChild(card);
});

    // TOGGLE ACTIVE/INACTIVE BUTTON
    document.addEventListener("click", function (e) {
if (e.target.classList.contains("status-btn")) {

    const lang = localStorage.getItem("language") || "en";

    if (e.target.classList.contains("btn-success")) {
        e.target.classList.remove("btn-success");
        e.target.classList.add("btn-danger");
        e.target.textContent = translations[lang].classrooms.inactive;
    } else {
        e.target.classList.remove("btn-danger");
        e.target.classList.add("btn-success");
        e.target.textContent = translations[lang].classrooms.active;
    }
}
});

