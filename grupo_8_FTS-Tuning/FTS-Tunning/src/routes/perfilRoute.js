var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')


router.get('/', controller.perfilUsers);

module.exports = router;