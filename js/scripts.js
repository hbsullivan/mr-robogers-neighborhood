//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let i = input; i >= 0; i --) {
    countUpArray.push(i);
  }
  countUpArray.reverse();
  return countUpArray;
}

function beepBoop(countUpArray) {

  let stringArray = countUpArray.map(function(element){
    return element.toString();
  });

  for (let i = 0; i < stringArray.length; i+=1) {
      if (stringArray[i].includes("3")) {
        stringArray[i] = " Won't you be my neighbor? ";
      } else if (stringArray[i].includes("2")) {
        stringArray[i] = " Boop! ";
      } else if (stringArray[i].includes("1")) {
        stringArray[i] = " Beep! ";
      }
  }
    return stringArray
  }
  
  

 //UI Logic

 function gatherInput(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value
  let newInput = countUp(userInput)

  document.getElementById("return").innerText = beepBoop(newInput);
 }

 window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
 })