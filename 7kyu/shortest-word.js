const findShort = (s) => s
  .split(" ")
  .sort((a, b) => a.length - b.length)[0]
  .length;

/* TEST */
findShort("bitcoin take over the world maybe who knows perhaps")
findShort("turns out random test cases are easier than writing out basic ones")
findShort("Let's travel abroad shall we");
