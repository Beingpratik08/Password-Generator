document.getElementById('textInput').value = 10; // default password length
const refreshBtn = document.getElementById('refresh');

const copyBtn = document.getElementById('copy');

const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

let passwordLength = document.getElementById('textInput').value;

const newPassword = document.getElementById('passwordValue');

// Get all checkbox elements
const numbersCheckbox = document.getElementById('numbers');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const symbolsCheckbox = document.getElementById('symbols');

// Update password length when slider or number input changes
function updatePasswordLength() {
    passwordLength = document.getElementById('textInput').value;
    generateNewPassword();
}

// Function to generate a new password based on selected checkboxes
function generateNewPassword() {
    // Clear the current password
    let allChars = '';
    
    // Update character sets based on checkbox selection
    if (numbersCheckbox.checked) allChars += numbers;
    if (uppercaseCheckbox.checked) allChars += uppercaseLetter;
    if (lowercaseCheckbox.checked) allChars += lowercaseLetter;
    if (symbolsCheckbox.checked) allChars += symbols;

    // If no character sets are selected, show a warning or handle this case
    if (!allChars) {
        newPassword.value = "Please select at least one character type!";
        return;
    }

    let password = '';

    // Generate password
    while (password.length < passwordLength) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password to the input field
    newPassword.value = password;

    console.log(password); // For debugging
}

// Event listener for checkboxes to regenerate password when changed
numbersCheckbox.addEventListener('change', generateNewPassword);
uppercaseCheckbox.addEventListener('change', generateNewPassword);
lowercaseCheckbox.addEventListener('change', generateNewPassword);
symbolsCheckbox.addEventListener('change', generateNewPassword);

// Initially generate password based on current settings
generateNewPassword();


// Function to copy the generated password to the clipboard
function copyPassword() {
    const passwordField = document.getElementById('passwordValue');
    navigator.clipboard.writeText(passwordField.value);
    alert('Password copied to clipboard!');
  }
  