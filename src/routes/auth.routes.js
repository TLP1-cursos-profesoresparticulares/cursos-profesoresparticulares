const { register, login } = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/api/login', login);

router.post('/api/register', register);


module.exports = router;