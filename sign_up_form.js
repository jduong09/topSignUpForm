document.addEventListener('DOMContentLoaded', () => {
  const formSubmit = document.getElementById('form_submit');
  const divPassword = document.querySelector ('fieldset > div > :nth-child(6)');

  formSubmit.addEventListener('click', (e) => {
    const inputPassword = document.getElementById('password');
    const inputPasswordConfirmation = document.getElementById('password_confirmation');

    if ((inputPassword.value === '') || (inputPassword.value !== inputPasswordConfirmation.value)) {
      divPassword.classList.add('error');
      inputPassword.classList.add('error');
      inputPasswordConfirmation.classList.add('error');
      e.preventDefault();
      return;
    } else {
      divPassword.classList.remove('error');
      inputPassword.classList.remove('error');
      inputPasswordConfirmation.classList.remove('error');
    }
  });
});