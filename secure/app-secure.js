// app-secure.js

/*
 * Secure version of the comment app.
 * - Avoids use of eval()
 * - Sanitizes input to prevent XSS
 * - CSP-compliant (no inline scripts or events)
 * - Uses addEventListener for event binding
 */

// Basic input sanitization function
function sanitize(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Main comment posting function
function submitComment() {
  const userInput = document.getElementById("commentInput").value;
  const safeInput = sanitize(userInput);

  const li = document.createElement("li");
  li.innerText = safeInput;

  document.getElementById("commentList").appendChild(li);
  document.getElementById("commentInput").value = "";

  console.log("✅ Secure comment posted: " + safeInput);
}

// Hook up the button after the DOM loads
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitBtn").addEventListener("click", submitComment);
});

