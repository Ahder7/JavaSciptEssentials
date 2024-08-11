function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operations
        let additionResult = calculate(num1, num2, 'add');
        let multiplicationResult = calculate(num1, num2, 'multiply');
        let divisionResult = calculate(num1, num2, 'divide');

        // Display the results
        displayResult(`Addition: ${additionResult}, Multiplication: ${multiplicationResult}, Division: ${divisionResult}`);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function calculate(a, b, operation) {
    // Introduce a debugger statement to pause execution
    debugger; // The code will pause here for inspection

    // Assign a character value to observe behavior
    let charValue = 'A';
    
    // Perform the operation based on the operation type
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'multiply') {
        return a * b;
    } else if (operation === 'divide') {
        // Prevent division by zero
        return a / b;
    } else {
        return 'Invalid operation';
    }
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}



//
//    function performOperation() {
    // Get user input from input fields
//    let num1 = parseInt(document.getElementById('input1').value);
//    let num2 = parseInt(document.getElementById('input2').value);
//    // Check if inputs are valid numbers
//    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
//                    let result = multiply(num1, num2);

                    // Display the result
  //                  displayResult(result);
  //              } else {
  //                  displayResult('Please enter valid numbers');
  //              }
  //          }

  //          function multiply(a, b) {
  //              // Introduce a debugger statement to pause execution
  //              debugger;

                // Multiply the numbers
  //              return a * b;
  //          }

  //          function displayResult(result) {
                // Display the result in the paragraph element
  //              const resultElement = document.getElementById('result');
  //              resultElement.textContent = `The result is: ${result}`;
  //          }
        