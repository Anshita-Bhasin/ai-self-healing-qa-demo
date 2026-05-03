const form = document.querySelector("#loginForm");
const message = document.querySelector("[data-testid='login-message']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Login successful. Dashboard is ready.";
});
