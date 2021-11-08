function descendingOrder(n) {
  const arrOfNToString = n.toString().split("");
  const highToLowOrder = arrOfNToString.sort((a, b) => {
    return b - a;
  });
  const joinNumbers = highToLowOrder.join("");
  const stringToNumber = Math.floor(joinNumbers);
  return stringToNumber;
}
