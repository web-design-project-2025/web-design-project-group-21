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

  if (password.length < 7 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    alert("Password must be at least 7 characters long and contain letters and a number.");
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
}

function switchLang() {
  const toggleBtn = document.getElementById("lang-toggle");
  const current = toggleBtn.textContent.includes("English") ? "sv" : "en";

  const t = {
    en: {
      signup: "Sign up",
      username: "Username",
      email: "Email",
      password: "Password",
      offers: "I'd like to receive personalized offers...",
      terms: "By registering, I confirm that I accept the terms...",
      button: "Sign me up!",
      toggle: "English / Swedish"
    },
    sv: {
      signup: "Skapa konto",
      username: "Användarnamn",
      email: "E-post",
      password: "Lösenord",
      offers: "Jag vill få personliga erbjudanden...",
      terms: "Genom att registrera mig godkänner jag villkoren...",
      button: "Registrera mig!",
      toggle: "Svenska / Engelska"
    }
  };

  const lang = t[current];
  toggleBtn.textContent = lang.toggle;
  document.querySelector(".signup-form h2").textContent = lang.signup;
  document.querySelector("label[for='username']").textContent = lang.username;
  document.querySelector("label[for='email']").textContent = lang.email;
  document.querySelector("label[for='password']").textContent = lang.password;
  document.getElementById("offers-label").textContent = lang.offers;
  document.getElementById("terms-label").textContent = lang.terms;
  document.getElementById("submit-btn").textContent = lang.button;
}
