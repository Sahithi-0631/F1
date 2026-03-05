const enterBtn = document.getElementById("enterBtn");
const hero = document.getElementById("hero");
const app = document.getElementById("app");

enterBtn.addEventListener("click", () => {
    hero.style.display = "none";
    app.classList.remove("hidden");
});

/* F1 Teams Data */
const teams = [
    { team: "Red Bull Racing", base: "Austria", engine: "Honda RBPT", car: "RB20", championships: 6, driver: "Max Verstappen" },
    { team: "Ferrari", base: "Italy", engine: "Ferrari", car: "SF-24", championships: 16, driver: "Charles Leclerc" },
    { team: "Mercedes", base: "Germany", engine: "Mercedes", car: "W15", championships: 8, driver: "Lewis Hamilton" },
    { team: "McLaren", base: "UK", engine: "Mercedes", car: "MCL38", championships: 8, driver: "Lando Norris" },
    { team: "Aston Martin", base: "UK", engine: "Mercedes", car: "AMR24", championships: 0, driver: "Fernando Alonso" },
    { team: "Alpine", base: "France", engine: "Renault", car: "A524", championships: 2, driver: "Esteban Ocon" },
    { team: "Williams", base: "UK", engine: "Mercedes", car: "FW46", championships: 9, driver: "Alex Albon" },
    { team: "RB", base: "Italy", engine: "Honda RBPT", car: "VCARB 01", championships: 0, driver: "Yuki Tsunoda" },
    { team: "Sauber", base: "Switzerland", engine: "Ferrari", car: "C44", championships: 0, driver: "Valtteri Bottas" },
    { team: "Haas", base: "USA", engine: "Ferrari", car: "VF-24", championships: 0, driver: "Kevin Magnussen" }
];

const select = document.getElementById("teamSelect");
const container = document.getElementById("cardContainer");

/* Populate dropdown */
teams.forEach(t => {
    const option = document.createElement("option");
    option.value = t.team;
    option.textContent = t.team;
    select.appendChild(option);
});

/* Show selected team */
select.addEventListener("change", () => {
    const team = teams.find(t => t.team === select.value);
    container.innerHTML = "";

    if (!team) return;

    container.innerHTML = `
        <div class="card">
            <h2>${team.team}</h2>
            <p><span>Base:</span> ${team.base}</p>
            <p><span>Engine:</span> ${team.engine}</p>
            <p><span>Car:</span> ${team.car}</p>
            <p><span>Championships:</span> ${team.championships}</p>
            <p><span>Star Driver:</span> ${team.driver}</p>
        </div>
    `;
});
