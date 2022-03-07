const {getJSON, saveJSON} = require('../utils/fileHelpers');

class User {
  constructor() {
    this.saveData = saveJSON;
    this.fetchData = getJSON;
  }

  async find(id) {
    // fetch the users
    // found the users
    //   if found return the user
    //   if not found return Promise.reject(new Error(`User with id ${id} not found`));
    const data = this.fetchData();
    const user = data.find(user => user.id === id);
    if (user === undefined) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(user) {
    // fetch the users
    // append the user to all the users
    // save the users
    // return the saved user
    const data = this.fetchData();
    const indexOfUser = data.indexOf(user => user.id === id);
    if (indexOfUser === -1) {
      return user;
    }
    data.push({
      id: user.id,
       email: user.emails[0].value,
       imageUrl: user.photos[0].value,
       name: user.displayName,
    });
    this.saveData(data);
    return user;
  }
};

module.exports = new User();