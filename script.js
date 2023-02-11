// Assignment code here

var userSelect = [];

var upperCaseArray = ['A' , 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q' ,'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z' ]; 
var lowerCaseArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArray = [0,1,2,3,4,5,6,7,8,9];
var symbolArray =['!','@','#','$','%','^','&','*','(',')','-','+','/','=','?','.'];

function generatePassword(){
//generate password based on  user input in prompt


  var charLength = parseInt(prompt('How many characters would you like in your password? (password length must be between 8-128 characters.'));

  if(isNaN(charLength) || charLength < 8 || charLength > 128){
    alert('Password length must be a numerical digit from 8 - 128. Please try again.');
    return false;

  } else {
 //continue if the user character length is valid
  var upperCase = confirm('Would you like upper case letters included in your password?');

  if (upperCase){
    userSelect = userSelect.concat(upperCaseArray);
  }

  var lowerCase = confirm('Would you like lower case letters included in your password?');

  if (lowerCase){
    userSelect = userSelect.concat(lowerCaseArray);
  }

  var numeric = confirm('Would you like numbers included in your password?');

  if (numeric) {
    userSelect = userSelect.concat(numArray);
  }

  var symbols = confirm('Would you like special characters included in your password?');

  if (symbols){
    userSelect = userSelect.concat(symbolArray);
  }

//validate user's input
}


for (var i = 0; i <charLength; i++){
  var randomValue = Math.floor(Math.random() * userSelect.length);
  var character =  userSelect[randomValue];
  console.log(character);
  charLength.push(character);

}
return charLength.join('');
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
 

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
