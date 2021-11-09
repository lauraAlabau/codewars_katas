const whatTimeIsIt = (angle) => {
  let totalMinutes = angle * 2;
  let minuts = Math.floor(totalMinutes % 60);
  let hours = Math.floor(totalMinutes / 60);

  minuts = minuts < 10 ? "0" + minuts : minuts;
  hours = hours < 10 ? "0" + hours : hours;

  if (angle === 0 || angle === 360) {
    return "12:00";
  }
  if (hours == 00) {
    hours = "12";
  }
  return hours + ":" + minuts;
};
