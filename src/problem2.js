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
        else {
          string = string.substr(i, j);
          break;
        }
      }
    }
  }
  return string;
}

function isLengthError(string) {
  if (string.length >= 1 && string.length <= 1000) return "Not Error";
  else return "문자의 길이는 1 이상 1000 이하인 문자열이어야 합니다.";
}

function isUpperCaseError(string) {
  string.map((char) => {
    if (char !== char.toLowerCase())
      return "문자는 소문자로 이루어져야만 합니다.";
    else return "Not Error";
  });
}

module.exports = problem2;
