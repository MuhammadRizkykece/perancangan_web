document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('.signup-btn');
  const loginButton = document.querySelector('.login-btn');
  const taglineText = document.querySelector('.text.kedua-text');

  // Alert saat klik register/login
  registerButton.addEventListener('click', () => {
    alert('Website Dalam Perbaikan');
  });

  loginButton.addEventListener('click', () => {
    alert('Website Dalam Perbaikan');
  });

  // Pergantian teks secara otomatis setiap 4 detik
  const texts = ['Horror', 'Action', 'Romance', 'Comedy'];
  let index = 0;

  setInterval(() => {
    taglineText.textContent = texts[index];
    index = (index + 1) % texts.length;
  }, 4000);
});