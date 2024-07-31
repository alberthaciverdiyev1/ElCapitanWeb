const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');


// Main routes
router.get('/', HomeController.Index);

// // Auth routes
// router.get('/register', AuthController.registerView);
// router.post('/register', validate.registerValidator, AuthController.register);
// router.get('/login', AuthController.loginView);
// router.post('/login', AuthController.login);

// router.use(jwt.tokenCheck);  


module.exports = router;
