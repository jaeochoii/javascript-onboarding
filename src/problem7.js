function usersList(user, friends, visitors) {
  const users = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user) users.push(friends[i][j]);
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] !== user) users.push(visitors[i]);
  }
  return users; // 모든 사용자의 이름이 담긴 배열 -> 객체를 생성할 때에만 쓰일 예정
}

function visitorScoreObj(user, friends, visitors) {
  let usersObj = {};
  const usersSet = new Set(usersList(user, friends, visitors));
  const userArray = Array.from(usersSet);
  for (let i = 0; i < userArray.length; i++) {
    usersObj[userArray[i]] = 0;
  }
  return usersObj; // 0으로 초기화한 모든 visitors 객체 {visitor: 0} -> 10으로 업데이트할 때에만 쓰일 예정
}

function userFriendsList(user, friends) {
  let userFriends = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user) continue;
      else {
        if (friends[i][0] === user) userFriends.push(friends[i][1]);
        else userFriends.push(friends[i][0]);
      }
    }
  }
  return userFriends; // user의 직접적인 친구들 목록
}

function updateFriendsVisitorScore(user, friends, visitors) {
  const userFriends = userFriendsList(user, friends);
  const userFriendsLength = userFriends.length;
  let updateObj = visitorScoreObj(user, friends, visitors);

  for (let i = 0; i < userFriendsLength; i++) {
    for (let j = 0; j < friends.length; j++) {
      let friendPlace = friends[j].indexOf(userFriends[i]);
      if (friendPlace !== -1 && friends[j][1 - friendPlace] !== user) {
        updateObj[friends[j][1 - friendPlace]] += 10;
      } else continue;
    }
  }
  return updateObj; // 10포인트 증가한 후의 객체 {friends: +10} -> 1씩 증가하기 이전까지만 쓰일 예정
}

function deleteUsersFriends(user, friends, visitors) {
  const userFriends = userFriendsList(user, friends);
  const userFriendsLength = userFriends.length;
  for (let i = 0; i < userFriendsLength; i++) {
    for (let j = 0; j < visitors.length; j++) {
      if (visitors[j] === userFriends[i]) {
        visitors.splice(j, 1);
        j--;
      }
    }
  }
  return visitors; // user의 friends가 아닌 방문자만 배열에 남겨두기 -> 1씩 증가할 때에만 쓰일 예정
}

function updateVisitorScore(user, friends, visitors) {
  const updateObj = updateFriendsVisitorScore(user, friends, visitors);
  const deleteFriendVisitors = deleteUsersFriends(user, friends, visitors);
  const updateVisitorsLength = deleteFriendVisitors.length;

  for (let i = 0; i < updateVisitorsLength; i++) {
    updateObj[deleteFriendVisitors[i]] += 1;
  }
  return updateObj;
}

function problem7(user, friends, visitors) {
  const resultObj = updateVisitorScore(user, friends, visitors);
  const sorted = Object.entries(resultObj).sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let element of sorted) {
    if (element[1] !== 0) result.push(element[0]);
  }
  return result;
}

module.exports = problem7;
