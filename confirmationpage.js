document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".home-button");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});
