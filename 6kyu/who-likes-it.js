function likes(names) {
  if (!names.length) {
    return "no one likes this";
  } else if (names.length == 1) {
    return `${names} likes this`;
  } else if (names.length == 2) {
    names.splice(names.length - 1, 0, "and");
    return `${names.join(" ")} like this`;
  } else if (names.length == 3) {
    const firstNames = names.splice(0, 2).join(", ");
    const lastName = names.splice(names.length - 1);
    return `${firstNames} and ${lastName} like this`;
  } else {
    const firstNames = names.splice(0, 2).join(", ");
    return `${firstNames} and ${names.length} others like this`;
  }
}

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
