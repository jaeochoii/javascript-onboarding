function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
}

function getScore(person) {
  const leftScore = person[0];
  const leftValues = calculateScore(leftScore);
  const rightScore = person[1];
  const rightValues = calculateScore(rightScore);

  return Math.max(leftValues, rightValues);
}

function calculateScore(score) {
  const hundred = Math.floor(score / 100);
  const ten = Math.floor((score % 100) / 10);
  const one = Math.floor((score % 100) % 10);

  const plusNumber = hundred + ten + one;
  const multiplyNumber = hundred * ten * one;

  return Math.max(plusNumber, multiplyNumber);
}

function isPageError(person) {
  const firstPage = 1;
  const lastPage = 400;

  if (person[0] <= firstPage || person[1] >= lastPage)
    return "페이지는 1페이지 이상 400페이지 이하 입니다.";
  else return "Not Error";
}

function isPageCountError(person) {
  if (person.length !== 2) return "페이지는 두 쪽을 선택해야 합니다.";
  else return "Not Error";
}

function isLeftPageError(person) {
  if (person[0] % 2 === 0) return "왼쪽 페이지는 홀수여야만 합니다.";
  else return "Not Error";
}

function isRightPageError(person) {
  if (person[1] !== person[0] + 1)
    return "오른쪽 페이지는 왼쪽 페이지의 다음 숫자여야만 합니다.";
  else return "Not Error";
}

module.exports = problem1;
