function countUp(input) {
  countUpArray = [];
  for(let i = input; i >= 0; i --) {
    countUpArray.push(i)
  }
  countUpArray.reverse();
  return countUpArray;
}

function beepBoop(countUpArray) {
  for (let i = 1; i <= countUpArray.length; i+=1) {
    if (countUpArray[i] === 3) {
      countUpArray[i] = "won't you be my neighbor?";
    // } else if (countingUpArray[i] === 2) {
    //   countUpArray[i] = "Boop!";
    }
  }
  console.log(countUpArray)
}