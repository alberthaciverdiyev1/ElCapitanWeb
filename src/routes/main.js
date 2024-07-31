const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');
const ServiceController = require('../controllers/ServiceController');


// Main routes
router.get('/', HomeController.Index);
//Service Route
router.get('/services', ServiceController.Index);

// // Auth routes
router.get('/register', AuthController.Register);
router.get('/login', AuthController.Login);
// router.post('/register', validate.registerValidator, AuthController.register);
// router.post('/login', AuthController.login);

// router.use(jwt.tokenCheck);  


module.exports = router;
