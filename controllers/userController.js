const db = require('../models/userModel');

module.exports = {
  /**
   * Gets all users.
   */
  async findAllUsers(req, res) {
    try {
      const users = await db.User.find({});
      res.json(users);
    } catch (err) {
      res.json(err);
    }
  },

  /**
   * Adds a new user.
   */
  async addUser(req, res) {
    try {
      const { name, phone, email } = req.body;
      const newUser = await db.User.create({ name, phone, email });
      res.json(newUser);
    } catch (err) {
      res.json(err);
    }
  },

  /**
   * Removes a user.
   */
  async deleteUser(req, res) {
    try {
      const userToDelete = await db.User.deleteOne({ _id: req.body._id });
      res.json(userToDelete);
    } catch (err) {
      res.json(err);
    }
  },

  /**
   * Updates a user.
   */
  async updateUser(req, res) {
    try {
      const { _id } = req.body;
      const userToUpdate = await db.User.findOneAndUpdate(
        { _id },
        { $set: { email: 'updated@email.com' } }
      );
      res.json(userToUpdate);
    } catch (err) {
      res.json(err);
    }
  }
}
