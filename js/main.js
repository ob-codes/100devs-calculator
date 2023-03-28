document.querySelector("#operDivide").addEventListener("click", clickOperator);
document.querySelector("#operMinus").addEventListener("click", clickOperator);
document.querySelector("#operPlus").addEventListener("click", clickOperator);
document.querySelector("#operMultiply").addEventListener("click", clickOperator);

document.querySelector("#num0").addEventListener("click", clickNumber);
document.querySelector("#num1").addEventListener("click", clickNumber);
document.querySelector("#num2").addEventListener("click", clickNumber);
document.querySelector("#num3").addEventListener("click", clickNumber);
document.querySelector("#num4").addEventListener("click", clickNumber);
document.querySelector("#num5").addEventListener("click", clickNumber);
document.querySelector("#num6").addEventListener("click", clickNumber);
document.querySelector("#num7").addEventListener("click", clickNumber);
document.querySelector("#num8").addEventListener("click", clickNumber);
document.querySelector("#num9").addEventListener("click", clickNumber);
document.querySelector("#numDot").addEventListener("click", clickNumber);

document.querySelector("#equals").addEventListener("click", clickEqual);

let num1 = 0, num2 = 0, strNum1 = "", strNum2 = "",  operator = "";
let isOperatorPressed = false;

function clickNumber(e) {
  currentEl = e.target.innerHTML;

  console.log(currentEl);
  if (!isOperatorPressed) {
    strNum1 += currentEl;
    document.querySelector(".screen-upper").innerText = strNum1;

  } else {
    strNum2 += currentEl; 
    num2 = Number(strNum2);   
    document.querySelector(".screen-upper").innerText += strNum2;
  }
}

function clickOperator(e) {
  isOperatorPressed = true;
  num1 = Number(strNum1);
  strNum2 = "";

  operator = e.target.innerHTML ;  
  document.querySelector(".screen-upper").innerText += operator;
  console.log(`operator: ${operator}`);
}

function clickEqual() {
  let result = 0;
  num2 = Number(strNum2);

  switch (operator) {
    case '/':
      result = num1 / num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;  
    default:
      break;
  }

  document.querySelector("#result").innerText = result;
  num1 = result;
  strNum1 = result;

  console.log(`result: ${result}, num1: ${num1}, num2: ${num2}`);
}