function solution(string) {
  const breakCamelCaseString = string.replace(/([A-Z])/g, " $1");
  return breakCamelCaseString;
}
