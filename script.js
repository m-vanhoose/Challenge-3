// Assignment code here
// Math.floor(Math.random() * 10)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charLength = prompt("How long do you want your password to be?")

  if(charLength > 128 || charLength < 8) {
    return "NOT A VALID LENGTH"
  }

  var string = "qwertyuiop123456789"
  var newPassword = ""

  for(i=0; i< charLength; i++) {
    var randomIndex = Math.floor(Math.random() * string.length)
    newPassword += string[randomIndex]
    console.log(newPassword)
  }

  return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
