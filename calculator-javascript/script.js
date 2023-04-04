function insert(num) {
  let number = document.querySelector(".numbers-calc").innerHTML;
  document.querySelector(".numbers-calc").innerHTML = number + num;
}

function erase() {
  document.querySelector(".numbers-calc").innerHTML = ""
  document.querySelector(".result-number").innerHTML = ""
}

function eraseLastNumber() {
  let calcNumbers = document.querySelector(".numbers-calc").innerHTML;
  document.querySelector(".numbers-calc").innerHTML = calcNumbers.substring(0, calcNumbers.length - 1)
  console.log(calcNumbers.length)
}

function calc() {
  let calcNumbers = document.querySelector(".numbers-calc").innerHTML;

  if(calcNumbers) {
    document.querySelector(".result-number").innerHTML = eval(calcNumbers)
  } else {
    alert("Digite números para fazer um cálculo");
  }
}