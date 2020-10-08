const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const getPostData = (req) => {
        const promise = new Promise((resolve, reject) => {
            //前期准备，判断方法和头文件
            if (req.method !== 'POST') {
                resolve({})
                return
            }
            if (req.headers['Content-type'] !== 'application/json') {
                resolve()
                return
            }

            //将数据保存到相应的位置
            let postData = ''
            req.on('data', chunk => {
                postData += chunk.toString()
            })
            req.on('end', () => {
                if (!postData) {
                    resolve()
                    return
                }
                resolve(
                    JSON.parse(postData)
                )
            })
        })
    }
    //将正常http.createServer的回调方法抽离为serverHandle方法
    //在www.js中直接调用此方法
const serverHandle = (req, res) => {

    //设置返回json类型
    res.setHeader('Content-type', 'application/json')

    //处理url
    const url = req.url
    req.path = url.split('?')[0]

    //解析从URL参数
    req.query = querystring.parse(url.split('?')[0])

    //处理post data
    getPostData(req).then(postData => {
        req.body = postData

        //处理blog路由
        const blogData = handleBlogRouter(req, res)
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }

        //处理user路由
        const userData = handleUserRouter(req, res)
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }

        //未命中路由
        res.writeHead(404, { 'Content-type': 'text/plain' })
        res.write('404 NOT FOUND \n')
        res.end()

    })
}

module.exports = serverHandle
    // env: process.env.NODE_ENV