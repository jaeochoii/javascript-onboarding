function problem6(forms) {
  let result = [];
  const userNumber = forms.length;
  let email_set = new Set();

  if (userNumber < 2) return result;

  let repeatableArr = Array.from({ length: userNumber }, () => 0);

  for (let i = 0; i < userNumber; i++) {
    for (let j = i + 1; j < userNumber; j++) {
      if (repeatableArr[i] === 1 && repeatableArr[j] === 1) continue;
      if (isRepeatableNickname(i, j, forms)) {
        repeatableArr[i] = 1;
        repeatableArr[j] = 1;
        email_set.add(forms[i][0]);
        email_set.add(forms[j][0]);
      }
    }
  }
  result = sortEmailArray(email_set);
  return result;
}

function sortEmailArray(email_set) {
  let emailArray = Array.from(email_set);
  emailArray.sort();
  return emailArray;
}

function isRepeatableNickname(user1, user2, forms) {
  let findStr = "";
  nickName1 = forms[user1][1];
  nickName2 = forms[user2][1];

  for (let index = 0; index < nickName1.length - 1; index++) {
    findStr = nickName1.substring(index, index + 2);

    if (nickName2.includes(findStr)) {
      return true;
    }
  }
  return false;
}

module.exports = problem6;
