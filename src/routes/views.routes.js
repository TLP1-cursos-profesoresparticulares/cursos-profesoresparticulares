const router = require('express').Router();

router.get('/', (_req, res)=>{
    res.render('index')
});

router.get('/login',(_req, res) => {
    res.render('login');
});

router.get('/register',(_req, res) => {
    res.render('registro');
});

router.get('/explorer',(_req, res) => {
    res.render('explorar');
});

module.exports = router;