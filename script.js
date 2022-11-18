// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let userPassword = "";
let passwordOptions = {
  passLength: 0,
  passLowercase: false,
  passUppercase: false,
  passNumeric: false,
  passSpecial: false,
};
// Function to prompt user for password options
function getPasswordOptions() {
  let passLength;
  let isPassLengthCorrect = false;
  while (!isPassLengthCorrect) {
    passLength = Number(prompt("Enter length of password (10-64): "));
    if (passLength >= 10 && passLength <= 64) {
      isPassLengthCorrect = true;
    }
  }
  passwordOptions.passLength = passLength;

  let wantLowercase = prompt("Do you want lowercase letters? (OK/Cancel): ");
  if (wantLowercase !== null) {
    passwordOptions.passLowercase = true;
  }

  let wantUppercase = prompt("Do you want lowercase letters? (OK/Cancel): ");
  if (wantUppercase !== null) {
    passwordOptions.passUppercase = true;
  }
  console.log(passwordOptions);
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}
// console.log(getRandom(numericCharacters)); //testing

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
