
var generateBtn = document.querySelector("#generate");
var userPswdLen = document.querySelector("#characterAmount");



function writePassword(event) {
    event.preventDefault();
    //console.log(userPswdLen.value)
    genPswd()

}

function genPswd() {
    var randStringArr = [getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymnbol()];

    //console.log(typeof parseInt(userPswdLen.value))
    var maxpswdLen = parseInt(userPswdLen.value)
    var num = (Math.floor(Math.random() * (maxpswdLen - 8) + 8));
      //console.log(num)
    var pswdstring = ""
    for (var i = 1; i <= num; i++) {
        var test = Math.floor(Math.random() * randStringArr.length)

        pswdstring += randStringArr[test]
        //return pswdstring
    }
    console.log(pswdstring)
}

function getRandomLower() {

    if (document.getElementById("includeLower").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else {
        return ('')

    }
}

function getRandomUpper() {

    if (document.getElementById("includeUpper").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else {
        return ('')

    }
}

function getRandomNumber() {
    if (document.getElementById("includeNumbers").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    } else {
        return ('')

    }

}
//  console.log(getRandomNumber());
//  console.log(getRandomUpper())
function getRandomSymnbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    if (document.getElementById("includeSymbols").checked == true) {
        return symbols[Math.floor(Math.random() * symbols.length)];
    } else {
        return ('')

    }
}
//  console.log(getRandomSymnbol())


generateBtn.addEventListener("click", writePassword);
