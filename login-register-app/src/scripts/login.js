// src/scripts/login.js
document.addEventListener('DOMContentLoaded', function() {
  // Redireciona para dashboard se já estiver logado
  if (localStorage.getItem('loggedInUser') || sessionStorage.getItem('loggedInUser')) {
    window.location.href = "index.html";
  }

  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const keepLoggedIn = document.getElementById('keepLoggedIn').checked;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      if (keepLoggedIn) {
        localStorage.setItem('loggedInUser', username);
      } else {
        sessionStorage.setItem('loggedInUser', username);
      }
      window.location.href = "index.html";
    } else {
      loginError.classList.remove('hidden');
    }
  });
});