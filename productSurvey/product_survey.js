// Declare constants for form elements
const submitButton = document.getElementById('submitBtn');

function submitFeedback() {
  // Retrieve values inside the function to get the latest values
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  
  // Check if all fields are filled
  if (username && age && email && job && designation && productType && feedback) {
    alert('Thank you for your valuable feedback');

    // Display user information
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Show the user information section
    document.getElementById('userInfo').style.display = 'block';
  } else {
    alert('Please fill out all fields before submitting your feedback.');
  }
}

// Attach event listener to the submit button
submitButton.addEventListener('click', submitFeedback);

// Trigger the submit function on Enter key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});
