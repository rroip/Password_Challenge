// Characters Arrays
let specialChar = ['!','@','#','$','%','^','&','*','(',')','?','~','_','/'];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let passwordLength = length;
let choice = [];

// Add event listener to generate button
let passwordText = document.querySelector("#password");

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  let verification = getPrompts();
  
  if (verification) {
  let passwordValue = generatePassword();
  passwordText.value = passwordValue;
  } else {
    passwordText.value = "";
  }
}
function generatePassword() {
let password = "";
for (let i = 0; i < passwordLength; i++) {
  let randomChar = Math.floor(Math.random() * choice.length);
  password = password + choice[randomChar]; 
  }
  return password;
} 

// Generate Password based on the prompts
function getPrompts() {
  choice = [];  
  
  passwordLength = parseInt(prompt("How long do you want your password to be? (8 - 128 characters)"));
    if (Number.isNaN(passwordLength)) {
      alert ("You have to enter a number")
      return false;
    }
    if(passwordLength < 8 || passwordLength > 128) {
      alert("Your password length has to be from 8 to 128 characters. Please try again.")
      return false;
    }
    if (confirm("Please select if you want lower case latters in your password")) {
     choice = choice.concat(lowerCase);
    }
    if (confirm("Please select if you want upper case latters in your password")) {
     choice = choice.concat(upperCase);
    }
    if (confirm("Please select if you want special characters in your password")) {
      choice = choice.concat(specialChar);
    }
    if (confirm("Please select if you want numbers in your password")) {
      choice = choice.concat(numbers);
    }
    return true;  
  }

