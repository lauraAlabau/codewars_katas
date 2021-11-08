function squareDigits(num) {
  const numToArr = num.toString().split("");
  let squareArr = [];
  for (let i = 0; i < numToArr.length; i++) {
    const squareNumber = numToArr[i] * numToArr[i];
    squareArr.push(squareNumber);
  }
  const newNum = Math.floor(squareArr.join(""));

  return newNum;
}
