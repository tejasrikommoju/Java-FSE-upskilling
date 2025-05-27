// js/form-handler.js

// Select form and its elements
const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const citySelect = document.getElementById('city');
const phoneInput = document.getElementById('phoneNumber'); // optional if added in HTML
const messageTextarea = document.getElementById('message'); // optional if added in HTML
const confirmationOutput = document.getElementById('confirmationOutput'); // optional if added in HTML

// Track if form has unsaved changes (for onbeforeunload warning)
let formDirty = false;

// Mark form as dirty on any input
form.addEventListener('input', () => {
  formDirty = true;
  form.dataset.dirty = 'true';
});

// Exercise 11: Form Validation on Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation example (can be expanded)
  if (fullNameInput.value.trim() === '') {
    alert('Full Name is required');
    fullNameInput.focus();
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return;
  }

  // Additional validations can be added here...

  // If valid, proceed to async submit
  submitFormAsync();
});

// Email validation function
function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Exercise 12: Async form submission using Fetch API
async function submitFormAsync() {
  const formData = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    city: citySelect.value,
    phone: phoneInput ? phoneInput.value : '',
    message: messageTextarea ? messageTextarea.value : '',
  };

  try {
    // Simulate POST to a mock API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const result = await response.json();

    // Show confirmation to user
    showConfirmation(Thanks for registering, ${formData.fullName}! Your registration ID is ${result.id});

    // Reset form and dirty flag
    form.reset();
    formDirty = false;
    form.dataset.dirty = 'false';

  } catch (error) {
    alert(Submission failed: ${error.message});
  }
}

// Exercise 13: Debugging Helper - Log form data on submit attempt
form.addEventListener('submit', () => {
  console.log('Submitting form with data:', {
    fullName: fullNameInput.value,
    email: emailInput.value,
    city: citySelect.value,
  });
});

// Exercise 14: Using jQuery for DOM manipulation (Optional)
// This requires jQuery to be loaded on the page (not included here)
// If you want, I can add jQuery code snippet here

// Show confirmation output function
function showConfirmation(message) {
  if (confirmationOutput) {
    confirmationOutput.textContent = message;
    confirmationOutput.style.display = 'block';
  } else {
    alert(message); // fallback
  }
}

// Warn user if leaving page with unsaved changes
window.addEventListener('beforeunload', (e) => {
  if (formDirty) {
    e.preventDefault();
    e.returnValue = '';
  }
});