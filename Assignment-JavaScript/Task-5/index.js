//Redundant
// Function to reverse the input
function reverseInput(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page
  
  // Get the input value
  var input = document.getElementById('input').value;
  
  // Reverse the input
  var reversedInput = reverseString(input);
  
  // Display the reversed input
  var outputElement = document.getElementById('output');
  outputElement.innerHTML = 'Reversed: ' + reversedInput;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Attach form submit event listener
document.getElementById('reverseForm').addEventListener('submit', reverseInput);
