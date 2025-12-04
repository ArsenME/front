
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

    
   
    