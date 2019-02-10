export function addUser(userName) {
  return {
    type: "ADD_USER",
    userName
  };
}

export function removeUser(userName) {
  return {
    type: "REMOVE_USER",
    userName
  };
}
