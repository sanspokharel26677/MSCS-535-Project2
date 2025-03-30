// app-vulnerable.js

/*
 * This is the insecure version of the app.
 * It uses eval() and does not sanitize user input, making it vulnerable to XSS.
 */

function submitComment() {
  // Grab user input from the textarea
  const userComment = document.getElementById("commentInput").value;

  // 🚨 Direct DOM injection using innerHTML (no sanitization) — XSS risk!
  const commentHTML = `<li>${userComment}</li>`;
  document.getElementById("commentList").innerHTML += commentHTML;

  // 🚨 Extremely dangerous: eval() on user input
  // Try typing: alert('XSS Attack!')
  try {
    eval(userComment); // this can execute anything the user enters
  } catch (err) {
    console.error("Error during eval:", err);
  }

  // Clear the input
  document.getElementById("commentInput").value = "";
}

