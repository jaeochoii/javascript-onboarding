function problem6(forms) {}

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
