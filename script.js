// Assignment code here
// arrays for password possibles

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
var combined =[]

function generatePassword() {
  var finalPassword = "";

  var passwordLength = window.prompt(
    "How many characters would you like your password to be? Must be at least 8 and no more than 128 characters."
  );
  if (passwordLength < 8 || passwordLength > 128) { // verifying the user input follows mandatory length criteria
    alert("Please enter a number from 8 to 128.");
    return finalPassword;
  }
  // below is the window prompts asking for user to confirm desired critera of password output
  var verifyUpper = window.confirm(
    "Do you want your password to contain both Lowercase and Uppercase letters? Click 'Okay' for yes, 'Cancel' for only lowercase."
  );
  var verifyLower = window.confirm(
    "Do you want your password to contain lowercase letters?"
  );
  var verifyNumbers = window.confirm(
    "Do you want to include numbers in your password? Click 'Okay' for yes, and 'Cancel' for no."
  );
  var verifySymbols = window.confirm(
    "Do you want your password to contain special characters? i.e. '!, #, ?, *, ^, &,'. If yes, Click 'Okay'. If no, Click 'Cancel'."
  );
if (verifyUpper){ // if statemant verifying user-requested 
  combined = combined.concat(uppercase) //merging contents of different arrays to have the password select from an array including all the different array's contents
}
if (verifyLower) {
  combined =combined.concat(lowercase)
}
if (verifyNumbers) {
  combined =combined.concat(numbers)
}
if (verifySymbols) {
  combined = combined.concat(symbols)
}
if (combined.length === 0){ //if user does not select any options for password criteria, return an empty string and alert them to choose at least one option.
  window.alert("Please pick at least one option.")
  return ""; 
}
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*combined.length) // selecting a number of items in the combined array. the number of items corresponds to the user requested length
finalPassword= finalPassword + combined[randomIndex]
}
  return finalPassword // returning requested input to an empty string variable to output a password
};
// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
