const loginCheck = (username, password) => {
    if (username === 'lili' && password === '123') {
        return true
    }
    return false
}
module.exports = {
    loginCheck,
}