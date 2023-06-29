function problem4(word) {
  const upperAlphabet = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + 65)
  );
  const lowerAlphabet = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + 97)
  );
  const result = changeWord(word, upperAlphabet, lowerAlphabet);
  return result;
}

function changeWord(word, upperArr, lowerArr) {
  const array = stringToArr(word);
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") resultArr.push(" ");
    else if (upperArr.indexOf(array[i]) !== -1)
      isUpperCase(array[i], upperArr, resultArr);
    else if (lowerArr.indexOf(array[i]) !== -1)
      isLowerCase(array[i], lowerArr, resultArr);
  }
  return resultArr.join("");
}

function stringToArr(word) {
  return word.split("");
}

function isUpperCase(char, upperArr, result) {
  let foundWord = upperArr.indexOf(char);
  result.push(upperArr[25 - foundWord]);
}

function isLowerCase(char, lowerArr, result) {
  let foundWord = lowerArr.indexOf(char);
  result.push(lowerArr[25 - foundWord]);
}

module.exports = problem4;
