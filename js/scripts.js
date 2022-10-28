function countingUp(input) {
  countUp = [];
  for(let i = input; i >= 0; i --) {
    countUp.push(i)
  }
  countUp.reverse();
  return countUp;
  
}