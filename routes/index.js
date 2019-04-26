const router = require('express').Router();
const { addUser, deleteUser, findAllUsers, updateUser } = require('../controllers/userController');

const slug = '/api/users';
router.get(slug, findAllUsers);
router.put(slug, updateUser);
router.post(slug, addUser);
router.delete(slug, deleteUser);

module.exports = router;
