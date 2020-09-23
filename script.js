var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowecaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordEl = document.getElementsByClassName(".card-body");
var clickButton = document.getElementById("#generate");
console.log('clickButton:', clickButton);

var charSum = specList.concat(numberList, lowecaseList, uppercaseList);

var product = []

function generatePassword() {
    var passwordLength = prompt("How many characters will your password contain?");
    if (passwordLength > 7 || passwordLength < 129) {
        answerSpec = confirm("Shall your password contain any special characters?");
        answerNumber = confirm("Shall your password contain any integers?");
        answerLower = confirm("Shall your password contain any lowercase letters?");
        answerUpper = confirm("Shall you password contain any uppercase letters?");
    }
    else {
        prompt("please choose a password length between 8 and 128 characters")
    }
}

function confirmCriteria() {
    var confirmLength = alert("You have selected to generate a password length of " + passwordLength + "characters!");
    if (answerSpec === true) alert("You have selected to include special characters in your password!");
    else alert("You have selected to not include special characters in your password!");

    if (answerNumber === true) alert("You have selected to include numbers in your password!");
    else alert("You have selected to not include numbers in your password!");

    if (answerLower === true) alert("You have selected to include lowercase letters in your password!");
    else alert("You have selected to not include lowercase letters in your password!");

    if (answerUpper === true) alert("You have selected to include uppercase letters in your password!");
    else alert("You have selected to not include uppercase letters in your password!");
}

for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * charSum.length);
    randomstring += charSum.substring(rnum,rnum+1);
}

