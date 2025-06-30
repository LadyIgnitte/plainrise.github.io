
document.getElementById("leadForm").addEventListener("submit", function (event) {
  const inputs = document.querySelectorAll("input");
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
    }
  });

  if (!valid) {
    event.preventDefault();
    document.getElementById("errorMessage").textContent = "É necessário preencher todos os campos.";
  } else {
    document.getElementById("errorMessage").textContent = "";
  }
});
