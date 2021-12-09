const getMiddle = (s) =>
  s.length % 2 == 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
