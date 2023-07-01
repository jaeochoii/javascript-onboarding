function problem5(money) {
  const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const BILL_LENGTH = BILL_UNIT_LIST.length;
  let billUnitCount = new Array(BILL_LENGTH).fill(0);
  const result = countList(money, BILL_UNIT_LIST, billUnitCount);
  return result;
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
