// Assignment code here

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
var caseUpperLower = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var text: document.querySelector("#password"),
    
  //beginning prompt asking for desired length
var verifyLength = function(){
  // convert user # input to an integer
  window.prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.");
    var x = window.prompt();
    var num1 = parseInt(x);
      if (num1 < 8 || num1 > 128){
      console.log("Your password must be at least 8 and no more than 128 characters. Try again.");
      window.alert("Your password must be at least 8 and no more than 128 characters. Try again.");
      return false;}
          
      if (num1 === "" || num1 === null){
      console.log("Please enter a number from 8 to 128.");
      window.alert("Please enter a number from 8 to 128.");
      return false;}
          
      else (num1 > 8 && num1 < 128);{
      console.log([x].length)
        return [x].length;
      }
};
        
      // if password length follows requirements, boolean to confirm if uppercase and lowercase are allowed
var verifyCase = function (){
  window.confirm("Do you want your password to contain both Lowercase and Uppercase letters? Click 'Okay' for yes, 'Cancel' for only lowercase.");
    if (window.confirm=true){ // if condition is true, run loop through caseUpperLower array
      for (caseUpperLower i=0; i < caseUpperLower.length; i++);
    }
    else { //if condition is false, run loop through lowercase array
      for (lowercase i=0; i <lowercase.length; i++);
    }
    break;
}
// prompt asking if numbers should be included in their password
var verifyNumbers = function(){
  window.confirm("Do you want to include numbers in your password? Click 'Okay' for yes, and 'Cancel' for no.");
  if (window.confirm=true){ //if true run loop through numbers array
    for (numbers i=0; i < numbers.length; i++)
  }
  break;

  else { //if false, go to next prompt
    
  }
};      
    
var verifySpecials = function(){
  window.confirm("Do you want your password to contain special characters? i.e. '!, #, ?, *, ^, &,'. If yes, Click 'Okay'. If no, Click 'Cancel'.");
    if (window.confirm=true){ // if true run loop through special character array
      for (symbols i=0; i < symbols.length; i++)
    }
    break;
    else { // if false, generate password

    }
}



var generate = function generatePassword(){ 
  verifyLength();
  verifyCase();
  verifyNumbers();
  verifySpecials();
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
  
  
// passwordText.value = password;


// Add event listener to generate button
 /* generateBtn.addEventListener("click", writePassword);{
  generatePassword();
} */