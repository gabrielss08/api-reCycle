const express = require('express');
const router = express.Router();



router.get('/login', (req, res) => {
    res.render("usuario/login");
});

router.get('/cadastro', (req, res) => {
    res.render("usuario/cadastro");
});

router.get('/home', (req, res) => {
    res.render("central/feed");
});



module.exports = router;