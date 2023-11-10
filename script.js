// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!@#$%^&*()_-=+[]{};:'`~,<.>/?|";

function generatePassword() {
  let tempPassword = '';
  let selectionStr = '';

  let length = prompt('length: ');    // return string
  let isLower = confirm("lower");       // return true or false
  let isUpper = confirm("upper");       // return true or false
  let isNumber = confirm("number");     // return true or false
  let isSpecial = confirm("special");   // return true or false

  selectionStr += lowerCaseStr;

  for (let i = 0; i < length; i++) {}


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
