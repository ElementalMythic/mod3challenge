// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  
  var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberCaseChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCaseChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."];
  
  var pwLength = window.prompt("How many characters do you want to generate");
  console.log(pwLength);
  
  if (pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
  window.alert("Pleasea enter a number that must be at least 8 characters and no more than 129 characters");
    return;
}


 var lowerCase = window.confirm("Would you like to include lowercase characters in your password?");
 
 var upperCase = window.confirm("Would you like to include uppercase characters in your password?");

 var numericCase = window.confirm("Would you like to include numeric characters in your password?");

 var specialCase = window.confirm("Would you like to include special characters in your password?");
 

  
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
