document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let message = document.getElementById('message');

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
      message.textContent = 'All fields are required.';
  } else if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match.';
  } else {
      message.textContent = 'Sign up successful!';
      message.style.color = 'green';
      
      // Reset form
      document.getElementById('signupForm').reset();
  }
});