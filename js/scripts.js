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
  console.log(stringArray)

 for (let i = 0; i < stringArray.length; i+=1) {
  // if (stringArray[i].length > 1) {
  //   for (let j = 1; i <= stringArray[j].length; j+=1) {
  //     if (stringArray[j] === "3") {
  //       stringArray[i] = "won't you be my neighbor?";
        
  //     }
  //   }
  //   console.log(stringArray);
  // }
  firstNumber = stringArray[i].charAt(0);
  secondNumber = stringArray[i].charAt(1);
  thirdNumber = stringArray[i].charAt(3);

  if (firstNumber === "3" || secondNumber === "3" || thirdNumber === "3") {
     stringArray[i] = "Won't you be my neighbor?";
  // } else if (firstNumber === "2" || secondNumber === "2" ||  thirdNumber === "2") {
  //    stringArray[i] = "Boop!";
  // } else if (firstNumber === "1" || secondNumber === "1" || thirdNumber === "1") {
  //     stringArray[i] = "Beep!"
  // }
  
  
  
  
  
  firstNumber = stringArray[i].charAt()
    if (stringArray[i] === "3") {
      stringArray[i] = "Won't you be my neighbor?";
    } else if (stringArray[i] === "2") {
      stringArray[i] = "Boop!";
    } else if (stringArray[i] === "1") {
       stringArray[i] = "Beep!"
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