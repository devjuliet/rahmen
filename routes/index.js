const express = require('express');
const router = express.Router();
const controller = require('../controllers/index/indexController');

/* GET home page. */
router.post('/login', controller.login);


module.exports = router;
