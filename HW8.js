// Fetch elements
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operatorSelect = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

// Define operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

// Calculate and display result
calculateBtn.addEventListener("click", () => {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  const operator = operatorSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Error: Please enter valid numbers.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Error: Invalid operator.";
  }

  if (typeof result === "number") {
    result = result.toFixed(2);
  }

  resultDiv.textContent = `Result: ${result}`;
});


