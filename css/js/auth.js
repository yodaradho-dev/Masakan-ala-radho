// CEK LOGIN
function cekLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "login.html";
  }
}

// LOGIN
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    localStorage.setItem("login", "true");
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah!");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
