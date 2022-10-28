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
  console.log(stringArray);
  
  

//  for (let i = 1; i <= stringArray.length; i+=1) {

//    if (stringArray[i].includes("3")) {
//       stringArray[i] = "won't you be my neighbor?";
//     } else if (stringArray[i] === "2") {
//       stringArray[i] = "Boop!";
//     } else if (stringArray[i] === "1") {
//        stringArray[i] = "Beep!"
//     }
//   }

//    return stringArray
 }