function problem2(cryptogram) {
  if (isError(cryptogram) === "Not Error") {
    const result = removeRepeatChar(cryptogram);

    return result;
  }

  return isError(cryptogram);
}

function removeRepeatChar(string) {
  const stringLength = string.length;
  let removeResult = "";
  let duplicateAlphabet = "";
  let isChanged = false;

  for (let wordIndex = 0; wordIndex < stringLength; wordIndex++) {
    if (string[wordIndex] === string[wordIndex + 1]) {
      isChanged = true;
      duplicateAlphabet = string[wordIndex];
      continue;
    }

    if (string[wordIndex] === duplicateAlphabet) {
      duplicateAlphabet = "";
      continue;
    }

    removeResult += string[wordIndex];
  }

  if (isChanged === false) return removeResult;

  return removeRepeatChar(removeResult);
}

function isError(string) {
  const LengthError = isLengthError(string);
  const UpperCaseError = isUpperCaseError(string);

  if (LengthError === "Not Error" && UpperCaseError === "Not Error")
    return "Not Error";

  if (LengthError !== "Not Error") return LengthError;

  if (UpperCaseError !== "Not Error") return UpperCaseError;
}

function isLengthError(string) {
  if (string.length >= 1 && string.length <= 1000) return "Not Error";
  else return "문자의 길이는 1 이상 1000 이하인 문자열이어야 합니다.";
}

function isUpperCaseError(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== string[i].toLowerCase())
      return "문자는 소문자로 이루어져야만 합니다.";
    else return "Not Error";
  }
}

module.exports = problem2;
