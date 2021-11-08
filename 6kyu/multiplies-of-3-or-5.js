function solution(number) {
  if (number < 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = number - 1; i > 0; i--) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}
