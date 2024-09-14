const express = require('express');
const router = express.Router();
const controller = require('../controllers/rolesController');

router.get('/getRoles', controller.getRoles);

module.exports = router;
