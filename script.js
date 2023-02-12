// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  let charLength = prompt("How long do you want your password to be?")
  if (charLength > 128 || charLength < 8) {
    return alert("INVALID. LENGTH NEEDS TO BE BETWEEN 8 AND 128.")
  } 

  let charUpper = confirm("Do you want uppercase letters?")
  if (charUpper) { 
    charUpper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     alert ("UPPERCASE SELECTED")
  }else {
     alert ("UPPERCASE NOT SELECTED")
  }
  let charLower = confirm("Do you want lowercase letters?")
  if (charLower) {
    charLower = 'abcdefghijklmnopqrstuvwxyz'
      alert ("LOWERCASE SELECTED")
  }else {
      alert ("LOWERCASE NOT SELECTED")
  }
  let charNumber = confirm("Do you want numbers?")
  if (charNumber) {
    charNumber = '0123456789'
    alert ('NUMBERS SELECTED')
  }else {
    alert ('NUMBERS NOT SELECTED')
  }
  
  let charSpecial = confirm("Do you want special characters?")
  if (charSpecial) {
    charSpecial = '`~!@#$%^&*(()-=_+[]{}|;:,./<>?'
    alert ('SPECIAL CHARACTERS SELECTED')
  }else {
    alert ('SPECIAL CHARACTERS NOT SELECTED')
  }
  let string = charUpper + charLower + charNumber + charSpecial
  let newPassword = ""

  for(i=0; i< charLength; i++) {
    let randomIndex = Math.floor(Math.random() * string.length)
    newPassword += string[randomIndex]
    // console.log(newPassword)
  }

  return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
