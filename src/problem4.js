function problem4(word) {}

function isLengthError(word) {
  const leastLength = 0;
  const maximumLength = 1000;

  if (word.length < leastLength || word.length > maximumLength) {
    return "word의 길이는 1이상 1,000 이하입니다.";
  }
  return "Not Error";
}

module.exports = problem4;
