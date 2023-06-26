function problem1(pobi, crong) {}

function getScore(person) {
  const leftScore = person[0];
  const leftValues = calculateScore(leftScore);
  const rightScore = person[1];
  const rightValues = calculateScore(rightScore);
}

function calculateScore(score) {
  const hundred = Math.floor(score / 100);
  const ten = Math.floor((score % 100) / 10);
  const one = Math.floor((score % 100) % 10);

  const plusNumber = hundred + ten + one;
  const multiplyNumber = hundred * ten * one;

  return Math.max(plusNumber, multiplyNumber);
}
module.exports = problem1;
