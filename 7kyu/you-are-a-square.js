const isSquare = function (n) {
  const squareResult = Math.sqrt(n);
  if (n < 0) {
    return false;
    //`${n}: Negative numbers cannot be square numbers`
  } else {
    if (squareResult % 1 === 0) {
      return true;
      //`${n} is a square number (${squareResult} * ${squareResult})`;
    } else {
      return false;
      //`${n} is not a square number`;
    }
  }
};
