var charLengthInput = document.getElementById('charLength');
var capitalLetter = document.getElementById('capitalLetter');
var specialChar = document.getElementById('specialChar');
var number = document.getElementById('number');
var passwordLengthDisplay = document.getElementById('passwordLengthDisplay');

const numbers = '0123456789';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const capitalCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!£$%^&*#@,._/+-*=';

let generatedPassword = '';

function generatePassword() {
    const length = parseInt(charLengthInput.value);
    console.log(length); // Log the password length for debugging purposes

    generatedPassword = '';

    if (isNaN(length) || length <= 0) {
        console.log('Invalid password length');
        return 'Invalid password length';
    }

    for (let i = 0; i < length; i++) {
        if (capitalLetter.checked) {
            generatedPassword += capitalCaseLetters.charAt(Math.floor(Math.random() * capitalCaseLetters.length));
        }
        if (specialChar.checked) {
            generatedPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        }
        if (number.checked) {
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    }

    console.log(generatedPassword);
    return generatedPassword;
}
