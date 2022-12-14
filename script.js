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
// object that holds users preferences
let passwordOptions = {
  passLength: 0,
  lowerCasedCharacters: null,
  upperCasedCharacters: null,
  numericCharacters: null,
  specialCharacters: null,
  atLeastOneTypeSelected: false,
};
// Function to prompt user for password options
function getPasswordOptions() {
  let passLength;
  let isPassLengthCorrect = false;
  while (!isPassLengthCorrect) {
    passLength = Number(prompt("Enter length of password (10-64): "));
    if (passLength >= 10 && passLength <= 64) {
      passwordOptions.passLength = passLength;
      isPassLengthCorrect = true;
    }
  }
  // if user chooses type of character, that puts array in the right key of the passwordOptions object
  let wantLowercase = prompt("Do you want lowercase letters? (OK/Cancel): ");
  if (wantLowercase !== null) {
    passwordOptions.lowerCasedCharacters = lowerCasedCharacters;
    passwordOptions.atLeastOneTypeSelected = true;
  }

  let wantUppercase = prompt("Do you want uppercase letters? (OK/Cancel): ");
  if (wantUppercase !== null) {
    passwordOptions.upperCasedCharacters = upperCasedCharacters;
    passwordOptions.atLeastOneTypeSelected = true;
  }

  let wantNumeric = prompt("Do you want numbers? (OK/Cancel): ");
  if (wantNumeric !== null) {
    passwordOptions.numericCharacters = numericCharacters;
    passwordOptions.atLeastOneTypeSelected = true;
  }

  let wantSpecial = prompt("Do you want special characters? (OK/Cancel): ");
  if (wantSpecial === null) {
    passwordOptions.specialCharacters = null;
  } else {
    passwordOptions.specialCharacters = specialCharacters;
    passwordOptions.atLeastOneTypeSelected = true;
  }
}
// Function that resets previous password options (after each refresh)
function resetPasswordOptions() {
  passwordOptions = {
    passLength: 0,
    lowerCasedCharacters: null,
    upperCasedCharacters: null,
    numericCharacters: null,
    specialCharacters: null,
    atLeastOneTypeSelected: false,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let generatedPassword = "";
  // reset previous password options
  resetPasswordOptions();
  // call function for user options
  getPasswordOptions();
  if (passwordOptions.atLeastOneTypeSelected === false) {
    alert("You must choose at least one character! Try again!");
    let passwordText = document.querySelector("#password");

    passwordText.value = " ";
    location.reload();

    return generatedPassword;
  }
  // a higher order array to store arrays of characters selected from prompts
  let chosenArray = [];

  Object.entries(passwordOptions).forEach(([key, value]) => {
    if (value && typeof value !== "number" && typeof value !== "boolean") {
      chosenArray.push(value);
    }
  });

  // randomly choose elements from random sub-arrays
  for (let i = 1; i <= passwordOptions.passLength; i++) {
    let randomSubArray = getRandom(chosenArray);
    let randomCharacter = getRandom(randomSubArray);
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
