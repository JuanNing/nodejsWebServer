const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    del,
} = require('../controller/blog')

const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {

        const detail = getDetail(id)
        return new SuccessModel(detail)
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.data)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失败')
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        const result = del(id)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }
    }

}

module.exports = handleBlogRouter