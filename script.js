const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue.length < 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
    emailError.textContent = 'make sure email is more than 3 character and has a @ and a ,';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue.length < 8) {
    passwordError.textContent = 'Make sure that password is more than 8 characters';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

function validateForm() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  if (isEmailValid && isPasswordValid) {
    emailError.textContent = 'All good to go';
    emailError.classList.remove('error');
    emailError.classList.add('success');
    passwordError.textContent = 'All good to go';
    passwordError.classList.remove('error');
    passwordError.classList.add('success');
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  if (validateEmail() && validatePassword()) {
    if (confirm("Are you sure you want to submit?")) {
      alert("Successful signup!");
    } else {
      form.reset();
      emailError.textContent = '';
      passwordError.textContent = '';
    }
  }
});

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);