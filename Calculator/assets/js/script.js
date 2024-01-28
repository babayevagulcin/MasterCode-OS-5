let form = document.querySelector(".calculator");
let operator = document.querySelector(".operator");
let firstNum = document.querySelector(".first-num");
let secondNum = document.querySelector(".second-num");
let btn = document.querySelector(".btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (operator.value == "+") {
    console.log(firstNum.value + secondNum.value);
  }
  if (operator.value == "-") {
    console.log(firstNum.value - secondNum.value);
  }
  if (operator.value == "*") {
    console.log(firstNum.value * secondNum.value);
  }
  if (operator.value == "/") {
    console.log(firstNum.value / secondNum.value);
  }
  else{
     alert("Error")
  }
});
