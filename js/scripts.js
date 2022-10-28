function countUp(input) {
  countUpArray = [];
  for(let i = input; i >= 0; i --) {
    countUpArray.push(i)
  }
  countUpArray.reverse();
  return countUpArray;
}

function beepBoop(countUpArray) {

  let stringArray = countUpArray.map(function(element){
    return element.toString();

  });

  for (let i = 0; i < stringArray.length; i+=1) {

  firstNumber = stringArray[i].charAt(0);
  secondNumber = stringArray[i].charAt(1);
  thirdNumber = stringArray[i].charAt(3);
  fourthNumber = stringArray[i].charAt(4);

  if (firstNumber === "3" || secondNumber === "3" || thirdNumber === "3" || fourthNumber === "3") {
     stringArray[i] = " Won't you be my neighbor? ";
  } else if (firstNumber === "2" || secondNumber === "2" ||  thirdNumber === "2" || fourthNumber === "2") {
     stringArray[i] = " Boop! ";
  } else if (firstNumber === "1" || secondNumber === "1" || thirdNumber === "1" || fourthNumber === "1") {
      stringArray[i] = " Beep! "
  }
  
  }
  return stringArray
  
 }


 //UI Logic

 function gatherInput(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value
  countUp(userInput)

  document.getElementById("return").innerText = beepBoop(countUpArray);
 }

 window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
 })