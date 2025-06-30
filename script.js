
function scrollToForm() {
  const form = document.getElementById('lead-form');
  if (form) form.scrollIntoView({ behavior: 'smooth' });
}

function validateForm(event) {
  const form = document.getElementById('lead-form');
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  requiredFields.forEach(field => {
    if (!field.value) {
      isValid = false;
    }
  });
  const error = document.getElementById('form-error');
  if (!isValid) {
    event.preventDefault();
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
    alert('Inscrição recebida com sucesso! Em breve entraremos em contato.');
  }
}

window.onload = function () {
  let count = 15;
  const span = document.getElementById("countdown");
  setInterval(() => {
    if (count > 1) {
      count--;
      span.textContent = count;
    }
  }, 5000);
};
