const {
    getList,
    getDetail,
    newBlog,
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id
        const detail = getDetail(id)
        return new SuccessModel(detail)
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            'msg': '更新一篇博客的路由'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        return {
            'msg': '删除一篇博客的路由'
        }
    }

}

module.exports = handleBlogRouter