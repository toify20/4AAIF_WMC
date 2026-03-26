// beim Laden: alles ausblenden
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => (card.style.display = "none"));
});

function filterPizzerien() {
  const bezirk = document.getElementById("bezirkInput").value;
  const cards = document.querySelectorAll(".card");
  const hinweis = document.getElementById("hinweis");

  let gefunden = false;

  cards.forEach((card) => {
    if (card.dataset.bezirk === bezirk) {
      card.style.display = "block";
      gefunden = true;
    } else {
      card.style.display = "none";
    }
  });

  if (bezirk === "") {
    hinweis.textContent = "Bitte geben Sie einen Bezirk ein.";
  } else if (!gefunden) {
    hinweis.textContent = "Keine Pizzerien für diesen Bezirk gefunden.";
  } else {
    hinweis.textContent = "";
  }
}

function resetFilter() {
  document.getElementById("bezirkInput").value = "";
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => (card.style.display = "none"));

  document.getElementById("hinweis").textContent =
    "Bitte geben Sie einen Bezirk ein, um Pizzerien anzuzeigen.";
}
// Enter-Taste im Eingabefeld abfangen
document
  .getElementById("bezirkInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      filterPizzerien();
    }
  });
