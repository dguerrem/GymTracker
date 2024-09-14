const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

router.get('/getRoles', rolesController.getRoles);

module.exports = router;
