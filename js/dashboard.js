// -------------------------------
// Test Data
// -------------------------------
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
    {
        id: 1,
        status: "Pending",
        type: "Classroom",
        classroom: { roomNumber: "301" },
        date: "2025-11-18",
        startTime: "10:00",
        endTime: "12:00",
        user: { fullName: "Dr. Lee" },
        quantity: null
    },
    {
        id: 2,
        status: "Pending",
        type: "Classroom",
        classroom: { roomNumber: "301" },
        date: "2025-11-18",
        startTime: "10:00",
        endTime: "12:00",
        user: { fullName: "Pr. James" },
        quantity: null
    },
    {
        id: 3,
        status: "Confirmed",
        type: "Equipment",
        equipment: { name: "PC" },
        date: "2025-11-18",
        startTime: "10:00",
        endTime: "12:00",
        user: { fullName: "Dr. Lee" },
        quantity: 3
    }
];

document.getElementById("userFullName").innerText = `Welcome, ${userFullName}`;

function renderStats() {
    const container = document.getElementById("statsRow");
        container.innerHTML = `
            ${createStat("stat-blue", stats.totalBookings, "Total Bookings", "fa-calendar-check")}
            ${createStat("stat-warning", stats.pendingBookings, "Pending Approval", "fa-clock")}
            ${createStat("stat-orange", stats.totalClassrooms, "Classrooms", "fa-door-open")}
            ${createStat("stat-blue", stats.totalUsers, "Users", "fa-users")}
        `;}

function createStat(color, count, label, icon) {
    return `
        <div class="col-md-3">
            <div class="stat-card ${color}">
                <div class="stat-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="stat-content">
                    <h3>${count}</h3>
                    <p>${label}</p>
                </div>
            </div>
        </div>
    `;
}

renderStats();

// -------------------------------
// Render Recent Bookings
// -------------------------------
function renderRecentBookings() {
    const container = document.getElementById("recentBookingsContainer");

    if (recentBookings.length === 0) {
        container.innerHTML = `<p class="text-center text-muted my-4">No bookings found.</p>`;
        return;
    }

    let html = `<div class="row g-3">`;

    recentBookings.forEach(b => {
        html += `
            <div class="col-md-6">
                <div class="booking-card">
                    <div class="booking-card-header">
                        <h5>
                            ${b.type === "Classroom" ?
                                `<i class="fas fa-door-open text-primary"></i> Room ${b.classroom.roomNumber}` :
                                `<i class="fas fa-tools text-warning"></i> ${b.equipment.name}`
                            }
                        </h5>
                        <span class="badge ${statusColor(b.status)}">${b.status}</span>
                    </div>

                    <div class="booking-card-body">
                        <p><i class="fas fa-user"></i> <strong>Teacher:</strong> ${b.user.fullName}</p>
                        <p><i class="fas fa-calendar"></i> <strong>Date:</strong> ${b.date}</p>
                        <p><i class="fas fa-clock"></i> <strong>Time:</strong> ${b.startTime} - ${b.endTime}</p>
                        ${b.type === "Equipment" ? `<p><i class="fas fa-boxes"></i> <strong>Quantity:</strong> ${b.quantity}</p>` : ""}
                    </div>

                    ${b.status === "Pending" ?
                        `<div class="booking-card-footer">
                            <button class="btn btn-sm btn-success" onclick="approve(${b.id})">
                                <i class="fas fa-check"></i> Approve
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="showRejectModal(${b.id})">
                                <i class="fas fa-times"></i> Reject
                            </button>
                        </div>`
                        : `<div class="booking-card-footer">
                            <button class="btn btn-sm btn-warning" onclick="showcancelModal(${b.id})">
                                <i class="fas fa-ban"></i> Cancel
                            </button>
                        </div>`
                    }
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function statusColor(status) {
    if (status === "Confirmed") return "bg-success";
    if (status === "Pending") return "bg-warning";
    return "bg-danger";
}

renderRecentBookings();

// -------------------------------
// Approve (fake)
// -------------------------------
function approve(id) {
    alert("Booking approved!");
}

// -------------------------------
// Reject Modal
// -------------------------------
function showRejectModal(id = 1) {
    document.getElementById("rejectBookingId").value = id;
    new bootstrap.Modal(document.getElementById("rejectModal")).show();
}
// -------------------------------
// Cancel Modal
// -------------------------------
function showcancelModal(id = 1) {
    document.getElementById("rejectBookingId").value = id;
    new bootstrap.Modal(document.getElementById("cancelModal")).show();
}

// -------------------------------
// Reject (fake)
// -------------------------------
document.getElementById("rejectForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("rejectBookingId").value;
    const reason = document.getElementById("reason").value;

    alert(`Rejected booking ${id}\nReason: ${reason}`);
});

    // ALERT SYSTEM
    function showAlert(type, msg) {
        const area = document.getElementById("alertArea");
        const box = document.getElementById("alertBox");
        const icon = document.getElementById("alertIcon");
        const text = document.getElementById("alertMessage");

        area.style.display = "block";

        if (type === "success") {
            box.className = "alert alert-success alert-dismissible fade show";
            icon.className = "fas fa-check-circle";
        } else {
            box.className = "alert alert-danger alert-dismissible fade show";
            icon.className = "fas fa-exclamation-circle";
        }

        text.innerText = msg;
    }
   
// Load page into #pageContent
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById("pageContent").innerHTML = html;

            // Load JS file for the page (if exists)
            if (page === "dashboard.html") {
                const script = document.createElement("script");
                script.src = "dashboard.js";
                document.body.appendChild(script);
            }
        });
}

if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "../Home/Index.html";
}



function loadPage(page) {
fetch(page)
    .then(res => {
        if (!res.ok) throw new Error("Page not found: " + page);
        return res.text();
    })
    .then(html => {
        document.getElementById("pageContent").innerHTML = html;

        // reattach data-load listeners inside loaded page
        setupNavigation();
    })
    .catch(err => console.error(err));
}