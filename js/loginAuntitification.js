
document.getElementById("year").innerText = new Date().getFullYear();

// FORM VALIDATION + SUBMIT
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let errors = [];

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Reset errors
    document.getElementById("errorSummary").classList.add("d-none");
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("userError").innerText = "";


    // LOGIN CHECK
    if (email === "admin@polytechnic.am" && password === "admin") {
        localStorage.setItem("isLoggedIn", "admin");
        window.location.href = "../Dashboard/Dashboard.html";
        return;
    }

    if (email === "user@polytechnic.am" && password === "user") {
        localStorage.setItem("isLoggedIn", "user");
        window.location.href = "../User/Dashboard.html";
        return;
    }

    // WRONG CREDENTIALS
    errors.push("Incorrect Email address or password");
    document.getElementById("userError").innerText = "";
    document.getElementById("errorSummary").classList.remove("d-none");

    // Show errors if empty fields
    if (errors.length > 0) {
        const errorBox = document.getElementById("errorSummary");
        errorBox.innerHTML = errors.join("<br>");
        errorBox.classList.remove("d-none");
        return;
    }
});

// If user is logged in, redirect away from login page
if (localStorage.getItem("isLoggedIn") == "admin") {
    window.location.href = "../Dashboard/Dashboard.html";
}
if (localStorage.getItem("isLoggedIn") == "user") {
    window.location.href = "../User/Dashboard.html";
}
   
   document.getElementById("changePasswordForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const current = document.getElementById("currentPassword").value.trim();
        const pass = document.getElementById("newPassword").value.trim();
        const confirm = document.getElementById("confirmPassword").value.trim();

        document.getElementById("currentPasswordError").innerText = "";
        document.getElementById("newPasswordError").innerText = "";
        document.getElementById("confirmPasswordError").innerText = "";

        if (!current) {
            errors.push(translations[localStorage.language].changePassword.currentRequired);
            document.getElementById("currentPasswordError").innerText =
                translations[localStorage.language].changePassword.required;
        }

        if (pass.length < 6) {
            errors.push(translations[localStorage.language].changePassword.tooShort);
            document.getElementById("newPasswordError").innerText =
                translations[localStorage.language].changePassword.tooShort;
        }

        if (pass !== confirm) {
            errors.push(translations[localStorage.language].changePassword.noMatch);
            document.getElementById("confirmPasswordError").innerText =
                translations[localStorage.language].changePassword.noMatch;
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert(translations[localStorage.language].changePassword.success);
    });



    document.getElementById("changePasswordForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const current = document.getElementById("currentPassword").value.trim();
        const pass = document.getElementById("newPassword").value.trim();
        const confirm = document.getElementById("confirmPassword").value.trim();

        document.getElementById("errorSummary").classList.add("d-none");
        document.getElementById("currentPasswordError").innerText = "";
        document.getElementById("newPasswordError").innerText = "";
        document.getElementById("confirmPasswordError").innerText = "";

        if (!current) {
            errors.push(translations[localStorage.language].changePassword.currentRequired);
            document.getElementById("currentPasswordError").innerText =
                translations[localStorage.language].changePassword.required;
        }

        if (pass.length < 6) {
            errors.push(translations[localStorage.language].changePassword.tooShort);
            document.getElementById("newPasswordError").innerText =
                translations[localStorage.language].changePassword.tooShort;
        }

        if (pass !== confirm) {
            errors.push(translations[localStorage.language].changePassword.noMatch);
            document.getElementById("confirmPasswordError").innerText =
                translations[localStorage.language].changePassword.noMatch;
        }

        if (errors.length > 0) {
            const errorBox = document.getElementById("errorSummary");
            errorBox.innerHTML = errors.join("<br>");
            errorBox.classList.remove("d-none");
            return;
        }

        alert(translations[localStorage.language].changePassword.success);
    });


    // Set year automatically
   
    
