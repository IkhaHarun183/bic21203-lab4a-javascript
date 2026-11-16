
// 1. Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// 2. Define checkInput() function
function checkInput() {

    // Read the input value
    const inputValue = userInput.value.trim();

    // Check if input is empty
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert input into a number
    else if (Number.isNaN(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    // Check if number is lower than 10
    else if (Number(inputValue) < 10) {
        result.textContent = "The number is lower than 10";
    }

    // Check if number is higher than 10
    else if (Number(inputValue) > 10) {
        result.textContent = "The number is higher than 10";
    }

    // Otherwise, the number is equal to 10
    else {
        result.textContent = "The number is equal to 10";
    }
}

// 3. Attach click event listener
checkBtn.addEventListener("click", checkInput);
