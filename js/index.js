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

// Logout system
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../Home/Index.html";
});

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