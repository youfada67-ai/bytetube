document.addEventListener('DOMContentLoaded', () => {
 const themeToggleBtn = document.getElementById('theme-toggle');
 const menuToggleBtn = document.getElementById('menu-toggle');
 const sidebar = document.getElementById('sidebar');
 const contactForm = document.getElementById('contact-form');
 const feedbackBox = document.getElementById('form-feedback');
 const currentTheme = localStorage.getItem('theme');

 
 if (currentTheme) {
 document.documentElement.setAttribute('data-theme', currentTheme);
 if (themeToggleBtn) {
 themeToggleBtn.textContent = currentTheme === 'dark' ? ' Light Mode' : ' Dark Mode';
 }
  }
 // Dark Mode Toggle
 if (themeToggleBtn) {
 themeToggleBtn.addEventListener('click', () => {
 let theme = document.documentElement.getAttribute('data-theme');
 if (theme === 'dark') {
 document.documentElement.setAttribute('data-theme', 'light');
 localStorage.setItem('theme', 'light');
 themeToggleBtn.textContent = ' Dark Mode';
  } else {
 document.documentElement.setAttribute('data-theme', 'dark');
 localStorage.setItem('theme', 'dark');
 themeToggleBtn.textContent = ' Light Mode';
   }
  });
 }

 if (menuToggleBtn && sidebar) {
 menuToggleBtn.addEventListener('click', () => {
 sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
 });
   }
 // Contact Form Validation
 if (contactForm) {
 contactForm.addEventListener('submit', (e) => {
 e.preventDefault();
 document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
 feedbackBox.classList.add('hidden');
 const fullname = document.getElementById('fullname').value.trim();
 const email = document.getElementById('email').value.trim();
 const subject = document.getElementById('subject').value.trim();
 const message = document.getElementById('message').value.trim();
 let isValid = true;
 if (fullname === '') {
 document.getElementById('name-error').textContent = 'Full name is required.';
 isValid = false;
  }
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (email === '' || !emailRegex.test(email)) {document.getElementById('email-error').textContent = 'Please enter a valid email address.';
 isValid = false;
  }
 if (subject === '') {
 document.getElementById('subject-error').textContent = 'Subject is required.';
 isValid = false;
   }
 if (message.length < 10) {
 document.getElementById('message-error').textContent = 'Message must be at least 10 characters long.';
 isValid = false;
   }
 if (isValid) {
 feedbackBox.textContent = `Thank you, ${fullname}! Your message has been
successfully validated.`;
 feedbackBox.classList.remove('hidden');
 feedbackBox.classList.add('success');
 contactForm.reset();
   } else {
 feedbackBox.textContent = 'Please fix the errors above before submitting.';
 feedbackBox.classList.remove('hidden');
 feedbackBox.classList.add('error');
   }
  });
 }
});