function togglePassword() {
  const pw = document.getElementById("password");
  pw.type = pw.type === "password" ? "text" : "password";
}

function register(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const termsAccepted = document.getElementById("terms-check").checked;

  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the terms and conditions.");
    return;
  }

  if (
    password.length < 7 ||
    !/\d/.test(password) ||
    !/[a-zA-Z]/.test(password)
  ) {
    alert(
      "Password must be at least 7 characters long and contain letters and a number."
    );
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
}
