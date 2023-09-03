$('.signup-show').click(function () {
  $('.registration-form').show();
  $('.login-form').hide();
});

$('.login-show').click(function () {
  $('.login-form').show();
  $('.registration-form').hide();
});

// Get references to form elements
const loginForm = document.querySelector('.login-form form');
const signupForm = document.querySelector('.registration-form form');

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password length
function isValidPassword(password) {
  return password.length >= 6;
}

// Add event listener for login form submission
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const passwordInput = this.querySelector('input[type="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Perform login action here (e.g., send a request to the server for authentication)
  // Assuming login is successful, you can redirect to 'dash.html'
  window.location.href = 'dash.html';
});

// Add event listener for signup form submission
signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const firstNameInput = this.querySelector('input[placeholder="First Name"]');
  const lastNameInput = this.querySelector('input[placeholder="Last Name"]');
  const emailInput = this.querySelector('input[type="email"]');
  const passwordInput = this.querySelector('input[type="password"]');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (firstName === '' || lastName === '') {
    alert('Please enter your full name.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Perform signup action here (e.g., send a request to the server for registration)
  // You can show a success message to the user, but do not redirect here
  alert('Sign up successful! Please proceed to login form');
});
