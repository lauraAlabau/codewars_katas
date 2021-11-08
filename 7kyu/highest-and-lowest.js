function highAndLow(numbers) {
  const arrNumbers = numbers.split(" ");

  const lowToHighOrder = arrNumbers.sort(function (a, b) {
    return a - b;
  });
  const lowestOne = lowToHighOrder[0];

  const highToLowOrder = arrNumbers.sort((a, b) => {
    return b - a;
  });
  const highestOne = highToLowOrder[0];

  return `${highestOne} ${lowestOne}`;
}
