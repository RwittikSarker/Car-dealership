const express = require('express');
const userController = require('../controllers/userController');
const databaseController = require('../controllers/databaseController');
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController'); 
const router = express.Router();

router.post('/createDB', databaseController.createDB);
router.get('/users', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/loginCatch', loginController.login);
router.post('/signinCatch', signupController.signup);
router.post('/test', (req, res) => {
    res.send('Test route is working');
});

module.exports = router;
