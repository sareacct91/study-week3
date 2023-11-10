// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!@#$%^&*()_-=+[]{};:'`~,<.>/?|";

function generatePassword() {
  let tempPassword = '';
  let selectionStr = '';

  // Get user selection
  let length = prompt('Password Length (8 - 128): ');
  // Check for valid number, if not ask for length again
  if (length < 8 || length > 128) {
    alert("Please input a number between 8-128!");
    return generatePassword();
  }
  // Get user selection
  selectionStr += confirm("Include Lowercase?  Yes/No") ? lowerCaseStr : '';
  selectionStr += confirm("Include Uppercase?  Yes/No") ? upperCaseStr : '';
  selectionStr += confirm("Include Numbers?  Yes/No") ? numericStr : '';
  selectionStr += confirm("Include Special Characters?  Yes/No") ? specialStr : '';
  
  // Check for valid selections, if not ask for selctions again
  if (selectionStr === '') {
    alert("No possible Password with the options picked!");
    return generatePassword();
  }
  // Generate random password
  for (let i = 0; i < length; i++) {
    tempPassword += selectionStr[Math.floor(Math.random() * selectionStr.length)];
  }
  // Return password
  return tempPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);