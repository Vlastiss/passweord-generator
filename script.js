var charLength = document.getElementById('charLength');
var capitalLetter = document.getElementById('capitalLetter');
var specialChar = document.getElementById('specialChar');
var number = document.getElementById('number');
var passwordLengthDisplay = document.getElementById('passwordLengthDisplay');

const numbers = '0123456789'
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const capitalCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const specialCharacters = '!£$%^&*#@,._/+-*='

function generatePassword () {

}

capitalLetter.addEventListener('click', function () {
    if (capitalLetter.checked) {
        console.log(capitalLetter.value)
    }
} )

