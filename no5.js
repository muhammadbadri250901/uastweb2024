const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        errorMessage.textContent = 'Format email tidak valid. Contoh: user@example.com';
    } else {
        errorMessage.textContent = '';
        alert('Email berhasil dikirim!');
    }
});
