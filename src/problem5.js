function problem5(money) {
  const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const BILL_LENGTH = BILL_UNIT_LIST.length;
  let billUnitCount = new Array(BILL_LENGTH).fill(0);
  const isError = isLengthError(money);
  const result = countList(money, BILL_UNIT_LIST, billUnitCount);
  if (isError === "Not Error") return result;
  return isLengthError;
}

function isLengthError(money) {
  const LEAST_MONEY = 1;
  const MAXIMUM_MONEY = 1000000;
  if (money < LEAST_MONEY || money > MAXIMUM_MONEY) {
    return "money는 1이상 1,000,000 이하인 자연수입니다.";
  }
  return "Not Error";
}

function countList(money, unitList, countList) {
  while (money > 0) {
    for (let billIndex = 0; billIndex < unitList.length; billIndex++) {
      if (money >= unitList[billIndex]) {
        money -= unitList[billIndex];
        countList[billIndex]++;
        billIndex--;
      } else continue;
    }
  }
  return countList;
}

module.exports = problem5;
