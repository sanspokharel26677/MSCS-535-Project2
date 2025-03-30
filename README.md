# MSCS-535-Project2
# 🛡️ Secure Software Development - Project 2

## 📚 Project Overview

This project demonstrates **code injection vulnerabilities** in web applications, specifically focusing on:

1. **Cross-Site Scripting (XSS)** attacks
2. **Dynamic code evaluation** using `eval()`
3. **Secure coding techniques** for mitigating these vulnerabilities

It contains two separate versions of a simple comment-based web app:
- A **vulnerable version** (`/vulnerable`)
- A **secure version** (`/secure`)

---

## ⚠️ Vulnerable Version

### Description
- Accepts user comments and displays them on the page.
- **No input validation or sanitization.**
- Uses `innerHTML` to inject user input directly into the DOM.
- Uses `eval()` to dynamically execute user input as JavaScript.

### Demonstrated Attacks
- **Reflected XSS** using payload like:
  ```html
  <img src="x" onerror="alert('XSS')">
  ```
- **Persistent XSS**: Malicious content remains in DOM and re-executes when new comments are added.
- **Dynamic eval execution**:
  ```js
  alert('Hacked via eval!')
  ```

### Folder: `vulnerable/`
Files:
- `index.html`
- `style.css`
- `app-vulnerable.js`

---

## ✅ Secure Version

### Description
- Sanitizes all user input using character encoding.
- Uses `innerText` to safely render user content.
- Completely avoids use of `eval()`.
- Enforces a **Content Security Policy (CSP)** using a `<meta>` tag.
- Uses `addEventListener()` instead of inline `onclick` handlers to comply with CSP.

### Security Measures
- Input sanitization via `sanitize()` function.
- `innerText` used to prevent script injection.
- JavaScript events are registered using DOMContentLoaded instead of inline attributes.
- CSP: 
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self';">
  ```

### Folder: `secure/`
Files:
- `index.html`
- `style.css`
- `app-secure.js`

---

## 🧪 How to Run

You must use a local server to test properly due to browser security restrictions on `file://`:

Using Python 3:
```bash
cd vulnerable   # or secure
python3 -m http.server 8000
```

Then open your browser at:  
👉 `http://localhost:8000/index.html`

---

## 📸 Suggested Screenshots for Submission

- ✅ Successful XSS popup in the **vulnerable version**
- ✅ `eval()` input executing JavaScript in vulnerable version
- ✅ Sanitized input appearing as text in the **secure version**
- ✅ Console showing secure comment processing

---

## 👨‍💻 Author

**Sandesh Pokharel**  
Master's in Computer Science  
Secure Software Development - Project 2  
March 2025
