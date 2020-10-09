const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method

    if (method == 'POST' && req.path === '/api/user/login') {
        const { username, keyword } = req.body
        const result = loginCheck(username, keyword)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')
    }
}
module.exports = handleUserRouter