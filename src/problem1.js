function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  const compareScore = [pobiScore, crongScore];
  const pobiError = isError(pobi);
  const crongError = isError(crong);
  const result = getResult(compareScore, pobiError, crongError);

  return result;
}

function getScore(person) {
  const [leftScore, rightScore] = person;
  const leftValues = calculateScore(leftScore);
  const rightValues = calculateScore(rightScore);

  return Math.max(leftValues, rightValues);
}

function calculateScore(score) {
  const hundred = Math.floor(score / 100);
  const ten = Math.floor((score % 100) / 10);
  const one = Math.floor((score % 100) % 10);
  const plusNumber = hundred + ten + one;

  let multiplyNumber = hundred === 0 ? ten * one : hundred * ten * one;

  return Math.max(plusNumber, multiplyNumber);
}

function isError(person) {
  const pageError = isPageError(person);
  const pageCountError = isPageCountError(person);
  const leftPageError = isLeftPageError(person);
  const orderedError = isRightPageError(person);

  if (pageError !== "Not Error") return pageError;

  if (pageCountError !== "Not Error") return pageCountError;

  if (leftPageError !== "Not Error") return leftPageError;

  if (orderedError !== "Not Error") return orderedError;

  return "Not Error";
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

function getResult(score, pobi, crong) {
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const SAME_SCORE = 0;
  const EXCEPTION = -1;

  if (pobi !== "Not Error" || crong !== "Not Error") return EXCEPTION;

  if (score[0] > score[1]) return POBI_WIN;

  if (score[0] === score[1]) return SAME_SCORE;

  if (score[0] < score[1]) return CRONG_WIN;
}

module.exports = problem1;
