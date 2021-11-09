persistence(39) === 3; // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

persistence(999) === 4; // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0; // because 4 is already a one-digit number

function persistence(num) {
  let counter = 0;
  let number = num;

  while (number.toString().length !== 1) {
    number = number
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    counter++;
  }

  return counter;
}

// Other way
function persistence(num) {
  let newNum = num;
  let counter = 0;
  if (num < 10) {
    return 0;
  } else {
    do {
      const numArr = newNum.toString().split("");
      let acumulator = 1;
      for (let i = 0; i < numArr.length; i++) {
        acumulator = acumulator * numArr[i];
      }
      newNum = acumulator;
      counter++;
    } while (newNum >= 10);
    return counter;
  }
}
