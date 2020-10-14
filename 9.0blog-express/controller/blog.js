const xss = require('xss')
const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc `

    //返回promise对象
    return exec(sql)
}

const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`
    return exec(sql).then(row => {
        return row[0]
    })
}
const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含 title，content，author属性
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()

    const sql = `insert into blogs (title,content,createtime,author)
    values('${title}','${content}',${createTime},'${author}')
    `
    return exec(sql).then(insertData => {
        // console.log('insertData is ', insertData);
        return {
            id: insertData.insertId
        }
    })
}
const updateBlog = (id, blogData = {}) => {
    const title = blogData.title
    const content = blogData.content

    const sql = `
    update blogs set title='${title}',content='${content}' where id=${id}
    `
        //通过判断操作数据库后，返回的affectedRows的值，确定数据是否更新
    return exec(sql).then(updateData => {
        console.log('updateData is', updateData);
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}
const delBlog = (id, author) => {
    //本项目为了学习使用，直接使用硬删除，一般实际开发中都使用软删除，即变化更新一个状态值，之后根据状态值确定是否展示

    const sql = `delete from blogs where id=${id} and author='${author}'`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog,
}