("use strict");
const numbers = document.querySelectorAll(".number");
const selectBtn = document.querySelector("#selector");
const array = ["I", "V", "X", "L", "C", "D", "M"];
let input = "";
let j = 0;
let x = true;
//function selectElement(id, valueToSelect) {
//   let element = document.getElementById(id);
//   element.value = valueToSelect;
// }
selectBtn.addEventListener("click", select);
function select(e) {
  for (let i = 0; i < numbers.length; i++) {
    if (e.target.value == "roman") {
      x = false;
      if (numbers[i].classList.contains("roman")) {
        // input = "";
        numbers[i].innerText = array[j];
        j++;
      } else {
        numbers[i].style.opacity = "0";
        numbers[i].style.pointerEvents = "none";
      }
    } else {
      x = true;
      numbers[i].style.opacity = "1";
      numbers[i].style.pointerEvents = "unset";
      numbers[i].innerText = i;
    }
  }

  j = 0;
}

//getting output value from output field
function getOutput() {
  return document.querySelector(".output").innerText;
}
//printing output value on output field
function printOutput(num) {
  document.querySelector(".output").innerText = num;
}

//getting input value from input field
function getInput() {
  return document.querySelector(".input").innerText.replace(/,/g, "");
}
//printing inputed text on input field
function printInput(num) {
  if (num == "") {
    document.querySelector(".input").innerText = "";
  } else if (/[a-zA-Z]/.test(num)) {
    document.querySelector(".input").innerText = num;
  } else {
    document.querySelector(".input").innerText =
      Number(num).toLocaleString("en");
  }
}

//setting onclikc listener listner on buttons and printing
//the value on input field when a button is clicked
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    document.querySelector(".output").innerText = "";
    if (input.length < 8 && x === true) {
      input += this.innerText;
      printInput(input);
    } else if (input.length < 1000000 && x === false) {
      input += this.innerText;
      printInput(input);
    } else {
      printInput(input);
    }
  });
});

//convert the number to other and print it on output field
const convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click", convert);
function convert() {
  if (x === true) {
    printOutput(convertToRoman(getInput()));
  } else {
    let dontKnowRoman = getInput();
    let decimal = convertToDecimal(dontKnowRoman);
    let ChekedRoman = convertToRoman(decimal);
    if (ChekedRoman == dontKnowRoman) {
      printOutput(convertToDecimal(getInput()));
    } else {
      printOutput("What The Hell! 🤬");
    }
  }
  input = "";
  printInput("");
}

//Clear everything on input and output field
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
function clear() {
  document.querySelector(".input").innerText = "";
  document.querySelector(".output").innerText = "";
  input = "";
}

//Convert Decimal numbers to Roman numbers
function convertToRoman(num) {
  let str = num.toString();
  let convertedRoman = "";
  if (num >= 1000) {
    let strNum = str.slice(0, -3);
    strNum = parseInt(strNum, 10);
    for (let i = 0; i < strNum; i++) {
      convertedRoman += "M";
    }
    let arr = str.split("").splice(-3).join("");
    arr = parseInt(arr, 10);
    str = arr;
  }
  if (str >= 100) {
    str = str.toString();
    let strNum = str.slice(0, -2);
    strNum = parseInt(strNum, 10);
    switch (strNum) {
      case 1:
        convertedRoman += "C";
        break;
      case 2:
        convertedRoman += "CC";
        break;
      case 3:
        convertedRoman += "CCC";
        break;
      case 4:
        convertedRoman += "CD";
        break;
      case 5:
        convertedRoman += "D";
        break;
      case 6:
        convertedRoman += "DC";
        break;
      case 7:
        convertedRoman += "DCC";
        break;
      case 8:
        convertedRoman += "DCCC";
        break;
      case 9:
        convertedRoman += "CM";
        break;
      case 0:
        convertedRoman += "";
        break;
    }
    let arr = str.split("").splice(-2).join("");
    arr = parseInt(arr, 10);
    str = arr;
  }
  if (str >= 10) {
    str = str.toString();
    let strNum = str.slice(0, -1);
    strNum = parseInt(strNum, 10);
    switch (strNum) {
      case 1:
        convertedRoman += "X";
        break;
      case 2:
        convertedRoman += "XX";
        break;
      case 3:
        convertedRoman += "XXX";
        break;
      case 4:
        convertedRoman += "XL";
        break;
      case 5:
        convertedRoman += "L";
        break;
      case 6:
        convertedRoman += "LX";
        break;
      case 7:
        convertedRoman += "LXX";
        break;
      case 8:
        convertedRoman += "LXXX";
        break;
      case 9:
        convertedRoman += "XC";
        break;
      case 0:
        convertedRoman += "";
        break;
    }
    let arr = str.split("").splice(-1).join("");
    arr = parseInt(arr, 10);
    str = arr;
  }

  if (str >= 1) {
    str = parseInt(str, 10);
    switch (str) {
      case 1:
        convertedRoman += "I";
        break;
      case 2:
        convertedRoman += "II";
        break;
      case 3:
        convertedRoman += "III";
        break;
      case 4:
        convertedRoman += "IV";
        break;
      case 5:
        convertedRoman += "V";
        break;
      case 6:
        convertedRoman += "VI";
        break;
      case 7:
        convertedRoman += "VII";
        break;
      case 8:
        convertedRoman += "VIII";
        break;
      case 9:
        convertedRoman += "IX";
        break;
      case 0:
        convertedRoman += "";
        break;
    }
  }
  return convertedRoman;
}

////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
function convertToDecimal(rNum) {
  let convertedDecimal = 0;
  rNum = rNum.split("");
  let comon = "";

  for (let i = 0; i < input.length; i++) {
    comon = rNum.splice(-1, 1).join("");
    switch (comon) {
      case "I":
        convertedDecimal += 1;
        break;
      case "V":
        convertedDecimal += 5;
        if (rNum.slice(-1) == "I") {
          convertedDecimal -= 2;
        }
        break;
      case "X":
        convertedDecimal += 10;
        if (rNum.slice(-1) == "I") {
          convertedDecimal -= 2;
        }
        break;
      case "L":
        convertedDecimal += 50;
        if (rNum.slice(-1) == "X") {
          convertedDecimal -= 20;
        }
        break;
      case "C":
        convertedDecimal += 100;
        if (rNum.slice(-1) == "X") {
          convertedDecimal -= 20;
        }
        break;
      case "D":
        convertedDecimal += 500;
        if (rNum.slice(-1) == "C") {
          convertedDecimal -= 200;
        }
        break;
      case "M":
        convertedDecimal += 1000;
        if (rNum.slice(-1) == "C") {
          convertedDecimal -= 200;
        }
        break;
    }
  }
  rNum = rNum.join("");
  return convertedDecimal;
}
//1000005
