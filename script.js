var charLengthInput = document.getElementById('charLength');
var capitalLetter = document.getElementById('capitalLetter');
var specialChar = document.getElementById('specialChar');
var number = document.getElementById('number');
var passwordLengthDisplay = document.getElementById('passwordLengthDisplay');
var passwordArea = document.getElementById('password');

const numbers = '0123456789';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const capitalCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!£$%^&*#@,._/+-*=';

let generatedPassword = '';

passwordLengthDisplay.innerHTML = charLengthInput.value;
charLengthInput.addEventListener('input', function() {
    passwordLengthDisplay.innerHTML = charLengthInput.value;
});

function generatePassword() {
    const length = parseInt(charLengthInput.value);

    generatedPassword = '';

    if (isNaN(length) || length <= 0) {
        console.log('Invalid password length');
        return 'Invalid password length';
    }

    const maxCapitalLength = capitalLetter.checked ? Math.floor(length / 2) : 0;
    const maxSpecialLength = specialChar.checked ? Math.floor(length / 2) : 0;
    const maxNumberLength = number.checked ? Math.floor(length / 2) : 0;

    for (let i = 0; i < length; i++) {
        if (i < maxCapitalLength && capitalLetter.checked) {
            generatedPassword += capitalCaseLetters.charAt(Math.floor(Math.random() * capitalCaseLetters.length));
        }
        if (i < maxSpecialLength && specialChar.checked) {
            generatedPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        }
        if (i < maxNumberLength && number.checked) {
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        generatedPassword += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    }

    generatedPassword = generatedPassword.slice(0, length);
    passwordArea.innerHTML = generatedPassword;
    return generatedPassword;
}
