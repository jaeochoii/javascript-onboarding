function problem2(cryptogram) {
  return removeRepeatChar(cryptogram);
}

function removeRepeatChar(string) {
  for (let i = 0; i < string.length; i++) {
    const CHAR = string[i];
    if (string[i] !== string[i + 1]) continue;
    else {
      for (let j = i; ; j++) {
        if (string[j] === CHAR) continue;
        else string = string.substr(i, j);
      }
    }
  }
  return string;
}

module.exports = problem2;
