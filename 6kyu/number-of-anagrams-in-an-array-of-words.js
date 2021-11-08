function anagramCounter(wordsArray) {
  let counter = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    let wordStringOne = wordsArray[i].split("").sort().join("");

    for (let j = i + 1; j < wordsArray.length; j++) {
      let wordStringTwo = wordsArray[j].split("").sort().join("");

      if (wordStringOne === wordStringTwo) {
        counter++;
      }
    }
  }
  return counter;
}
