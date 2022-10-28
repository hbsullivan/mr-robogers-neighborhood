function countingUp(input) {
  countUp = [];
  for(let i = input; i >= 0; i --) {
    countUp.push(i)
  }
  countUp.reverse();
  console.log(countUp)
  // return countUp;
  
}

// function beepBoop(countUp) {
//   let replacedBeepBoop = [];
//   countUp.forEach(function(element) {
//     if (element.includes(3)) {
//       let replacedThree = countUp.splice(countUp.indexOf(3), 1, "won't you be my neighbor?");
//       return replacedThree;
//       console.log(replacedThree);
//     }
//     console.log(replacedThree);
//   })
// }