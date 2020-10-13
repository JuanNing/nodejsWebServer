var express = require('express');
var router = express.Router();


router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    res.json({

        username,
        password,
        error: 0,
    })
});

module.exports = router;