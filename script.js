document.getElementById("leadForm").addEventListener("submit", function (e) {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const company = document.querySelector('input[name="company"]').value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (!name || !email || !company) {
    e.preventDefault();
    errorMessage.textContent = "Por favor, preencha todos os campos.";
  }
});