let users = [];
let currId = 1;

module.exports = {
  getUsers: () => users,
  addUsers: (user) => {
    user.id = currId++;
    users.push(user);
  },
  updateUser: (id, updateData) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateData };
      return users[userIndex];
    }
    return null;
  },
  deleteUser: (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return true;
    }
    return false;
  },
  getUserById: (id) => users.find(u => u.id === id)
};
