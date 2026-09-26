const screens = document.querySelectorAll(".screen");

function showPage(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openBook").addEventListener("click", () => {
  showPage("fiction");
});

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.next);
  });
});
