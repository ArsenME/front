// ================================
// Test Data
// ================================
const userFullName = "System administrator";

const stats = {
    totalBookings: 120,
    pendingBookings: 5,
    myBookings: 8,
    confirmedBookings: 4,
    totalClassrooms: 20,
    totalUsers: 50
};

const recentBookings = [
    { id: 1, status: "Pending", type: "Classroom", classroom: { roomNumber: "301" }, date: "2025-11-18", startTime: "10:00", endTime: "12:00", user: { fullName: "Dr. Lee" }, quantity: null },
    { id: 2, status: "Pending", type: "Classroom", classroom: { roomNumber: "301" }, date: "2025-11-18", startTime: "10:00", endTime: "12:00", user: { fullName: "Pr. James" }, quantity: null },
    { id: 3, status: "Confirmed", type: "Equipment", equipment: { name: "PC" }, date: "2025-11-18", startTime: "10:00", endTime: "12:00", user: { fullName: "Dr. Lee" }, quantity: 3 }
];

// ================================
// Translation Helper
// ================================
function t(key) {
    const lang = localStorage.getItem("language") || "en";
    return key.split(".").reduce((obj, k) => (obj ? obj[k] : null), translations[lang]) || key;
}

// ================================
// Transliterate User Name
// ================================
function getTranslatedName(name) {
    const lang = localStorage.getItem("language") || "en";
    if (lang === "en") return name; // No change

    // Choose transliteration map
    let map = lang === "ru" ? transliterate.toRu : transliterate.toHy;

    // Preserve original letter casing
    let result = "";
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        const isUpper = char === char.toUpperCase() && char !== char.toLowerCase();
        let translitChar = map(char.toLowerCase()) || char;
        result += isUpper ? translitChar.toUpperCase() : translitChar.toLowerCase();
    }
    return result;
}


// ================================
// Update Welcome Title
// ================================
function updateWelcomeTitle() {
    const userEl = document.getElementById("userFullName");
    if (!userEl) return;
    userEl.setAttribute("data-original-name", userFullName);
    userEl.textContent = `${t("hero.welcomeUser")}, ${getTranslatedName(userFullName)}`;
}

// ================================
// Render Stats
// ================================
function renderStats() {
    const container = document.getElementById("statsRow");
    if (!container) return;

    container.innerHTML = `
        ${createStat("stat-blue", stats.totalBookings, t("dashboard.totalBookings"), "fa-calendar-check")}
        ${createStat("stat-warning", stats.pendingBookings, t("dashboard.pending"), "fa-clock")}
        ${createStat("stat-orange", stats.totalClassrooms, t("dashboard.classrooms"), "fa-door-open")}
        ${createStat("stat-blue", stats.totalUsers, t("dashboard.users"), "fa-users")}
    `;
}

function createStat(color, count, label, icon) {
    return `
        <div class="col-md-3">
            <div class="stat-card ${color}">
                <div class="stat-icon"><i class="fas ${icon}"></i></div>
                <div class="stat-content"><h3>${count}</h3><p>${label}</p></div>
            </div>
        </div>
    `;
}

// ================================
// Translate Booking Status
// ================================
function translatedStatus(status) {
    const map = {
        Pending: t("dashboard.status.pending"),
        Confirmed: t("dashboard.status.confirmed"),
        Rejected: t("dashboard.status.rejected"),
        Cancelled: t("dashboard.status.cancelled")
    };
    return map[status] || status;
}

function statusColor(status) {
    if (status === "Confirmed") return "bg-success";
    if (status === "Pending") return "bg-warning";
    return "bg-danger";
}

// ================================
// Render Recent Bookings
// ================================
function renderRecentBookings() {
    const container = document.getElementById("recentBookingsContainer");
    if (!container) return;

    if (recentBookings.length === 0) {
        container.innerHTML = `<p class="text-center text-muted my-4">${t("dashboard.noBookings")}</p>`;
        return;
    }

    let html = `<div class="row g-3">`;
    recentBookings.forEach(b => {
        html += `
            <div class="col-md-6">
                <div class="booking-card">
                    <div class="booking-card-header">
                        <h5>${
                            b.type === "Classroom"
                                ? `<i class="fas fa-door-open text-primary"></i> ${t("dashboard.room")} ${b.classroom.roomNumber}`
                                : `<i class="fas fa-tools text-warning"></i> ${b.equipment.name}`
                        }</h5>
                        <span class="badge ${statusColor(b.status)}">${translatedStatus(b.status)}</span>
                    </div>

                    <div class="booking-card-body">
                        <p><i class="fas fa-user"></i> <strong>${t("dashboard.teacher")}:</strong> ${getTranslatedName(b.user.fullName)}</p>
                        <p><i class="fas fa-calendar"></i> <strong>${t("dashboard.date")}:</strong> ${b.date}</p>
                        <p><i class="fas fa-clock"></i> <strong>${t("dashboard.time")}:</strong> ${b.startTime} - ${b.endTime}</p>
                        ${b.type === "Equipment" ? `<p><i class="fas fa-boxes"></i> <strong>${t("dashboard.quantity")}:</strong> ${b.quantity}</p>` : ""}
                    </div>

                    <div class="booking-card-footer">
                        ${b.status === "Pending"
                            ? `<button class="btn btn-sm btn-success" onclick="approve(${b.id})"><i class="fas fa-check"></i> ${t("dashboard.approve")}</button>
                               <button class="btn btn-sm btn-danger" onclick="showRejectModal(${b.id})"><i class="fas fa-times"></i> ${t("dashboard.reject")}</button>`
                            : `<button class="btn btn-sm btn-warning" onclick="showcancelModal(${b.id})"><i class="fas fa-ban"></i> ${t("dashboard.cancel")}</button>`
                        }
                    </div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

// ================================
// Approve / Reject / Cancel
// ================================
function approve(id) { showAlert("success", t("dashboard.alertApproved")); }
function showRejectModal(id) { document.getElementById("rejectBookingId").value = id; new bootstrap.Modal(document.getElementById("rejectModal")).show(); }
function showcancelModal(id) { document.getElementById("rejectBookingId").value = id; new bootstrap.Modal(document.getElementById("cancelModal")).show(); }

// ================================
// Reject Form
// ================================
document.getElementById("rejectForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const id = document.getElementById("rejectBookingId").value;
    const reason = document.getElementById("reason").value;
    showAlert("danger", `${t("dashboard.alertRejected")} ${id}`);
});

// ================================
// Alert System
// ================================
function showAlert(type, msg) {
    const area = document.getElementById("alertArea");
    const box = document.getElementById("alertBox");
    const icon = document.getElementById("alertIcon");
    const text = document.getElementById("alertMessage");

    area.style.display = "block";
    box.className = type === "success" ? "alert alert-success alert-dismissible fade show" : "alert alert-danger alert-dismissible fade show";
    icon.className = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
    text.innerText = msg;
}

// ================================
// Language Switcher
// ================================
function setupLanguageSwitcher() {
    const langSelect = document.getElementById("languageSelect");
    if (!langSelect) return;

    // Load saved language
    const savedLang = localStorage.getItem("language") || "en";
    langSelect.value = savedLang;

    // Apply translations on load
    updateWelcomeTitle();
    renderStats();
    renderRecentBookings();

    // Listen for changes
    langSelect.addEventListener("change", e => {
        const lang = e.target.value;
        localStorage.setItem("language", lang);
        updateWelcomeTitle();
        renderStats();
        renderRecentBookings();
    });
}

// ================================
// Page Initialization
// ================================
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "../Home/Index.html";
        return;
    }

    setupLanguageSwitcher();
    updateWelcomeTitle();
    renderStats();
    renderRecentBookings();
});
