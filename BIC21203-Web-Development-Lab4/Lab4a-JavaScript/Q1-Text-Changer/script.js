
// 1. Select the paragraph and button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// 2. Define the changeMessage() function
function changeMessage() {
    message.textContent = "Hello there!";
}

// 3. Attach an event listener to the button
changeBtn.addEventListener("click", changeMessage);
