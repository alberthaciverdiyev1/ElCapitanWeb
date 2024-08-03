const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');
const ServiceController = require('../controllers/ServiceController');
const DashboardController = require('../controllers/DashboardController');


// Main routes
router.get('/', HomeController.Index);
//Service Route
router.get('/services', ServiceController.Index);
router.get('/service-details', ServiceController.Details);

router.get('/dashboard', DashboardController.Index);
router.get('/settings', DashboardController.Setting);

// // Auth routes
router.get('/register', AuthController.Register);
router.get('/login', AuthController.Login);
// router.post('/register', validate.registerValidator, AuthController.register);
// router.post('/login', AuthController.login);

// router.use(jwt.tokenCheck);  


module.exports = router;
