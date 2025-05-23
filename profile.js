// Load user data from login
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    document.getElementById("user-name").textContent = user.username;
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("user-phone").textContent = user.phone || "+46 (8) 40861124";
  } else {
    alert("No user data found. Please login.");
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  document.getElementById("user-name").textContent = user?.username || "Guest User";
  document.getElementById("user-email").textContent = user?.email || "No email available";
  document.getElementById("user-phone").textContent = user?.phone || "No phone number";
});

  }
});
