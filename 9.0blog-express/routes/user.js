var express = require('express');
var router = express.Router();
const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    return result.then(loginData => {
        if (loginData.username) {
            req.session.username = loginData.username
            req.session.realname = loginData.realname

            res.json(new SuccessModel())
            return
        }
        res.json(new ErrorModel('登录失败'))
    })
});

router.get('/login-test', (req, res, next) => {
        if (req.session.username) {
            res.json({
                errno: 0,
                msg: '已登录'
            })
            return
        }
        res.json({
            errno: -1,
            msg: '未登录'
        })
    })
    //test，记录用户浏览访问本页面的次数，可通过刷新页面进行浏览次数的增加
router.get('/session-test', (req, res, next) => {
    const session = req.session
    if (session.viewNum == null) { //直接赋值是没有问题的
        session.viewNum = 0
    }
    session.viewNum++

        res.json({
            viewNum: session.viewNum
        })
})
module.exports = router;