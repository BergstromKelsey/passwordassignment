
var generateBtn = document.querySelector("#generate");
var userPswdLen = document.querySelector("#characterAmount");
var passbox = document.querySelector("#password");


function writePassword(event) {
    event.preventDefault();
    genPswd()

}

function genPswd() {
    var randStringArr = [getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymnbol()];

    //console.log(typeof parseInt(userPswdLen.value))
    var maxpswdLen = parseInt(userPswdLen.value)
    // var num = (Math.floor(Math.random() * (maxpswdLen - 8) + 8));
    //console.log(num)
    var pswdstring = ""
    for (var i = 1; i <= maxpswdLen; i++) {
        var test = Math.floor(Math.random() * randStringArr.length)
        pswdstring += randStringArr[test]
        // console.log(randStringArr[test])
     }
    // console.log(maxpswdLen)
    // console.log(pswdstring)
     passbox.value= pswdstring
     
}

function getRandomLower() {

    if (document.getElementById("includeLower").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
    } 
        
      else { 
          return ('')
         
         

      }
}

function getRandomUpper() {

    if (document.getElementById("includeUpper").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } 
      else {
        return ('')
        

      }
}

function getRandomNumber() {
    if (document.getElementById("includeNumbers").checked == true) {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    } 
      else {
        return ('')

      }

}
//  console.log(getRandomNumber())
//  console.log(getRandomUpper())
//  console.log(getRandomLower())



function getRandomSymnbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    if (document.getElementById("includeSymbols").checked == true) {
        return symbols[Math.floor(Math.random() * symbols.length)];
    } 
     else {
        return ('')
        

     }
}



generateBtn.addEventListener("click", writePassword);
