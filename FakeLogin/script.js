function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("message").textContent = "✅ Login successful!";
    } else {
        document.getElementById("message").textContent = "❌ Invalid credentials.";
    }

    return false; // prevent form from actually submitting
}
