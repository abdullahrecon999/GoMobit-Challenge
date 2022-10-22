var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing */
router.get('/GetUsers', userController.getAllUsers);

/* GET User by Email */
router.get('/GetUser/:email', userController.getUser);

/* Add new User */
router.post('/AddUser', userController.createUser);

module.exports = router;