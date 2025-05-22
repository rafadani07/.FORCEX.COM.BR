// This file contains the logic for registering new users. It manages form validation and stores user information in localStorage.

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const registerError = document.getElementById('registerError');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (password !== confirmPassword) {
            registerError.textContent = "As senhas não coincidem.";
            registerError.classList.remove('hidden');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            registerError.textContent = "Nome de usuário já está em uso.";
            registerError.classList.remove('hidden');
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "login.html"; // Redirect to login page after successful registration
    });
});