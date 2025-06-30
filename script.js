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
    alert('Inscrição recebida com sucesso!');
  }
}