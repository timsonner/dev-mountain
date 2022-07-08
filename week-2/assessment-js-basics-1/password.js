// performs checks on 'password' string, logging success or failure

/*
for success - 'password' must contain no white space, be >= 10 chars and <= 20 chars, be uncommon (checked against a common password list, which is redundant because all the other checks rule this out), and contain at least one of the following:
- capital letter
- lowercase letter
- number
- special character
*/

let password = `password`;
const successMLS = `
  _____                             _ 
 / ____|                           | |
| (___  _   _  ___ ___ ___  ___ ___| |
 \\___ \\| | | |/ __/ __/ _ \\/ __/ __| |
 ____) | |_| | (_| (_|  __/\\__ \\__ \\_|
|_____/ \\__,_|\\___\\___\\___||___/___(_)
Success: Password accepted
`;
const fauilureMLS = `
 ______    _ _                _ 
|  ____|  (_) |              | |
| |__ __ _ _| |_   _ _ __ ___| |
|  __/ _\` | | | | | | \'__/ _ \\ |
| | | (_| | | | |_| | | |  __/_|
|_|  \\__\,_|_|_|\\__\,_|_|  \\___(_)
Failure: Password rejected
`;

// declare functions:
function containsNumber(str) {
  //   return /[0-9]/.test(str);
  return /[\d]/.test(str);
}
function containsUppercaseLetter(str) {
  return /[A-Z]/.test(str);
}
function containsLowercaseLetter(str) {
  return /[a-z]/.test(str);
}
function containsWhiteSpace(str) {
  return /\s/.test(str);
}
function containsPunctuationAndSymbols(str) {
  return /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(str);
}
function isUnique(str) {
  let boolIsUnique = true; // stays true unless 'password' is present in password list
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("common-password-list.txt"),
  });
  // event listener wating for input to return /r/n or /n/r
  lineReader.on("line", function (line) {
    console.log("Checking against: ", line); // does not log to terminal
    if (str === line) {
      boolIsUnique = false; // false because 'password' exists in password list
    }
  });
  lineReader.close();
  return boolIsUnique; // bool return
}

// perform checks on 'password' string
if (
  password.length >= 10 &&
  password.length <= 20 &&
  isUnique(password) &&
  containsNumber(password) &&
  containsUppercaseLetter(password) &&
  containsLowercaseLetter(password) &&
  containsPunctuationAndSymbols(password) &&
  !containsWhiteSpace(password) &&
  isUnique(password)
) {
  console.log(successMLS);
} else {
  console.log(fauilureMLS);
}
