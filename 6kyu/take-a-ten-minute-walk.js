function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  } else {
    const stringN = walk.join("").replace(/([n])/g).length;
    const stringS = walk.join("").replace(/([s])/g).length;
    const stringW = walk.join("").replace(/([w])/g).length;
    const stringE = walk.join("").replace(/([e])/g).length;
    if (stringN !== stringS || stringW !== stringE) {
      return false;
    }
    return true;
  }
}
