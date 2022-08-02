// Assignment code here
// arrays for password possibles

// var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
// var caseUpperLower = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var randomize = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// }



  
function generatePassword(){ 

var finalPassword = join(result)
var result = [passwordLengthPrompt(), verifyLower(), verifyUpper(), verifyNumbers(), verifySpecials()]
 
    
    var yesUpper = true(verifyUpper);
    var yesLower = true(verifyLower);
    var yesNumbers = true(verifyNumbers);
    var yesSpecials = true(verifySpecials);
    var passwordLength = ParseInt(passwordLengthPrompt.value);
    var passwordLengthPrompt = window.prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.")
    var verifyUpper = window.confirm("Do you want your password to contain both Lowercase and Uppercase letters? Click 'Okay' for yes, 'Cancel' for only lowercase.");
    var verifyLower = window.confirm("Do you want your password to contain lowercase letters?")
    var verifyNumbers = window.confirm("Do you want to include numbers in your password? Click 'Okay' for yes, and 'Cancel' for no.");
    var verifySpecials = window.confirm("Do you want your password to contain special characters? i.e. '!, #, ?, *, ^, &,'. If yes, Click 'Okay'. If no, Click 'Cancel'.");
  
  
    passwordLengthPrompt();{
    function getPasswordLength(){
      if (passwordLength < 8 || passwordLength > 128){
        alert("Please enter a number from 8 to 128.")
        return passwordLengthPrompt();
      }
      if (passwordLength === "" || passwordLength === null){
        alert("Please enter a numer from 8 to 128.")
        return passwordLengthPrompt();
      }
      if (passwordLength > 8 && passwordLength < 128){
        return finalPassword
      }
  
    }
    getPasswordLength(passwordLength);
  }


    verifyUpper();{
    function getRandomLower(){
      if (yesLower){
      return String.fromCharCode(Math.floor(Math.random()*26)+97); 
      }
      return finalPassword
    }
  }

    verifyLower();{
      function getRandomUpper(){
        if (yesUpper){
        return String.fromCharCode(Math.floor(Math.random()*26) + 65);
        }
        return finalPassword
      }
    }
      
    verifyNumbers();{
      function getRandomNumber(){
        if (yesNumbers){
        return String.fromCharCode(Math.floor(Math.random() * 26) +48);
        }
        return finalPassword
      }
    }

    verifySpecials();{
      function getRandomSymbol(){
        var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
        if (yesSpecials){
        return symbols[Math.floor(Mathrandom()*symbols.length)]
        }
        return finalPassword
      }
    }

    };

        
              
  
         
      

  
  
  
    // //beginning prompt asking for desired length
    // // convert user # input to an integer  //// put a for loop here to return the string-number as an integer in password user-given criteria
    
    
    //   passwordLengthPrompt= parseInt(passwordLengthPrompt);
      
    //     //conditionals to verify that password length meets requirements

    //     if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128){
    //     console.log("Your password must be at least 8 and no more than 128 characters. Try again.");
    //     window.alert("Your password must be at least 8 and no more than 128 characters. Try again.");
    //     return generatePassword();
    //     }
            
    //     if (passwordLengthPrompt === "" || passwordLengthPrompt === null){
    //     console.log("Please enter a number from 8 to 128.");
    //     window.alert("Please enter a number from 8 to 128.");
    //     return generatePassword();
    //     }
            
    //     else (passwordLengthPrompt > 8 && passwordLengthPrompt < 128);{
    //       toString(passwordLengthPrompt).length;
    //       console.log(passwordLengthPrompt);
          
          
    //     } 
  
  
        //   verifyCase
  //     if (verifyCase=true) {           
      
  //     }
      
    
  //     if (verifyCase=false) { //if condition is false, run loop through lowercase array
  //       for (i=0; i <lowercase.length; i++)
  //       lowercase=random[i]
  //     }
  //   }
  //   }
  // //  prompt asking if numbers should be included in their password
  
    
  //   if (verifyNumbers){  
      
  //     }        //if true run loop through numbers array
  //     for (i=0; i < passwordLengthPrompt; i++)
  //     numbers=random[i]
  //   }
    

  //   else { //if false, go to next prompt
      
  //   }
  
      
  
    
  //     if (verifySpecials){   
        
  //       } // if true run loop through special character array
  //     }
      
  //     else { // if false, generate password

  //     }
      


 generatePassword(finalPassword);


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
function writePassword(){
 var password = generatePassword();
  
 var passwordText = document.querySelector("#password");

  passwordText.value = password;
 }
  




// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);