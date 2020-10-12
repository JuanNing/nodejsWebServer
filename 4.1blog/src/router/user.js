const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method

    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        console.log('req.body is ...' + req.body);
        console.log('username, password is ...' + username, password);
        const result = loginCheck(username, password)
        return result.then(loginData => {
            if (loginData) {
                console.log('loginData is ...' + loginData);
                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })

    }
}
module.exports = handleUserRouter