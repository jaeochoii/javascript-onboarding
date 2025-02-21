function problem3(number) {
  const result = clapCount(number);
  const error = isError(number);
  if (error === "Not Error") return result;
  return error;
}

function isError(number) {
  const FIRST_NUMBER = 1;
  const LAST_NUMBER = 10000;

  if (number < FIRST_NUMBER || number > LAST_NUMBER) {
    return "숫자는 1이상 10,000 이하인 자연수여야만 합니다.";
  } else return "Not Error";
}

function clapCount(number) {
  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    let numberArr = String(i).split("");
    for (let j = 0; j < numberArr.length; j++) {
      if (isNumberDividedThree(Number(numberArr[j])) === true) cnt++;
    }
  }
  return cnt;
}

function isNumberDividedThree(number) {
  if (number !== 0 && number % 3 === 0) return true;
}

module.exports = problem3;
