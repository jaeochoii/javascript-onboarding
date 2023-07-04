function problem7(user, friends, visitors) {
  let users = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user) users.push(friends[i][j]);
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (friends[i] !== user) users.push(visitors[i]);
  }

  let usersObj = {};

  const usersSet = new Set(users);
  const userArray = Array.from(usersSet);
  for (let i = 0; i < userArray.length; i++) {
    usersObj[userArray[i]] = 0;
  }

  let userFriends = []; // 사용자의 친구들 목록
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user) continue;
      else {
        if (friends[i][0] === user) userFriends.push(friends[i][1]);
        else userFriends.push(friends[i][0]);
      }
    }
  }

  const userFriendsLength = userFriends.length;

  for (let i = 0; i < userFriendsLength; i++) {
    for (let j = 0; j < friends.length; j++) {
      let friendPlace = friends[j].indexOf(userFriends[i]);
      if (friendPlace !== -1 && friends[j][1 - friendPlace] !== user) {
        usersObj[friends[j][1 - friendPlace]] += 10;
      } else continue;
    }
  }

  for (let i = 0; i < userFriendsLength; i++) {
    for (let j = 0; j < visitors.length; j++) {
      if (visitors[j] === userFriends[i]) {
        visitors.splice(j, 1);
        j--;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    usersObj[visitors[i]] += 1;
  }

  let sorted = Object.entries(usersObj).sort((a, b) => b[1] - a[1]);
  let result = [];

  for (let element of sorted) {
    if (element[1] !== 0) result.push(element[0]);
  }

  return result;
}

module.exports = problem7;
