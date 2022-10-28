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

 for (let i = 1; i <= stringArray.length; i+=1) {
  // if (stringArray[i].length > 1) {
  //   for (let j = 1; i <= stringArray[j].length; j+=1) {
  //     if (stringArray[j] === "3") {
  //       stringArray[i] = "won't you be my neighbor?";
        
  //     }
  //   }
  //   console.log(stringArray);
  // }

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