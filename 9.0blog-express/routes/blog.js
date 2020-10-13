var express = require('express');
var router = express.Router();


router.get('/list', function(req, res, next) {
    res.json({
        error: 0,
        data: [1, 2, 3, 4]
    })
});

module.exports = router;