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
  const array = word.split("");
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") {
      resultArr.push(" ");
      continue;
    } else if (upperArr.indexOf(array[i]) !== -1) {
      let foundWord = upperArr.indexOf(array[i]);
      resultArr.push(upperArr[25 - foundWord]);
      continue;
    } else if (lowerArr.indexOf(array[i]) !== -1) {
      let foundWord = lowerArr.indexOf(array[i]);
      resultArr.push(lowerArr[25 - foundWord]);
      continue;
    }
  }
  return resultArr.join("");
}

module.exports = problem4;
