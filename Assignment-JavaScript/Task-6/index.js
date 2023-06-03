//Redundant here
// Function to sort the letters in alphabetical order
function sortLetters(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page
  
  // Get the input value
  var input = document.getElementById('input').value;
  
  // Sort the letters in alphabetical order
  var sortedString = sortString(input);
  
  // Display the sorted string
  var outputElement = document.getElementById('output');
  outputElement.innerHTML = 'Alphabetical Order: ' + sortedString;
}

// Function to sort a string in alphabetical order
function sortString(str) {
  return str.split('').sort().join('');
}

// Attach form submit event listener
document.getElementById('sortForm').addEventListener('submit', sortLetters);
