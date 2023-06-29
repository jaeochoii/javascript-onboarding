function problem4(word) {
  const alphabet = Array.from({ length: 26 }, (index) =>
    String.fromCharCode(index + 65)
  );
  const reverseAlphabet = alphabet.reverse();
}

function isLengthError(word) {
  const leastLength = 0;
  const maximumLength = 1000;

  if (word.length < leastLength || word.length > maximumLength) {
    return "word의 길이는 1이상 1,000 이하입니다.";
  }
  return "Not Error";
}

function changeWord(word, arr, reverseArr) {
  const array = word.split("");
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") resultArr.push(" ");
    let foundWord = arr.indexOf(array[i]);
    resultArr.push(reverseArr[foundWord]);
  }
}

module.exports = problem4;
