const { exec } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')
const loginCheck = (username, password) => {
    const sql = `
    select username, realname from users where username='${username}' and password='${password}'
    `
    return exec(sql).then(rows => {
        console.log('controller user row is...' + rows[0]);
        // return rows[0] || {}
        if (rows[0] === 'undefined') {
            return {}
        }
        return rows[0]
    })
}
module.exports = {
    loginCheck,
}