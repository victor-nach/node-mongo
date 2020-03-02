const { Router } = require('express');
const Controllers = require('../controllers');

const router = new Router();

router.post('/users', Controllers.signUp)

module.exports = router;