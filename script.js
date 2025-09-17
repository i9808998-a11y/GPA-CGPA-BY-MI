// Optional: Add button click sound or effects
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    console.log(button.textContent + " clicked!");
  });
});
