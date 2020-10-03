var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordEl = document.querySelector("#password");
var generateEl = document.querySelector("#generate");
// console.log('generateEl:', generateEl)
var userChoices;
var capitalize = function (x) {
    return x.toUpperCase();
};

var uppercaseList = lowercaseList.map(capitalize);
console.log('uppercaseList:', uppercaseList);

generateEl.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});

function generatePassword() {
    quantify = parseInt(prompt("How many total characters will your password contain?"));
    console.log('The password is ' + quantify  + ' characters long')
    if (!quantify) {
        alert("Please select a value between 8 and 128!");
    } else if (quantify < 8 || quantify > 128) {
        quantify = parseInt(prompt("Please select a value between 8 and 128!"));
    } else {
        answerSpec = confirm("Click OK if you would like your password to contain any special characters - otherwise click cancel.");
        answerNumber = confirm("Click OK if you would like your password to contain any integers - otherwise click cancel.");
        answerLower = confirm("Click OK if you would like your password to contain any lowercase letters - otherwise click cancel.");
        answerUpper = confirm("Click OK if you would like you password to contain any uppercase letters - otherwise click cancel.");
    };

    if (!answerSpec && !answerNumber && !answerLower && !answerUpper) {
        userChoices = alert("You must ok at least one criterion!");
    } else if (answerSpec && answerNumber && answerLower && answerUpper) {
        userChoices = specList.concat(numberList, lowercaseList, uppercaseList);
    } 
        
    else if (answerSpec && answerNumber && answerUpper) {
        userChoices = specList.concat(numberList, uppercaseList);
    } else if (answerSpec && answerUpper && answerLower) {
        userChoices = specList.concat(uppercaseList, lowercaseList);
    } else if (answerSpec && answerNumber && answerLower) {
        userChoices = specList.concat(numberList, lowercaseList);
    } else if (answerUpper && answerNumber && answerLower) {
        userChoices = uppercaseList.concat(numberList, lowercaseList);
    }

    else if (answerSpec && answerNumber) {
        userChoices = specList.concat(numberList);
    } else if (answerSpec && answerUpper) {
        userChoices = specList.concat(uppercaseList);
    } else if (answerSpec && answerLower) {
        userChoices = specList.concat(lowercaseList);
    } else if (answerNumber && answerUpper) {
        userChoices = numberList.concat(uppercaseList);
    } else if (answerLower && answerNumber) {
        userChoices = lowercaseList.concat(numberList);
    } else if (answerLower && answerUpper) {
        userChoices = lowercaseList.concat(uppercaseList);
    }

    else if (answerSpec) {
        userChoices = specList;
    } else if (answerNumber) {
        userChoices = numberList;
    } else if (answerUpper) {
        userChoices = uppercaseList;
    } else if (answerLower) {
        userChoices = lowercaseList;
    };

    var password = [];

    for (var i = 0; i < quantify; i++) {
        var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        password.push(pickChoices);
    }

    var pw = password.join("");
    UserInput(pw);
    return pw;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
