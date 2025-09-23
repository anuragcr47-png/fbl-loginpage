
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    window.location.href = "home.html";
  } else {
    alert("Please enter both email and password.");
  }
});